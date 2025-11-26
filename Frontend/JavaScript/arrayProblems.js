// Array of student names and print each
const students = ["Sonu", "Manisha", "Suparna", "Rupsha"];
students.push("Guest"); // Though const, the contents can be modified
// students = []; // ERROR, Reassignment to constant not allowed
students.forEach((studentName) => {
  console.log(studentName);
});

// Filter Even Numbers from an array
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter((num) => num % 2 == 0);
console.log(evens);

// Add discount to prices using map()
const prices = [100, 200, 300];
const newPrices = prices.map((price) => price + 0.18 * price);
console.log(newPrices);


