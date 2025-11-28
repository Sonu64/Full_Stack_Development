from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "<h1 style='font-family:\"Century Gothic\";color:magenta;'>First Flask Application</h1>"

if __name__ == "__main__":
    app.run('0.0.0.0', port=5555, debug=True)