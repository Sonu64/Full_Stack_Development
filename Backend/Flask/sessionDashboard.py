from flask import Flask, render_template, session, request as req, url_for, redirect

app = Flask(__name__, template_folder = 'Templates')
app.secret_key = "f87s8duf^##)d&@*#)9d0m88302-39023"


# @app.route('/')
# def index()



@app.route('/login', methods = ['GET', 'POST'])
def login():
    if req.method == 'GET':
        return render_template('sessionsLoginForm.html')
    elif req.method == 'POST':
        # Getting Fields data from HTML Form which sent the Post request
        username = req.form.get('username')
        email = req.form.get('email')
        password = req.form.get('password')
        # Validating Data
        if username == 'sonu' and email == 's@s.com' and password == '123':
            session['username'] = username
            session['email'] = email
            session['logged_in'] = True
            return redirect(url_for('dashboard'))
    else:
        return 'Invalid Request, must be GET or POST !'



# This route doesn't return a page, but a TEXT data.
@app.route('/dashboard')
def dashboard():
    if 'logged_in' in session.keys():
        return ("Welcome Back " + session['username'] + " !")
    else:
        return redirect(url_for('login'))




if __name__ == '__main__':
    app.run(host = '0.0.0.0', port = 5555, debug = True)