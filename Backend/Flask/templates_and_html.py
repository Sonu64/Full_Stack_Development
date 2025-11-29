from flask import Flask, render_template
app = Flask(__name__, template_folder='Templates')

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/fruits")
def printFruitList():
    fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"]
    return render_template("fruits.html",fruits = fruits)

if __name__ == "__main__":  
    app.run(host="0.0.0.0", port=5555, debug=True)