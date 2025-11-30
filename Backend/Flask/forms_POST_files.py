from flask import Flask, request as req, render_template, url_for, redirect
import pandas as pd

app = Flask(__name__, template_folder = 'Templates')










# Basic Form Handling
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
        
        
        
        
        
        
        
        
# Handling Forms with File Upload Capabilities
@app.route("/file_upload", methods=["GET", "POST"])
def file_upload():
    if req.method == "GET":
        return render_template("file_upload_form.html")
    elif req.method == "POST":
        file = req.files.get('file')
        if file.content_type == 'text/plain':
            return file.read().decode()
        elif file.content_type == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' or file.content_type == 'application/vnd.ms-excel':
            dataframe = pd.read_excel(file)
            return dataframe.to_html()
        else:
            return "Invalid File Format !"
    else:
        return "Invalid Request"










if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5555, debug=True)