from flask import Flask, request as req, render_template, url_for, redirect, Response
import pandas as pd
import os
import uuid
from flask import send_from_directory, jsonify

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






# A route to convert Excel to CSV and Immediately Download the CSV File on Form Submit
@app.route("/convertor", methods=['GET', 'POST'])
def convertExcelToCSV():
    if req.method == 'GET':
        return render_template('convertor.html')
    elif req.method == 'POST':
        file = req.files.get('file')
        dataframe = pd.read_excel(file)
        response = Response (
            dataframe.to_csv(),
            mimetype = 'text/csv',
            headers = {
                'Content-Disposition':'attachment; filename=result.csv'
            }
        )
        return response
        
    else:
        return 'Invalid Request !'










# A Route to convert Excel to CSV, but take the user to a dedicated page with Download
# button to download the CSV File.
@app.route("/convertor2", methods=['GET', 'POST'])
def convertExcelToCSV2():
    if req.method == 'GET':
        return render_template('convertor2.html')
    elif req.method == 'POST':
        file = req.files.get('file')
        dataframe = pd.read_excel(file)
        # Create a Downloads folder if it doesn't exist in the server
        if not os.path.exists('downloads'):
            os.makedirs('downloads')
        # Create a random filename using UUID
        filename = f'{uuid.uuid4()}.csv'
        # Save the file temporarily in the Downloads folder as CSV
        dataframe.to_csv(os.path.join('downloads', filename))
        return render_template('download.html', filename=filename)
    else:
        return 'Invalid Request !'
    
    
# Route that the Download button takes the user to, a GET request to this page from
# the anchor tag using url_for() in the download.html page triggers the download.
@app.route('/download/<filename>')
def download(filename):
    return send_from_directory('downloads', filename, download_name='result.csv')
        



















# Route for Registration Form which sends data to register_success.html 
@app.route("/register", methods=['GET', 'POST'])
def register():
    if req.method == 'GET':
        return render_template('json_user_register.html')
    elif req.method == 'POST':
        username = req.form.get('username')
        email = req.form.get('email')
        password = req.form.get('password')
        return render_template('register_success.html', username=username, email=email, password=password)
    else:
        return "Invalid Request"


# Route for greeting showcase
@app.route("/show_greeting", methods=['POST'])
def show_greeting():
    if req.method == 'POST':
        username = req.json.get('username')
        greeting = req.json.get('greeting')
        
        with open('greetingJSON.txt', 'w') as file:
            file.write(f"Username: {username}\nGreeting: {greeting}")
        
        return {'message':"Successfully wrote Greeting to File in your system."}
    else:
        return 'Invalid Request'
        
    



if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5555, debug=True)