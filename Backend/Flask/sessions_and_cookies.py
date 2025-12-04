from flask import Flask, render_template, session

app = Flask(__name__, template_folder='Templates')
app.secret_key = "SOME SECRET KEY"
# Keep track of session ids and user information on the Server

@app.route("/")
def index():
    return render_template('sessionsAndCookies.html', msg = "This is Index File.")










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
        msg = 'No Session Found'
    return render_template('sessionsAndCookies.html', msg = msg)


# Clearing Current Session
@app.route('/clear_session_data')
def clear_session_data():
    session.clear()
    return render_template('sessionsAndCookies.html', msg = 'Session Data cleared !')












if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5555, debug=True)