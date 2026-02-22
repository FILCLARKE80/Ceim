"""Custom expression engine for calculated fields.

Allows users to create new columns from existing ones using arithmetic
and common functions, without exposing arbitrary code execution.
"""

import re
import streamlit as st
import pandas as pd
import numpy as np

# Whitelist of safe functions/names available inside expressions
_SAFE_NAMES: dict = {
    "abs": np.abs,
    "round": np.round,
    "floor": np.floor,
    "ceil": np.ceil,
    "log": np.log,
    "log10": np.log10,
    "sqrt": np.sqrt,
    "min": np.minimum,
    "max": np.maximum,
    "sum": np.sum,
    "mean": np.mean,
    "pi": np.pi,
}

# Pattern that only allows: column references (col[...]), numbers,
# arithmetic operators, parentheses, commas, whitespace, and whitelisted names.
_ALLOWED_PATTERN = re.compile(
    r"^[\w\s\.\+\-\*/\(\),\[\]\"\'<>=!&|%]+$"
)


def _validate_expression(expr: str) -> str | None:
    """Return an error message if the expression looks unsafe, else None."""
    if not _ALLOWED_PATTERN.match(expr):
        return "Expression contains disallowed characters."

    # Block dunders, imports, exec, eval, etc.
    for token in ["__", "import", "exec", "eval", "compile", "open", "globals", "locals"]:
        if token in expr:
            return f"Expression must not contain '{token}'."

    return None


def evaluate_expression(df: pd.DataFrame, expr: str) -> pd.Series:
    """Evaluate an expression against the dataframe columns.

    Column references use the syntax: col["column name"]
    Example: col["crimes_total"] / col["population"] * 100000
    """
    error = _validate_expression(expr)
    if error:
        raise ValueError(error)

    # Build a restricted namespace with column accessor
    namespace = dict(_SAFE_NAMES)
    namespace["col"] = df
    namespace["np"] = None  # block direct np access

    try:
        result = eval(expr, {"__builtins__": {}}, namespace)  # noqa: S307
    except Exception as e:
        raise ValueError(f"Expression error: {e}") from e

    if isinstance(result, pd.DataFrame):
        raise ValueError("Expression must return a single column, not a table.")

    return pd.Series(result, index=df.index)


def render_expressions(df: pd.DataFrame) -> pd.DataFrame:
    """UI for creating custom calculated fields."""
    st.subheader("Custom Expressions")
    st.caption(
        'Create new columns using existing ones. Reference columns with `col["column_name"]`.'
    )
    st.caption(
        'Example: `col["total_crimes"] / col["population"] * 100000`'
    )
    st.caption(
        "Available functions: abs, round, floor, ceil, log, log10, sqrt, min, max, sum, mean"
    )

    # Session state for expressions
    if "expressions" not in st.session_state:
        st.session_state.expressions = []

    # --- Add new expression form -------------------------------------------------
    with st.form("add_expression", clear_on_submit=True):
        col1, col2 = st.columns([1, 3])
        with col1:
            new_name = st.text_input("New column name")
        with col2:
            new_expr = st.text_input("Expression")
        submitted = st.form_submit_button("Add Calculated Field")

        if submitted and new_name and new_expr:
            st.session_state.expressions.append(
                {"name": new_name.strip(), "expr": new_expr.strip()}
            )

    # --- Evaluate and display existing expressions --------------------------------
    for i, entry in enumerate(st.session_state.expressions):
        with st.container():
            c1, c2, c3 = st.columns([1, 3, 0.5])
            c1.code(entry["name"])
            c2.code(entry["expr"])
            if c3.button("X", key=f"del_expr_{i}"):
                st.session_state.expressions.pop(i)
                st.rerun()

    # Apply all expressions
    for entry in st.session_state.expressions:
        try:
            df[entry["name"]] = evaluate_expression(df, entry["expr"])
        except ValueError as e:
            st.error(f'Error in **{entry["name"]}**: {e}')

    return df
