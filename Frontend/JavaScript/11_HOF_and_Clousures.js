// 1. Higher-Order Functions (HOF)
// A function is "Higher-Order" if it does at least one of two things:

// Takes another function as an argument (like map, filter, or setTimeout).

// Returns a new function as its result.

// Why for Spring Boot? You use HOFs to create reusable logic, like a function that "wraps" your API calls with error handling.

// HOF Example: Returning a function
function createMultiplier(factor) {
    return function(number) {
        return number * factor; // number is the argument passed to the inner function, so we will pass number to the "double" function which is the returned function from createMultiplier and it will multiply that number with the factor (2 in this case) and return the result.
    };
}

const double = createMultiplier(2); // here factor = 2
console.log(double(5)); // 10 // here number = 5
const triple = createMultiplier(3); // here factor = 3
console.log(triple(5)); // 15 // here number = 5





















//Closures
function bankAccount(initialName) {
    let balance = 0; // "Private" variable
    // Every time we call bankAccount, a new "closure" is created that has access to the balance variable. The returned object has methods that can access and modify this balance, but code outside cannot directly access it. This is how we achieve data privacy in JavaScript using closures.

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`${initialName}, your balance is: ${balance}`);
        },
        check: function() {
            return balance;
        }
    };
}

const myAcc = bankAccount("Sonu"); // Just the object, it does not have direct access to outer function variable,  here 'initialName' !
myAcc.deposit(100); // "Sonu, your balance is: 100"
myAcc.deposit(50);  // "Sonu, your balance is: 150"

// Note: You CANNOT access 'balance' directly. 
// It is protected inside the closure!
console.log(myAcc.balance); // undefined




















// Another Example of Closures: Logger Function
function createLogger(moduleName) {
    return function(message) {
        console.log(`[${moduleName}] ${new Date().toLocaleTimeString()}: ${message}`);
    };
}

const authLogger = createLogger("AUTH-SERVICE");
const dbLogger = createLogger("DB-SERVICE");

authLogger("User logged in"); // [AUTH-SERVICE] 21:25:00: User logged in
dbLogger("Query executed");   // [DB-SERVICE] 21:25:05: Query executed




















// A Practical Example of Closures and how each closure maintains its own state, even when they are created from the same outer function. This is a powerful feature that allows us to create functions with private variables and maintain state across function calls without using global variables.
function counter() {
    let count = 0; // Private variable
    return function() {
        count++;
        console.log(`Count: ${count}`);
    };
}

const increment1 = counter(); // Though the line is done, the counter variable and all the outer-function things stay alive in the memory because the returned function (the inner function) has a reference to it, so it forms a closure. So increment1 has access to count variable and can modify it.
const increment2 = counter();
increment1(); // Count: 1
increment1(); // Count: 2
increment2(); // Count: 1 (increment2 has its own closure with count = 0)
increment2(); // Count: 2 (increment2 has its own closure with count = 0)