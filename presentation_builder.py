from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
import pandas as pd

# Theme colours
DARK_BLUE = RGBColor(0x1F, 0x39, 0x64)
ACCENT_BLUE = RGBColor(0x2E, 0x75, 0xB6)
LIGHT_GREY = RGBColor(0xF2, 0xF2, 0xF2)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
TEXT_DARK = RGBColor(0x26, 0x26, 0x26)

SLIDE_W = Inches(13.33)
SLIDE_H = Inches(7.5)

MAX_TABLE_ROWS = 20
MAX_TABLE_COLS = 10


def build_presentation(sheets_data, title, output_path):
    prs = Presentation()
    prs.slide_width = SLIDE_W
    prs.slide_height = SLIDE_H

    _add_title_slide(prs, title, f'{len(sheets_data)} sheet(s) processed')

    for sheet in sheets_data:
        _add_section_slide(prs, sheet['sheet_name'], sheet['source'])
        _add_data_slide(prs, sheet)

    prs.save(output_path)


def _blank_slide(prs):
    layout = prs.slide_layouts[6]  # blank
    return prs.slides.add_slide(layout)


def _add_title_slide(prs, title, subtitle):
    slide = _blank_slide(prs)
    _fill_bg(slide, DARK_BLUE)

    tx = slide.shapes.add_textbox(Inches(1), Inches(2.5), Inches(11.33), Inches(1.2))
    _set_text(tx.text_frame, title, size=40, bold=True, color=WHITE, align=PP_ALIGN.CENTER)

    tx2 = slide.shapes.add_textbox(Inches(1), Inches(3.9), Inches(11.33), Inches(0.6))
    _set_text(tx2.text_frame, subtitle, size=18, color=RGBColor(0xBD, 0xD7, 0xEE),
              align=PP_ALIGN.CENTER)


def _add_section_slide(prs, sheet_name, source):
    slide = _blank_slide(prs)
    _fill_bg(slide, ACCENT_BLUE)

    tx = slide.shapes.add_textbox(Inches(1), Inches(2.8), Inches(11.33), Inches(1))
    _set_text(tx.text_frame, sheet_name, size=32, bold=True, color=WHITE, align=PP_ALIGN.CENTER)

    tx2 = slide.shapes.add_textbox(Inches(1), Inches(3.9), Inches(11.33), Inches(0.5))
    _set_text(tx2.text_frame, f'Source: {source}', size=14, color=RGBColor(0xBD, 0xD7, 0xEE),
              align=PP_ALIGN.CENTER)


def _add_data_slide(prs, sheet):
    df = sheet['dataframe']
    if df.empty:
        return

    # Truncate for readability
    display_df = df.iloc[:MAX_TABLE_ROWS, :MAX_TABLE_COLS]
    truncated_rows = len(df) > MAX_TABLE_ROWS
    truncated_cols = len(df.columns) > MAX_TABLE_COLS

    slide = _blank_slide(prs)
    _fill_bg(slide, WHITE)

    # Header bar
    header = slide.shapes.add_shape(
        1,  # MSO_SHAPE_TYPE.RECTANGLE
        Inches(0), Inches(0), SLIDE_W, Inches(0.55)
    )
    header.fill.solid()
    header.fill.fore_color.rgb = DARK_BLUE
    header.line.fill.background()

    tx_hdr = slide.shapes.add_textbox(Inches(0.3), Inches(0.05), Inches(12), Inches(0.45))
    _set_text(tx_hdr.text_frame, sheet['sheet_name'], size=16, bold=True, color=WHITE)

    n_rows = len(display_df) + 1  # +1 for header row
    n_cols = len(display_df.columns)

    if n_cols == 0:
        return

    margin_x = Inches(0.3)
    margin_y = Inches(0.7)
    table_w = SLIDE_W - Inches(0.6)
    table_h = SLIDE_H - Inches(1.0)

    table = slide.shapes.add_table(n_rows, n_cols, margin_x, margin_y, table_w, table_h).table

    col_w = int(table_w / n_cols)
    for i in range(n_cols):
        table.columns[i].width = col_w

    # Header row
    for col_idx, col_name in enumerate(display_df.columns):
        cell = table.cell(0, col_idx)
        cell.text = str(col_name)
        cell.fill.solid()
        cell.fill.fore_color.rgb = ACCENT_BLUE
        p = cell.text_frame.paragraphs[0]
        run = p.runs[0] if p.runs else p.add_run()
        run.text = str(col_name)
        run.font.bold = True
        run.font.size = Pt(9)
        run.font.color.rgb = WHITE

    # Data rows
    for row_idx, (_, row) in enumerate(display_df.iterrows(), start=1):
        bg = LIGHT_GREY if row_idx % 2 == 0 else WHITE
        for col_idx, val in enumerate(row):
            cell = table.cell(row_idx, col_idx)
            text = '' if pd.isna(val) else str(val)
            cell.text = text
            cell.fill.solid()
            cell.fill.fore_color.rgb = bg
            p = cell.text_frame.paragraphs[0]
            run = p.runs[0] if p.runs else p.add_run()
            run.text = text
            run.font.size = Pt(8)
            run.font.color.rgb = TEXT_DARK

    if truncated_rows or truncated_cols:
        note = []
        if truncated_rows:
            note.append(f'showing first {MAX_TABLE_ROWS} of {len(df)} rows')
        if truncated_cols:
            note.append(f'first {MAX_TABLE_COLS} of {len(df.columns)} columns')
        tx_note = slide.shapes.add_textbox(
            Inches(0.3), SLIDE_H - Inches(0.35), Inches(12), Inches(0.3)
        )
        _set_text(tx_note.text_frame, f'* Truncated: {", ".join(note)}',
                  size=8, color=RGBColor(0x99, 0x99, 0x99))


def _fill_bg(slide, color):
    bg = slide.background
    fill = bg.fill
    fill.solid()
    fill.fore_color.rgb = color


def _set_text(tf, text, size=12, bold=False, color=None, align=PP_ALIGN.LEFT):
    tf.word_wrap = True
    p = tf.paragraphs[0]
    p.alignment = align
    run = p.add_run()
    run.text = text
    run.font.size = Pt(size)
    run.font.bold = bold
    if color:
        run.font.color.rgb = color
