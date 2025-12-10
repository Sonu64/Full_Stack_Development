from app import db
from flask_login import UserMixin

class Car(db.Model):
    __tablename__ = 'Cars'
    
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    brand = db.Column(db.Text, nullable = False)
    model = db.Column(db.Text, nullable = False)
    engineStrength = db.Column(db.Integer, nullable = False)
    
    def __repr__(self):
	    return f"Car ID: {self.id}, Car Brand: {self.brand}, Car Model: {self.model}."
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
class User(db.Model, UserMixin):
    __tablename__ = "Users"
    
    uid = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String, nullable = False)
    password = db.Column(db.String, nullable = False)
    email = db.Column(db.String, nullable = False)
    age = db.Column(db.Integer, nullable = False)
    job = db.Column(db.String, nullable = False)
    
    def __repr__(self):
        return f'<Username: {self.username}, E-Mail: {self.email}, Job: {self.job}>'
    
    def get_id(self):
        return self.uid;
    