from flask import Flask, request as req, url_for, render_template, Blueprint, redirect
from blueprintapp.app import db
from blueprintapp.blueprints.people.models import Person


people = Blueprint('people', __name__, template_folder = 'Templates')


@people.route("/")
def index():
    people = Person.query.all();
    return render_template('people/index.html', people = people)






@people.route("/create", methods = ['GET', 'POST'])
def create():
    if req.method == 'GET':
        return render_template('people/create.html')
    elif req.method == 'POST':
        if 'name' in req.form.keys() and 'age' in req.form.keys() and 'job' in req.form.keys():
            name = req.form.get('name')
            age = req.form.get('age')
            job = req.form.get('job')
            
            personObject = Person(name = name, age = age, job = job)
            
            db.session.add(personObject)
            db.session.commit()
            
            return redirect(url_for('people.index'))
        else:
            return "Incomplete Form Details !"
    else:
        return "Invalid Request !"