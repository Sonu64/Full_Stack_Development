// Creating objects as key-value pairs
const user = {
    name: "Sonu",
    age: 20,
    email: "sonu@example.com",
    amount: 3400
};

// Accessing Data [00:03:45]
console.log(user.name); // "Sonu"
console.log(user["email"]); // "sonu@example.com" (Bracket notation)

// CRUD operations on objects
// Update
user.age = 21;
// Create (Add new property) [00:05:51]
user.id = "UI-101";
// Delete
delete user.amount; // [00:06:01]

/**3. Objects vs. JSON (Spring Boot Context)
While they look almost identical, remember:
JS Object: Keys don't need quotes (e.g., name: "Sonu").
JSON: Keys must have double quotes (e.g., "name": "Sonu").
When your Spring Boot app sends a response, it sends a JSON string which you then use as a JS Object in your script. */

// Advanced Object Concepts -> Object Methods
// let accountHolder = "Sonu Doe"; // Global variable (not related to the account object)
const account = {
  accountHolder: "John Doe",
  balance: 5000,
  checkBalance: function () {
    console.log(`Balance for ${this.accountHolder} is ${this.balance}`);
  },
}; // Notice above accountHolder is not a variable, it's a key in the object. We can access it using this.accountHolder inside the method.
// Using accountHolder only looks for global accountHolder variable which doesn't exist, hence Error ! But this.accountHolder looks for accountHolder key in the current object (account) and finds it.
account.checkBalance();

// Nested Objects
const employee = {
    id: 1,
    details: {
        firstName: "Alice",
        department: "Engineering"
    },
    projects: ["Auth Service", "Payment Gateway"]
};
console.log(employee.details.department); // "Engineering"
