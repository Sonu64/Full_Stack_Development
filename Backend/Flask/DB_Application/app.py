from flask import Flask
from flask-sqlalchemy import SQLAlchemy
from flask-migrate import Migrate

db = SQLAlchemy()

def create_app():
    app = Flask(__name__, template_folder='Templates')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./testDB.db'
    
    db.init_app(app)
    
    migrate = Migrate(app, db)
    
    return app