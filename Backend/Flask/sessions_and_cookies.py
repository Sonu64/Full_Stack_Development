from flask import Flask, render_template, session, request as req, make_response, flash

app = Flask(__name__, template_folder='Templates', static_folder='Static', static_url_path='/')
app.secret_key = "SOME SECRET KEY"
# Keep track of session ids and user information on the Server

@app.route("/")
def index():
    return render_template('sessionsAndCookies.html', msg = "This is Index File.")









# Handling Flask Sessions
# Setting Session Data
@app.route("/set_session_data")
def set_session_data():
    session['name'] = "Sonu"
    session['other'] = "Hello, Python !"
    return render_template('sessionsAndCookies.html', msg = "Successfully Set Session Data !")

# Getting Session Data
@app.route('/get_session_data')
def get_session_data():
    if 'name' in session.keys() and 'other' in session.keys():
        name = session['name']
        other = session['other']
        msg = f"Name: {name}, Other Data: {other}."
    else:
        msg = 'No Session Found !'
    return render_template('sessionsAndCookies.html', msg = msg)


# Clearing Current Session
@app.route('/clear_session_data')
def clear_session_data():
    session.clear()
    return render_template('sessionsAndCookies.html', msg = 'Session Data cleared !')









# Handling Flask Cookies
# Set Cookies
@app.route("/set_cookie")
def set_cookie():
    response = make_response(render_template('sessionsAndCookies.html', msg = "Cookie Set !"))
    response.set_cookie('theme','dark')
    response.set_cookie('lang', 'bengali')
    return response

# Get Cookies
@app.route("/get_cookie")
def get_cookie():
    theme = req.cookies.get('theme')
    lang = req.cookies.get('lang')
    msg = f"Current User theme: {theme}\nUser Language Preference: {lang}"
    return render_template('sessionsAndCookies.html', msg = msg)

# Clear Cookies
@app.route("/clear_cookie")
def clear_cookie():
    msg = 'Cookies Cleared !'
    response = make_response(render_template('sessionsAndCookies.html', msg = msg))
    # Both setting nothing to set_cookie and a past expiration date and .clear_cookie() works !
    response.set_cookie('theme', expires = 0)
    response.delete_cookie('lang')
    return response




# Flashing messages
@app.route('/login', methods = ['GET', 'POST'])
def login():
    if req.method == 'GET':
        return render_template('login.html')
    elif req.method == 'POST':
        if 'username' in req.form.keys() and 'password' in req.form.keys():
            username = req.form['username']
            password = req.form['password']
            if username == 'sonu' and password == '123':
                flash("Login Successful !")
                return render_template('sessionsAndCookies.html')
            else:
                flash("Login Failed !")
                return render_template('sessionsAndCookies.html')
    















if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5555, debug=True)