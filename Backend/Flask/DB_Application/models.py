from app import db

class Car(db.Model):
    __tablename__ = 'Cars'
    
    id = db.Column(db.Integer, primary_key = True, nullable = False)
    brand = db.Column(db.Text, nullable = False)
    model = db.Column(db.Text, nullable = False)
    engineStrength = db.Column(db.Integer, nullable = False)
    
    def __repr__(self):
	    return f"Car Brand: {self.brand}, Car Model: {self.model}."