from flask import Flask, render_template, url_for, redirect

app = Flask(__name__, template_folder='Templates')





# Basic Template rendering
@app.route("/")
def index():
    return render_template("index.html")






# Dynamic HTML
@app.route("/fruits")
def printFruitList():
    fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"]
    return render_template("fruits.html",fruits = fruits)






# Filters
@app.route("/filters")
def filters():
    someText = "SouraKanti"
    return render_template("filters.html", someText=someText)





# Custom Template Filters
@app.template_filter("reverseString")
def reverseString(s):
    return s[::-1]

@app.template_filter("repeatString")
def repeatString(s, times):
    return s * times



# Redirect and Dynamic URLs using url_for()
@app.route("/sample")
def sample():
    return redirect(url_for("printFruitList")) # Put function name here so that even if
# rouute changes, url_for() works fine



if __name__ == "__main__":  
    app.run(host="0.0.0.0", port=5555, debug=True)