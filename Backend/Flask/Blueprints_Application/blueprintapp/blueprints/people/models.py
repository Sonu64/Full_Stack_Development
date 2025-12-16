from blueprintapp.app import db

class Person(db.Model):
    __tablename__ = "Persons"
    
    pid = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    age = db.Column(db.Integer, nullable = False)
    job = db.Column(db.String, nullable = False)
    
    def __repr__(self):
        return f"<Person Name: {self.name},  Age: {self.age},   Job: {self.age}>"
    
    def get_id(self):
        return self.id