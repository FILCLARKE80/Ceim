# Residential Property Price Index - Mobile App

A mobile-first Progressive Web App (PWA) for searching and exploring residential property price index data. Designed for Android with Material Design 3 interface.

## Features

- **Search** - Find regions by name with real-time results
- **Filter** - Filter by property type (Detached, Semi-Detached, Terraced, Flat)
- **Region Detail** - Interactive charts showing price index trends
- **Compare** - Side-by-side comparison of up to 5 regions
- **Trends** - National overview with insights
- **Installable** - PWA that can be installed on Android home screen

## Quick Start

```bash
cd mobile-app
pip install -r requirements.txt
python server.py
```

Open `http://localhost:5000` on your Android phone (same network) or browser.

## Install on Android

1. Open the app URL in Chrome on your Android device
2. Tap the "Install" banner or go to Chrome menu > "Add to Home screen"
3. The app will appear as a native-like icon on your home screen

## API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /api/regions` | List all regions |
| `GET /api/search?q=&type=` | Search regions with filters |
| `GET /api/region/<id>` | Get region detail with historical data |
| `GET /api/compare?regions=id1,id2&type=` | Compare multiple regions |
| `GET /api/metadata` | Dataset metadata |

## Tech Stack

- **Backend**: Flask (Python)
- **Frontend**: Vanilla JS, CSS3, Chart.js
- **Design**: Material Design 3
- **PWA**: Service Worker + Web App Manifest
