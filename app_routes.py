import os
import uuid
from flask import (
    render_template, request, redirect, url_for,
    flash, send_from_directory, current_app
)
from werkzeug.utils import secure_filename
from spreadsheet_processor import load_spreadsheets
from presentation_builder import build_presentation

ALLOWED_EXTENSIONS = {'xlsx', 'xls', 'csv'}


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def register_routes(app):

    @app.route('/', methods=['GET'])
    def index():
        return render_template('index.html')

    @app.route('/generate', methods=['POST'])
    def generate():
        files = request.files.getlist('spreadsheets')
        title = request.form.get('title', 'Data Report').strip() or 'Data Report'

        if not files or all(f.filename == '' for f in files):
            flash('Please select at least one spreadsheet file.', 'error')
            return redirect(url_for('index'))

        saved_paths = []
        session_id = str(uuid.uuid4())
        upload_dir = os.path.join(current_app.config['UPLOAD_FOLDER'], session_id)
        os.makedirs(upload_dir, exist_ok=True)

        for f in files:
            if f and f.filename and allowed_file(f.filename):
                filename = secure_filename(f.filename)
                path = os.path.join(upload_dir, filename)
                f.save(path)
                saved_paths.append(path)

        if not saved_paths:
            flash('No valid spreadsheet files were uploaded (.xlsx, .xls, .csv only).', 'error')
            return redirect(url_for('index'))

        try:
            sheets_data = load_spreadsheets(saved_paths)
            output_filename = f'{session_id}.pptx'
            output_path = os.path.join(current_app.config['OUTPUT_FOLDER'], output_filename)
            build_presentation(sheets_data, title, output_path)
        except Exception as e:
            flash(f'Error generating presentation: {str(e)}', 'error')
            return redirect(url_for('index'))

        return render_template('result.html', filename=output_filename, title=title,
                               sheet_count=len(sheets_data))

    @app.route('/download/<filename>')
    def download(filename):
        safe_name = secure_filename(filename)
        return send_from_directory(
            current_app.config['OUTPUT_FOLDER'],
            safe_name,
            as_attachment=True,
            download_name='presentation.pptx'
        )
