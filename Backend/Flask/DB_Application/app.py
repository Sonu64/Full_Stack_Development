from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# Creating db instance to perform operations on Database
db = SQLAlchemy()

# Factory function to avoid Circular Dependencies
def create_app():
    app = Flask(__name__, template_folder='Templates')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./testDB.db' #db not yet initialized
    
    # Instantiating a db object by Linking it with app instance
    # Now we can CRUD on the provided db file using the DATAbASE_URI -> But we
    # can't modify Tables or Edit the Schema
    db.init_app(app)
    
    from routes import register_routes
    register_routes(app, db)
    
    
    # migrate allows us to change the Schema, Update the Schema as per updates are done
    # in models.py
    migrate = Migrate(app, db)
    
    return app