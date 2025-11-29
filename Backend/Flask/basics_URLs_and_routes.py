from flask import Flask, request as req, make_response

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
    if 'username' in req.args.keys() and 'favLang' in req.args.keys():
        return f"<h3 style='font-family:\"Century Gothic\";color:#05875c;'>Hello {req.args.get('username')}, your Favorite Language is {req.args.get('favLang')}<h3>"
    else: 
        return f"<h4 style='font-family:\"Century Gothic\";color:red;'>Error ! Invalid Parameters !</h4>"


# Handling multiple methods within One Route and sending status codes
@app.route("/multiMethods/", methods=['GET', 'POST'])
def handleMultiMethods():
    if req.method == 'GET':
        return f"<h3 style='font-family:\"Century Gothic\";color:red;'>A GET Request</h3>", 200 #OK
    elif req.method == 'POST':
        return f"<h3 style='font-family:\"Century Gothic\";color:red;'>A POST Request</h3>", 201 #Created
    else:
        return "You can never reach here"
#Postman@sonu11

# Custom Responses
@app.route("/customResponse/", methods=['GET'])
def customResponseSender():
    response = make_response("<h3>Hello</h3>")
    response.status_code = 200
    response.headers['content-type'] = "My Custom Text, My Custom HTML"
    return response



if __name__ == "__main__":
    app.run('0.0.0.0', port=5555, debug=True)