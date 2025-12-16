from flask import Flask, render_template, Blueprint

core = Blueprint('core', __name__, template_folder = 'Templates')

@core.route("/")
def index():
    return render_template('core/index.html')