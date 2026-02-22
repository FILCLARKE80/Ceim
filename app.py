"""Crime Data Explorer – main Streamlit application."""

import streamlit as st

from modules.data_loader import render_upload, render_field_selector, apply_field_selection
from modules.profiler import render_profile
from modules.expressions import render_expressions
from modules.dashboard import render_dashboard

# ---------------------------------------------------------------------------
# Page config
# ---------------------------------------------------------------------------
st.set_page_config(
    page_title="Crime Data Explorer",
    page_icon=":shield:",
    layout="wide",
)

st.title("Crime Data Explorer")
st.markdown(
    "Upload crime data from any police organisation, map the fields, profile data "
    "quality, create calculated fields, and build a custom dashboard."
)

# ---------------------------------------------------------------------------
# Sidebar navigation
# ---------------------------------------------------------------------------
PAGES = [
    "1. Upload & Field Mapping",
    "2. Data Quality Profile",
    "3. Custom Expressions",
    "4. Dashboard",
]

page = st.sidebar.radio("Navigation", PAGES)

# ---------------------------------------------------------------------------
# 1. Upload & Field Mapping
# ---------------------------------------------------------------------------
if page == PAGES[0]:
    df = render_upload()
    if df is not None:
        st.session_state["raw_df"] = df
        role_map = render_field_selector(df)
        st.session_state["role_map"] = role_map

        if st.button("Apply field mapping"):
            processed = apply_field_selection(df.copy(), role_map)
            st.session_state["df"] = processed
            st.success(
                f"Field mapping applied. Working dataset: "
                f"**{len(processed):,}** rows, **{len(processed.columns)}** columns."
            )
            with st.expander("Processed data preview"):
                st.dataframe(processed.head(100), use_container_width=True)

# ---------------------------------------------------------------------------
# Guard: require data before proceeding
# ---------------------------------------------------------------------------
elif "df" not in st.session_state:
    st.warning("Please upload a CSV and apply field mapping first (step 1).")

# ---------------------------------------------------------------------------
# 2. Data Quality Profile
# ---------------------------------------------------------------------------
elif page == PAGES[1]:
    render_profile(st.session_state["df"])

# ---------------------------------------------------------------------------
# 3. Custom Expressions
# ---------------------------------------------------------------------------
elif page == PAGES[2]:
    updated = render_expressions(st.session_state["df"].copy())
    st.session_state["df"] = updated

    st.markdown("---")
    st.markdown("**Current columns**")
    st.write(updated.columns.tolist())

# ---------------------------------------------------------------------------
# 4. Dashboard
# ---------------------------------------------------------------------------
elif page == PAGES[3]:
    role_map = st.session_state.get("role_map", {})
    render_dashboard(st.session_state["df"], role_map)
