"""CSV upload and field selection module."""

import streamlit as st
import pandas as pd

FIELD_ROLES = [
    "Date/Time",
    "Incident Type / Category",
    "Latitude",
    "Longitude",
    "Address / Location",
    "District / Beat / Zone",
    "Status / Disposition",
    "Description",
    "ID / Case Number",
    "Other",
    "-- Exclude --",
]


def render_upload():
    """Render the file upload widget and return raw dataframe."""
    uploaded = st.file_uploader(
        "Upload crime data CSV", type=["csv"], help="Max 500 MB"
    )
    if uploaded is None:
        return None

    try:
        df = pd.read_csv(uploaded, low_memory=False)
    except Exception as e:
        st.error(f"Failed to read CSV: {e}")
        return None

    st.success(f"Loaded **{len(df):,}** rows and **{len(df.columns)}** columns.")
    with st.expander("Raw data preview (first 100 rows)"):
        st.dataframe(df.head(100), use_container_width=True)
    return df


def render_field_selector(df: pd.DataFrame) -> dict:
    """Let the user assign a role to each column.

    Returns a dict mapping role -> list of column names.
    """
    st.subheader("Field Mapping")
    st.caption(
        "Assign a role to each column. Columns marked *Exclude* will be dropped."
    )

    role_map: dict[str, list[str]] = {role: [] for role in FIELD_ROLES}

    cols_per_row = 3
    columns = df.columns.tolist()

    for i in range(0, len(columns), cols_per_row):
        ui_cols = st.columns(cols_per_row)
        for j, ui_col in enumerate(ui_cols):
            idx = i + j
            if idx >= len(columns):
                break
            col_name = columns[idx]
            sample = df[col_name].dropna().head(3).astype(str).tolist()
            sample_str = ", ".join(sample) if sample else "(empty)"
            with ui_col:
                role = st.selectbox(
                    f"**{col_name}**\n_{sample_str}_",
                    options=FIELD_ROLES,
                    index=len(FIELD_ROLES) - 2,  # default to "Other"
                    key=f"role_{col_name}",
                )
                role_map[role].append(col_name)

    return role_map


def apply_field_selection(df: pd.DataFrame, role_map: dict) -> pd.DataFrame:
    """Drop excluded columns and parse date columns."""
    excluded = role_map.get("-- Exclude --", [])
    keep = [c for c in df.columns if c not in excluded]
    df = df[keep].copy()

    # Attempt datetime parsing on date-role columns
    for col in role_map.get("Date/Time", []):
        if col in df.columns:
            df[col] = pd.to_datetime(df[col], errors="coerce", infer_datetime_format=True)

    # Attempt numeric parsing on lat/lon columns
    for col in role_map.get("Latitude", []) + role_map.get("Longitude", []):
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")

    return df
