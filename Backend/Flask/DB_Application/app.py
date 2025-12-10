from flask import Flask, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_bcrypt import Bcrypt


# Creating db instance to perform operations on Database, outside the Factory function
db = SQLAlchemy()

# Factory function to avoid Circular Dependencies
def create_app():
    
    # Import required Models in factory function itself, not globally
    from models import User
    
    # Creating app Instance -> APP INSTANCE 
    app = Flask(__name__, template_folder='Templates', static_folder='Static', static_url_path='/')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./testDB.db' #db not yet initialized
    app.secret_key = "MY_SECRET_KEY_@654$"
    
    # Instantiating a db Instance by Linking it with app instance
    # Now we can CRUD on the provided db file using the DATABASE_URI -> But we
    # can't modify Tables or Edit the Schema
    db.init_app(app) # -> DB INSTANCE
    
    
    # Initialize LoginManager with the current app instance, after creating
    # a Login Manager Instance. Just as we do with the db instance in previous lines.
    loginManager = LoginManager() # -> LOGIN_MANAGER INSTANCE, not required to pass to routes.py as its task is to load users or log out users based on the functions written here only.
    loginManager.init_app(app)
    
    
    # Tell Login Manager using the function below that how it should Load users
    @loginManager.user_loader
    def loadUser(userID):
        return User.query.get(userID)
    
    @loginManager.unauthorized_handler
    def unauthorized_callback():
        return redirect(url_for('login'))
    
    bcrypt = Bcrypt(app) # Passed to route.py's register_routes() method, coz inside that
    # we have routes which will use this BCrypt object and the bcrypt object alongwith other objects like the app object, the db object needs to be created in app : -> BCRYPT INSTANCE 
    
    
    # Handling incoming routes to different URLs.
    from routes import register_routes
    register_routes(app, db, bcrypt)
    
    
    # migrate allows us to change the Schema, Update the Schema as per updates are done
    # in models.py
    migrate = Migrate(app, db)
    
    return app