from flask import render_template, request as req
from models import Car

def register_routes(app, db):
    
    # Route to be used as index page for app
    @app.route("/")
    def index():
        cars = Car.query.all()
        return str(cars)
