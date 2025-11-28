from flask import Flask

app = Flask(__name__)

@app.route("/")
def index():
    return "<h1 style='font-family:\"Century Gothic\";color:magenta;'>First Flask Application</h1>"


# URL Processors -> Dynamic URLs
@app.route("/greet/<username>")
def greet(username):
    return f"<h2 style='font-family:\"Century Gothic\";color:red;'>Welcome, {username} !<h2>"

# Parsing Integers and Numbers
@app.route("/add/<int:a>/<int:b>")
def add(a, b):
    return f"<h2 style='font-family:\"Century Gothic\";color:blue;'>{a} + {b} = {a+b}</h2>"


if __name__ == "__main__":
    app.run('0.0.0.0', port=5555, debug=True)