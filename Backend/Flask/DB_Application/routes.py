from flask import render_template, request as req, jsonify, redirect, url_for
from models import Car
from flask_login import login_user, logout_user, current_user, login_required
from models import User

def register_routes(app, db, bcrypt):
    
    
    # Dedicated Home Page
    @app.route("/", methods = ['GET'])
    def index():
        if req.method == 'GET':
            return render_template('index.html')
        else:
            return "Invalid Request !"
    
    
    
    # Route to be used as Dashboard
    @app.route("/dashboard", methods = ['GET', 'POST'])
    def dashboard():
        if current_user.is_authenticated:
            if req.method == 'GET':
                cars = Car.query.all()
                return render_template('dashboard.html', cars = cars, user = current_user)
            elif req.method == 'POST':
                if 'brand' in req.form.keys() and 'model' in req.form.keys() and 'engineStrength' in req.form.keys():
                    brand = req.form.get('brand')
                    model = req.form.get('model')
                    engineStrength = req.form.get('engineStrength')
                    # Creating instance of Car Model
                    carObject = Car(brand=brand, model=model, engineStrength=engineStrength)
                    # Writing to Database
                    db.session.add(carObject)
                    db.session.commit()
                    return redirect(url_for('dashboard')) # Sends GET request to '/' and in the GET request handler above, we render dashboard.html with new Queried Data.           
            else:
                return "Invalid Request !"
        else:
            return redirect(url_for('login'))


    # Route to delete a Car
    @app.route("/dashboard/delete/<car_id>", methods = ['DELETE'])
    def delete(car_id):
        car_id = int(car_id)
        if req.method == 'DELETE':
            Car.query.filter(Car.id == car_id).delete()
            db.session.commit()
            cars = Car.query.all()
            return render_template('dashboard.html', cars = cars)
        else:
            return "Invalid Request !"
        
        
    # Route to show details of a Car
    @app.route("/dashboard/details/<car_id>", methods = ['GET'])
    def details(car_id):
        if req.method == 'GET':
            car = Car.query.get_or_404(car_id)
            # return car
            if car:
                carBrand = car.brand;
                carModel = car.model;
                carEngineStrength = car.engineStrength;
                response = {
                    'brand':carBrand,
                    'model':carModel,
                    'engineStrength':carEngineStrength
                }
                return jsonify(response), 200;
            else:
                return "404 Error ! Car not found !"
        else:
            return "Invalid Response !"
        
    
    # Route to Login
    @app.route("/login", methods = ['GET', 'POST'])
    def login():
        if current_user.is_authenticated:
            return redirect(url_for('dashboard'))
        else:
            if req.method == 'GET':
                return render_template('login.html')
            elif req.method == 'POST':
                username = req.form.get('username')
                password = req.form.get('password')
                
                foundUser = User.query.filter(User.username == username).first()
                
                if foundUser:
                    if bcrypt.check_password_hash(foundUser.password, password):
                        login_user(foundUser)
                        return redirect(url_for('dashboard'))
                    else:
                        return "Wrong Password !"
                else:
                    return "No user found with that Username"
                
            else:
                return 'Invalid Request !'
        
        
    # Route to Sign up
    @app.route("/signup", methods = ['GET', 'POST'])
    def signup():
        if req.method == 'GET':
            return render_template('signup.html')
        elif req.method == 'POST':
            # Fetching the values from the Form
            username = req.form.get('username')
            password = req.form.get('password')
            email = req.form.get('email')
            age = req.form.get('age')
            job = req.form.get('job')
            # Hashing Password
            hashedPassword = bcrypt.generate_password_hash(password)
            # Creating User object, basically a Row for the User Table
            user = User(username=username, password=hashedPassword, email=email, age=age, job=job)
            # Commiting to DB
            db.session.add(user)
            db.session.commit()
            # Redirect
            return redirect(url_for('login'))
        else:
            return 'Invalid Request !'
    
    
    
    # Special route only for Logged In Users
    @app.route("/dashboard/userdetails")
    @login_required
    def userDetails():
        return render_template('userDetails.html', user = current_user)
    
    
    # Route to Logout
    @app.route("/dashboard/logout")
    def logout():
        logout_user()
        return redirect(url_for('index'))
    


