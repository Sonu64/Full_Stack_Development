from flask import render_template, request as req
from models import Car

def register_routes(app, db):
    # Route to be used as index page for app
    @app.route("/", methods = ['GET', 'POST'])
    def index():
        if req.method == 'GET':
            cars = Car.query.all()
            return render_template('index.html', cars = cars)
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
                # Viewing contents back again in index.html
                cars = Car.query.all()
                return render_template('index.html', cars = cars)               
        else:
            return "Invalid Request !"

    @app.route("/delete/<car_id>", methods = ['DELETE'])
    def delete(car_id):
        car_id = int(car_id)
        if req.method == 'DELETE':
            Car.query.filter(Car.id == car_id).delete()
            cars = Car.query.all()
            return render_template('index.html', cars = cars)
        else:
            return "Invalid Request !"
    


