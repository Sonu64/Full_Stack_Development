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
