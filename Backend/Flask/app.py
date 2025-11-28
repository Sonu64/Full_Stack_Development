from flask import Flask, request

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


# URL Parameters from the request object, no need to pass variable names to function
@app.route("/handleReqParams/")
def greetParams():
    if 'username' in request.args.keys() and 'favLang' in request.args.keys():
        return f"<h3 style='font-family:\"Century Gothic\";color:#05875c;'>Hello {request.args.get('username')}, your Favorite Language is {request.args.get('favLang')}<h3>"
    else: 
        return f"<h4 style='font-family:\"Century Gothic\";color:red;'>Error ! Invalid Parameters !</h4>"




if __name__ == "__main__":
    app.run('0.0.0.0', port=5555, debug=True)