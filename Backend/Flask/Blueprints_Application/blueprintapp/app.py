# Central File where everything is gonna be merged
from flask import Flask, url_for, redirect
# Below modules are for the fact because each Blueprint is gonna have its own models.py and routes.py, except for DB connections maybe.
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# Creating SQLAlchemy object/instance
db = SQLAlchemy()

def create_app():
    # Creating App instance
    app = Flask(__name__, template_folder = 'Templates')
    
    # Setting up app config
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///./blueprints.db"
    
    # Connecting app and db, for CRUD operations
    db.init_app(app)
    
    # Import and register all Blueprints here
    # <------------------------------------->
    # Imports
    from blueprintapp.blueprints.core.routes import core
    from blueprintapp.blueprints.todos.routes import todos
    from blueprintapp.blueprints.people.routes import people 
    
    #todos is a Blueprint, people is a Blueprint
    # Registration
    app.register_blueprint(core, url_prefix = '/')
    app.register_blueprint(todos, url_prefix = "/todos")
    app.register_blueprint(people, url_prefix = "/people")
    
    
    
    # For Schema change and major db updates
    migrate = Migrate(app, db)
    
    return app