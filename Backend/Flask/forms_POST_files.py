from flask import Flask, request as req, render_template, url_for, redirect

app = Flask(__name__, template_folder = 'Templates')

@app.route("/", methods=['GET', 'POST'])
def index():
    if req.method == "GET":
        return render_template("form.html")
    elif req.method == "POST":
        if "username" in req.form.keys() and "pwd" in req.form.keys():
            username = req.form.get("username")
            password = req.form.get("pwd")
            if username == "sonu" and password == "sonu":
                return render_template("login_success.html", username=username)
            else:
                return "The same route receives a POST request, WRONG CREDENTIALS !"
        else:
            return "Incomplete Credentials"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5555, debug=True)