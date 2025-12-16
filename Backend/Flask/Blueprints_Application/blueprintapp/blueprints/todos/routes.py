from flask import Flask, render_template, redirect, url_for, request as req, Blueprint, redirect
from blueprintapp.blueprints.todos.models import Todo
from blueprintapp.app import db

# Mark 'todos' as a Blueprint which will be used in app.py
todos = Blueprint('todos', __name__, template_folder = 'Templates');


# Index Page of Todos
@todos.route("/")
def index():
    todos = Todo.query.all()
    return render_template('todos/index.html', todos = todos)


# Create Todo Route for the app
@todos.route("/create", methods = ['GET', 'POST'])
# Accessed using todos.create
def create():
    if req.method == 'GET':
        return render_template('todos/create.html')
    elif req.method == 'POST':
        title = req.form.get('title')
        if 'status' in req.form.keys():
            status = True
        else:
            status = False
    
        todoObject = Todo(title = title, status = status)
        db.session.add(todoObject)
        db.session.commit()

        return redirect(url_for('todos.index')) # Or you may use todos.index, but only index will not work as there are multiple index routes for different Blueprints.
    else:
        return "Invalid Request !"