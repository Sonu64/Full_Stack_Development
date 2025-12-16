from blueprintapp.app import db

class Todo(db.Model):
    __tablename__ = 'Todos'
    
    tid = db.Column(db.Integer, nullable = False, primary_key = True)
    title = db.Column(db.String, nullable = False)
    status = db.Column(db.Boolean, nullable = False)
    
    def __repr__(self):
        return f"Task Name: {self.name},  Status: {self.status}. "

    def get_id(self):
        return self.id