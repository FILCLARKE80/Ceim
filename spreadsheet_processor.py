import os
import pandas as pd


def load_spreadsheets(file_paths):
    """Load one or more spreadsheet files and return a list of sheet dicts."""
    sheets = []
    for path in file_paths:
        ext = os.path.splitext(path)[1].lower()
        basename = os.path.basename(path)

        if ext == '.csv':
            df = pd.read_csv(path)
            sheets.append({
                'source': basename,
                'sheet_name': os.path.splitext(basename)[0],
                'dataframe': _clean(df),
            })
        elif ext in ('.xlsx', '.xls'):
            xls = pd.ExcelFile(path)
            for sheet_name in xls.sheet_names:
                df = xls.parse(sheet_name)
                sheets.append({
                    'source': basename,
                    'sheet_name': sheet_name,
                    'dataframe': _clean(df),
                })

    return sheets


def _clean(df):
    """Drop fully-empty rows/cols and reset index."""
    df = df.dropna(how='all').dropna(axis=1, how='all')
    df = df.reset_index(drop=True)
    return df
