"""Dashboard designer module.

Users can add multiple widgets (charts, tables, maps) and configure each one.
Widgets are stored in session state so they persist across reruns.
"""

import streamlit as st
import pandas as pd
import plotly.express as px
import pydeck as pdk

WIDGET_TYPES = [
    "Bar Chart",
    "Line Chart",
    "Scatter Plot",
    "Pie Chart",
    "Histogram",
    "Data Table",
    "Map",
    "Metric Card",
]


def _get_numeric_cols(df: pd.DataFrame) -> list[str]:
    return df.select_dtypes(include="number").columns.tolist()


def _get_datetime_cols(df: pd.DataFrame) -> list[str]:
    return df.select_dtypes(include="datetime").columns.tolist()


def _get_categorical_cols(df: pd.DataFrame) -> list[str]:
    return df.select_dtypes(include=["object", "category"]).columns.tolist()


# ---------------------------------------------------------------------------
# Individual widget renderers
# ---------------------------------------------------------------------------

def _render_bar_chart(df: pd.DataFrame, cfg: dict):
    cat_cols = _get_categorical_cols(df) + _get_datetime_cols(df)
    num_cols = _get_numeric_cols(df)
    if not cat_cols or not num_cols:
        st.info("Need at least one categorical and one numeric column for a bar chart.")
        return

    x = cfg.get("x") or cat_cols[0]
    y = cfg.get("y") or num_cols[0]
    agg = cfg.get("agg", "count")

    if agg == "count":
        plot_df = df.groupby(x, dropna=False).size().reset_index(name="count")
        plot_df = plot_df.sort_values("count", ascending=False).head(30)
        fig = px.bar(plot_df, x=x, y="count", title=cfg.get("title", ""))
    else:
        plot_df = df.groupby(x, dropna=False)[y].agg(agg).reset_index()
        plot_df = plot_df.sort_values(y, ascending=False).head(30)
        fig = px.bar(plot_df, x=x, y=y, title=cfg.get("title", ""))

    fig.update_layout(height=400)
    st.plotly_chart(fig, use_container_width=True)


def _render_line_chart(df: pd.DataFrame, cfg: dict):
    dt_cols = _get_datetime_cols(df)
    num_cols = _get_numeric_cols(df)
    all_cols = df.columns.tolist()

    x = cfg.get("x") or (dt_cols[0] if dt_cols else all_cols[0])
    y = cfg.get("y") or (num_cols[0] if num_cols else all_cols[0])
    agg = cfg.get("agg", "count")

    temp = df[[x]].dropna().copy() if agg == "count" else df[[x, y]].dropna().copy()

    if pd.api.types.is_datetime64_any_dtype(temp[x]):
        freq = cfg.get("freq", "D")
        temp["_period"] = temp[x].dt.to_period(freq).dt.to_timestamp()
        if agg == "count":
            plot_df = temp.groupby("_period").size().reset_index(name="count")
            fig = px.line(plot_df, x="_period", y="count", title=cfg.get("title", ""))
        else:
            plot_df = temp.groupby("_period")[y].agg(agg).reset_index()
            fig = px.line(plot_df, x="_period", y=y, title=cfg.get("title", ""))
    else:
        if agg == "count":
            plot_df = temp.groupby(x).size().reset_index(name="count")
            fig = px.line(plot_df, x=x, y="count", title=cfg.get("title", ""))
        else:
            plot_df = temp.groupby(x)[y].agg(agg).reset_index()
            fig = px.line(plot_df, x=x, y=y, title=cfg.get("title", ""))

    fig.update_layout(height=400)
    st.plotly_chart(fig, use_container_width=True)


def _render_scatter(df: pd.DataFrame, cfg: dict):
    num_cols = _get_numeric_cols(df)
    if len(num_cols) < 2:
        st.info("Need at least two numeric columns for a scatter plot.")
        return
    x = cfg.get("x") or num_cols[0]
    y = cfg.get("y") or num_cols[1]
    color = cfg.get("color")
    fig = px.scatter(
        df.dropna(subset=[x, y]).head(5000),
        x=x, y=y, color=color,
        title=cfg.get("title", ""),
        opacity=0.6,
    )
    fig.update_layout(height=400)
    st.plotly_chart(fig, use_container_width=True)


def _render_pie(df: pd.DataFrame, cfg: dict):
    cat_cols = _get_categorical_cols(df)
    if not cat_cols:
        st.info("Need at least one categorical column for a pie chart.")
        return
    col = cfg.get("x") or cat_cols[0]
    top_n = cfg.get("top_n", 10)
    counts = df[col].value_counts().head(top_n).reset_index()
    counts.columns = [col, "count"]
    fig = px.pie(counts, names=col, values="count", title=cfg.get("title", ""))
    fig.update_layout(height=400)
    st.plotly_chart(fig, use_container_width=True)


def _render_histogram(df: pd.DataFrame, cfg: dict):
    num_cols = _get_numeric_cols(df)
    if not num_cols:
        st.info("Need at least one numeric column for a histogram.")
        return
    col = cfg.get("x") or num_cols[0]
    bins = cfg.get("bins", 50)
    fig = px.histogram(df, x=col, nbins=bins, title=cfg.get("title", ""))
    fig.update_layout(height=400)
    st.plotly_chart(fig, use_container_width=True)


def _render_table(df: pd.DataFrame, cfg: dict):
    cols = cfg.get("columns") or df.columns.tolist()
    show_n = cfg.get("show_n", 500)
    st.dataframe(df[cols].head(show_n), use_container_width=True, hide_index=True)


def _render_map(df: pd.DataFrame, cfg: dict, role_map: dict):
    lat_cols = role_map.get("Latitude", [])
    lon_cols = role_map.get("Longitude", [])

    lat_col = cfg.get("lat") or (lat_cols[0] if lat_cols else None)
    lon_col = cfg.get("lon") or (lon_cols[0] if lon_cols else None)

    if not lat_col or not lon_col:
        st.info("Assign Latitude and Longitude fields in Field Mapping to use maps.")
        return

    map_df = df[[lat_col, lon_col]].dropna()
    if map_df.empty:
        st.info("No valid coordinates to plot.")
        return

    map_df = map_df.head(10000)  # cap points for performance

    color_hex = cfg.get("color_hex", "#e74c3c")
    r, g, b = int(color_hex[1:3], 16), int(color_hex[3:5], 16), int(color_hex[5:7], 16)
    radius = cfg.get("radius", 60)

    center_lat = map_df[lat_col].mean()
    center_lon = map_df[lon_col].mean()

    layer = pdk.Layer(
        "ScatterplotLayer",
        data=map_df,
        get_position=f"[{lon_col}, {lat_col}]",
        get_radius=radius,
        get_fill_color=[r, g, b, 160],
        pickable=True,
    )

    view = pdk.ViewState(latitude=center_lat, longitude=center_lon, zoom=11, pitch=0)
    deck = pdk.Deck(layers=[layer], initial_view_state=view, tooltip={"text": f"{lat_col}: {{{lat_col}}}\n{lon_col}: {{{lon_col}}}"})
    st.pydeck_chart(deck)


def _render_metric(df: pd.DataFrame, cfg: dict):
    num_cols = _get_numeric_cols(df)
    if not num_cols:
        st.info("Need numeric columns for a metric card.")
        return
    col = cfg.get("x") or num_cols[0]
    agg = cfg.get("agg", "sum")
    value = df[col].agg(agg)
    label = cfg.get("title") or f"{agg.title()} of {col}"
    st.metric(label, f"{value:,.2f}")


# ---------------------------------------------------------------------------
# Widget configuration form
# ---------------------------------------------------------------------------

def _widget_config_form(df: pd.DataFrame, widget_type: str, idx: int, role_map: dict) -> dict:
    """Render config inputs for a widget and return the config dict."""
    cfg: dict = {}
    num_cols = _get_numeric_cols(df)
    cat_cols = _get_categorical_cols(df)
    dt_cols = _get_datetime_cols(df)
    all_cols = df.columns.tolist()

    cfg["title"] = st.text_input("Title", value="", key=f"wt_{idx}")

    if widget_type in ("Bar Chart", "Line Chart"):
        c1, c2, c3 = st.columns(3)
        with c1:
            x_options = cat_cols + dt_cols if widget_type == "Bar Chart" else dt_cols + all_cols
            cfg["x"] = st.selectbox("X axis", x_options, key=f"wx_{idx}") if x_options else None
        with c2:
            cfg["y"] = st.selectbox("Y axis", num_cols, key=f"wy_{idx}") if num_cols else None
        with c3:
            cfg["agg"] = st.selectbox("Aggregation", ["count", "sum", "mean", "median", "min", "max"], key=f"wa_{idx}")
        if widget_type == "Line Chart" and dt_cols:
            cfg["freq"] = st.selectbox("Time frequency", ["D", "W", "M", "Q", "Y"], key=f"wf_{idx}")

    elif widget_type == "Scatter Plot":
        c1, c2, c3 = st.columns(3)
        with c1:
            cfg["x"] = st.selectbox("X axis", num_cols, key=f"wx_{idx}") if num_cols else None
        with c2:
            cfg["y"] = st.selectbox("Y axis", num_cols, index=min(1, len(num_cols) - 1), key=f"wy_{idx}") if num_cols else None
        with c3:
            color_options = ["(none)"] + cat_cols
            sel = st.selectbox("Color by", color_options, key=f"wc_{idx}")
            cfg["color"] = sel if sel != "(none)" else None

    elif widget_type == "Pie Chart":
        cfg["x"] = st.selectbox("Category column", cat_cols, key=f"wx_{idx}") if cat_cols else None
        cfg["top_n"] = st.slider("Top N categories", 3, 30, 10, key=f"wn_{idx}")

    elif widget_type == "Histogram":
        cfg["x"] = st.selectbox("Column", num_cols, key=f"wx_{idx}") if num_cols else None
        cfg["bins"] = st.slider("Bins", 5, 200, 50, key=f"wb_{idx}")

    elif widget_type == "Data Table":
        cfg["columns"] = st.multiselect("Columns to show", all_cols, default=all_cols[:10], key=f"wco_{idx}")
        cfg["show_n"] = st.slider("Max rows", 10, 5000, 500, key=f"wn_{idx}")

    elif widget_type == "Map":
        lat_cols = role_map.get("Latitude", [])
        lon_cols = role_map.get("Longitude", [])
        c1, c2 = st.columns(2)
        with c1:
            cfg["lat"] = st.selectbox("Latitude column", lat_cols + num_cols, key=f"wlat_{idx}") if (lat_cols or num_cols) else None
        with c2:
            cfg["lon"] = st.selectbox("Longitude column", lon_cols + num_cols, key=f"wlon_{idx}") if (lon_cols or num_cols) else None
        cfg["color_hex"] = st.color_picker("Point colour", "#e74c3c", key=f"wcol_{idx}")
        cfg["radius"] = st.slider("Point radius", 10, 500, 60, key=f"wr_{idx}")

    elif widget_type == "Metric Card":
        c1, c2 = st.columns(2)
        with c1:
            cfg["x"] = st.selectbox("Column", num_cols, key=f"wx_{idx}") if num_cols else None
        with c2:
            cfg["agg"] = st.selectbox("Aggregation", ["sum", "mean", "median", "count", "min", "max"], key=f"wa_{idx}")

    return cfg


# ---------------------------------------------------------------------------
# Main dashboard renderer
# ---------------------------------------------------------------------------

_RENDERERS = {
    "Bar Chart": _render_bar_chart,
    "Line Chart": _render_line_chart,
    "Scatter Plot": _render_scatter,
    "Pie Chart": _render_pie,
    "Histogram": _render_histogram,
    "Data Table": _render_table,
    "Metric Card": _render_metric,
}


def render_dashboard(df: pd.DataFrame, role_map: dict):
    """Main entry point for the dashboard designer."""
    st.subheader("Dashboard Designer")

    if "widgets" not in st.session_state:
        st.session_state.widgets = []

    # --- Add widget --------------------------------------------------------------
    with st.expander("Add a widget", expanded=not st.session_state.widgets):
        widget_type = st.selectbox("Widget type", WIDGET_TYPES, key="new_widget_type")
        cfg = _widget_config_form(df, widget_type, idx=len(st.session_state.widgets), role_map=role_map)
        if st.button("Add to Dashboard"):
            st.session_state.widgets.append({"type": widget_type, "cfg": cfg})
            st.rerun()

    if not st.session_state.widgets:
        st.info("No widgets yet. Add one above to start building your dashboard.")
        return

    # --- Render widgets ----------------------------------------------------------
    # Two-column layout
    layout = st.selectbox("Layout", ["Single column", "Two columns"], key="dash_layout")

    if layout == "Two columns":
        cols = st.columns(2)
        for i, widget in enumerate(st.session_state.widgets):
            with cols[i % 2]:
                _render_single_widget(df, widget, i, role_map)
    else:
        for i, widget in enumerate(st.session_state.widgets):
            _render_single_widget(df, widget, i, role_map)


def _render_single_widget(df: pd.DataFrame, widget: dict, idx: int, role_map: dict):
    """Render one widget with a remove button."""
    wtype = widget["type"]
    cfg = widget["cfg"]
    title = cfg.get("title") or f"{wtype} #{idx + 1}"

    with st.container(border=True):
        c1, c2 = st.columns([6, 1])
        c1.markdown(f"**{title}**")
        if c2.button("Remove", key=f"rm_{idx}"):
            st.session_state.widgets.pop(idx)
            st.rerun()

        if wtype == "Map":
            _render_map(df, cfg, role_map)
        else:
            renderer = _RENDERERS.get(wtype)
            if renderer:
                renderer(df, cfg)
