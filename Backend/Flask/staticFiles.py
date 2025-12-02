from flask import Flask, request as req, render_template, url_for, redirect, Response

app = Flask(__name__, template_folder='Templates', static_folder='Static', static_url_path='/')

@app.route("/")
def index():
    # On rendering the template which contains some static files, the template
    # auto recognizes the Static Files if correct path is given for their SRC. This
    # because for this Python App, static_folder is set to 'Static' and static_url_path 
    # is set to '/'
    return render_template("staticHome.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5555, debug=True)