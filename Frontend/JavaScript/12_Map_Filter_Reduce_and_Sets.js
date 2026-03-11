const apiResponse = [
  { name: "Sonu", age: 20, active: true },
  { name: "Rahul", age: 25, active: false },
  { name: "Abhi", age: 22, active: true },
];

const listOfUsersAgeWhoAreActive = apiResponse
  .filter((user) => user.active) // 1. Keep only active users
  .map((user) => user.age) // 2. Extract only the ages [20, 22]

console.log(listOfUsersAgeWhoAreActive); // [20, 22]

// reduce all those values to sum
const totalActiveAge = listOfUsersAgeWhoAreActive.reduce((sum, age) => sum + age, 0); // 0 is the initial value of sum
console.log(totalActiveAge); // 42

// We can chain all three operations together without creating intermediate variables, but reduce must come at end because it produces a single value, not an array.
const totalActiveAgeChained = apiResponse
  .filter((user) => user.active)
  .map((user) => user.age)
  .reduce((sum, age) => sum + age, 0);

console.log(totalActiveAgeChained); // 42


// Other examples of using map !
// 1. The "Data Formatting" Example
// Often, data from a database is "ugly" or needs extra strings attached for the user interface.

const prices = [499, 999, 149];

// Transform numbers into formatted currency strings
const formattedPrices = prices.map(price => `₹${price}.00`);

console.log(formattedPrices); 
// Output: ["₹499.00", "₹999.00", "₹149.00"]























// 2. The "Object Reshaping" Example (Very common for Spring Boot)
// Imagine your Java backend sends a heavy User object with 20 fields, but your "Search Suggestions" dropdown only needs the fullName and id.

// JavaScript
const apiUsers = [
    { id: 101, 
      firstName: "Sourav", 
      lastName: "Ganguly", 
      age: 53, 
      city: "Kolkata" 
    },
    { id: 102, 
      firstName: "Rohit", 
      lastName: "Sharma", 
      age: 37, 
      city: "Delhi" }
];

// Map to create a "lighter" object for the frontend
const userSuggestions = apiUsers.map(user => {
    return {
        userId: user.id,
        fullName: `${user.firstName} ${user.lastName}`
    };
});

console.log(userSuggestions);
/* Output: 
[
  { userId: 101, fullName: "Sourav Ganguly" },
  { userId: 102, fullName: "Rohit Sharma" }
]
*/










// 3. The "State Toggle" Example
// In apps like your Fundwarden project, you might want to mark all transactions as "Verified" with one click.

// JavaScript
const transactions = [
    { id: 1, amount: 500, status: "pending" },
    { id: 2, amount: 1200, status: "pending" }
];

// Update the status of every object in the array
const verifiedTransactions = transactions.map(t => {
    return { ...t, status: "verified" }; // Use Spread Operator (...) to copy old data
});

console.log(verifiedTransactions);
