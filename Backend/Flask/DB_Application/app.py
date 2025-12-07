from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# Creating db instance to perform operations on Database, outside the Factory function
db = SQLAlchemy()

# Factory function to avoid Circular Dependencies
def create_app():
    app = Flask(__name__, template_folder='Templates', static_folder='Static', static_url_path='/')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./testDB.db' #db not yet initialized
    
    # Instantiating a db Instance by Linking it with app instance
    # Now we can CRUD on the provided db file using the DATABASE_URI -> But we
    # can't modify Tables or Edit the Schema
    db.init_app(app)
    
    
    # Handling incoming routes to different URLs.
    from routes import register_routes
    register_routes(app, db)
    
    
    # migrate allows us to change the Schema, Update the Schema as per updates are done
    # in models.py
    migrate = Migrate(app, db)
    
    return app