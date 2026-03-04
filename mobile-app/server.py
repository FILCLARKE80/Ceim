"""
Residential Property Price Index - Mobile App Server
A Flask backend serving property price index data with a mobile-first PWA frontend.
"""

import json
import os
from flask import Flask, jsonify, request, send_from_directory

app = Flask(__name__, static_folder="static", template_folder="templates")

DATA_PATH = os.path.join(os.path.dirname(__file__), "data", "property_price_index.json")


def load_data():
    with open(DATA_PATH, "r") as f:
        return json.load(f)


@app.route("/")
def index():
    return send_from_directory("templates", "index.html")


@app.route("/manifest.json")
def manifest():
    return send_from_directory("static", "manifest.json")


@app.route("/sw.js")
def service_worker():
    return send_from_directory("static/js", "sw.js", mimetype="application/javascript")


@app.route("/api/regions")
def get_regions():
    data = load_data()
    regions = [
        {"id": r["id"], "name": r["name"], "country": r["country"]}
        for r in data["regions"]
    ]
    return jsonify({"regions": regions})


@app.route("/api/metadata")
def get_metadata():
    data = load_data()
    return jsonify(data["metadata"])


@app.route("/api/search")
def search():
    data = load_data()
    query = request.args.get("q", "").lower().strip()
    property_type = request.args.get("type", "all")
    date_from = request.args.get("from", "")
    date_to = request.args.get("to", "")

    results = []
    for region in data["regions"]:
        if query and query not in region["name"].lower() and query not in region["country"].lower():
            continue

        filtered_data = []
        for entry in region["data"]:
            if date_from and entry["date"] < date_from:
                continue
            if date_to and entry["date"] > date_to:
                continue
            filtered_data.append(entry)

        if filtered_data:
            latest = filtered_data[-1]
            earliest = filtered_data[0]
            index_val = latest.get(property_type, latest["all"])
            prev_val = earliest.get(property_type, earliest["all"])
            change = round(((index_val - prev_val) / prev_val) * 100, 1)

            results.append({
                "id": region["id"],
                "name": region["name"],
                "country": region["country"],
                "latest_index": index_val,
                "latest_avg_price": latest["avg_price"],
                "change_percent": change,
                "period": f"{earliest['date']} to {latest['date']}",
                "data": filtered_data,
            })

    results.sort(key=lambda x: x["latest_index"], reverse=True)
    return jsonify({"results": results, "count": len(results)})


@app.route("/api/region/<region_id>")
def get_region(region_id):
    data = load_data()
    for region in data["regions"]:
        if region["id"] == region_id:
            return jsonify(region)
    return jsonify({"error": "Region not found"}), 404


@app.route("/api/compare")
def compare_regions():
    data = load_data()
    region_ids = request.args.get("regions", "").split(",")
    property_type = request.args.get("type", "all")

    results = []
    for region in data["regions"]:
        if region["id"] in region_ids:
            series = [
                {"date": d["date"], "value": d.get(property_type, d["all"])}
                for d in region["data"]
            ]
            results.append({
                "id": region["id"],
                "name": region["name"],
                "series": series,
            })

    return jsonify({"comparison": results})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
