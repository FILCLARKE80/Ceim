"""Data quality profiling module."""

import streamlit as st
import pandas as pd
import plotly.express as px


def render_profile(df: pd.DataFrame):
    """Display a data-quality profile of the dataframe."""
    st.subheader("Data Quality Profile")

    total_rows = len(df)

    # --- Summary table -----------------------------------------------------------
    summary_rows = []
    for col in df.columns:
        series = df[col]
        null_count = int(series.isna().sum())
        null_pct = null_count / total_rows * 100 if total_rows else 0
        unique_count = series.nunique(dropna=True)
        dtype = str(series.dtype)

        row = {
            "Column": col,
            "Type": dtype,
            "Non-Null": f"{total_rows - null_count:,}",
            "Nulls": f"{null_count:,} ({null_pct:.1f}%)",
            "Unique": f"{unique_count:,}",
            "Sample": str(series.dropna().iloc[0]) if null_count < total_rows else "--",
        }

        # Add basic stats for numeric columns
        if pd.api.types.is_numeric_dtype(series):
            row["Min"] = f"{series.min():.4g}" if not series.isna().all() else "--"
            row["Max"] = f"{series.max():.4g}" if not series.isna().all() else "--"
            row["Mean"] = f"{series.mean():.4g}" if not series.isna().all() else "--"
        else:
            row["Min"] = "--"
            row["Max"] = "--"
            row["Mean"] = "--"

        summary_rows.append(row)

    summary_df = pd.DataFrame(summary_rows)
    st.dataframe(summary_df, use_container_width=True, hide_index=True)

    # --- Completeness chart ------------------------------------------------------
    st.markdown("#### Completeness by Column")
    completeness = (
        df.notna().sum().reset_index()
    )
    completeness.columns = ["Column", "NonNull"]
    completeness["Completeness %"] = (completeness["NonNull"] / total_rows * 100).round(1)
    completeness = completeness.sort_values("Completeness %")

    fig = px.bar(
        completeness,
        x="Completeness %",
        y="Column",
        orientation="h",
        range_x=[0, 100],
        color="Completeness %",
        color_continuous_scale=["#d32f2f", "#fbc02d", "#388e3c"],
    )
    fig.update_layout(height=max(300, len(df.columns) * 28), showlegend=False)
    st.plotly_chart(fig, use_container_width=True)

    # --- Duplicate rows ----------------------------------------------------------
    dup_count = int(df.duplicated().sum())
    st.metric("Duplicate Rows", f"{dup_count:,}", delta=None)

    # --- Per-column drilldown ----------------------------------------------------
    st.markdown("#### Column Drilldown")
    selected_col = st.selectbox("Select a column to inspect", df.columns.tolist())
    if selected_col:
        _render_column_detail(df, selected_col)


def _render_column_detail(df: pd.DataFrame, col: str):
    """Show detailed stats for a single column."""
    series = df[col]
    col1, col2, col3 = st.columns(3)
    col1.metric("Null count", f"{series.isna().sum():,}")
    col2.metric("Unique values", f"{series.nunique():,}")
    col3.metric("Most common", str(series.mode().iloc[0]) if not series.mode().empty else "--")

    if pd.api.types.is_numeric_dtype(series):
        st.markdown("**Distribution**")
        fig = px.histogram(df, x=col, nbins=50)
        fig.update_layout(height=300)
        st.plotly_chart(fig, use_container_width=True)

        st.markdown("**Descriptive Statistics**")
        st.dataframe(series.describe().to_frame().T, use_container_width=True)

    elif pd.api.types.is_datetime64_any_dtype(series):
        st.markdown("**Temporal Distribution**")
        temp = df[[col]].dropna().copy()
        temp["date"] = temp[col].dt.date
        counts = temp.groupby("date").size().reset_index(name="count")
        fig = px.line(counts, x="date", y="count")
        fig.update_layout(height=300)
        st.plotly_chart(fig, use_container_width=True)

    else:
        st.markdown("**Top 20 Values**")
        top = series.value_counts().head(20).reset_index()
        top.columns = ["Value", "Count"]
        st.dataframe(top, use_container_width=True, hide_index=True)
