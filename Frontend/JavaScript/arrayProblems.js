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

// Reduce salaries to calculate total Payroll, accumulator is a NUMBER
const salaries = [100, 200, 300];
const totalPayRoll = salaries.reduce((accumulator, salary) => {
  accumulator += salary;
  return accumulator;
}, 0);
console.log(totalPayRoll);

// Check occurences using reduce(), accumulator is an OBJECT
const veggies = ["Potatoes", "Tomatoes", "Potatoes", "Beans", "Tomatoes"];
const veggiesCount = veggies.reduce((accumulator, veggie) => {
  if (!accumulator[veggie]) accumulator[veggie] = 1;
  else accumulator[veggie]++;
  return accumulator;
}, {});
console.log(veggiesCount);

// Flatten 2D array into 1D using reduce, accumulator is an ARRAY
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
const singleRow1 = matrix.reduce((accumulator, row) => {
  row.forEach((number) => {
    accumulator.push(number);
  });
  return accumulator;
}, []);
// OR use .concat() to merge individual Rows
const singleRow2 = matrix.reduce((accumulator, row) => {
  accumulator = accumulator.concat(row);
  return accumulator;
}, []);
console.log(singleRow1);
console.log(singleRow2);

/** GRADES Problems */
const grades = [
  { name: "Sonu", grade: "B" },
  { name: "Manisha", grade: "B" },
  { name: "Suparna", grade: "A" },
  { name: "Rupsha", grade: "F" },
];
// Find 1st student with grade A
console.log(grades.find((grade) => grade.grade == "A").name);
// use some() to check if any student failed
if (grades.some((grade) => grade.grade == "F")) {
  console.log(`Yes, some students failed.`);
}
