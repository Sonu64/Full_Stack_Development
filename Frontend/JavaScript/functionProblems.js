// BMI Calculator Function
const bmi = (weight, height) => {
  return weight / height ** 2;
};
console.log(bmi(100, 5));

// Greet function with default name
const greet = (username = "Guest") => {
  console.log(username);
  console.log(`Hello, ${username} !`);
};
greet();
greet("Sonu");

// Sum all numbers using REST
const sumAll = (...nums) => {
  sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  return sum;
};
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// A function that returns another function -> Higher Order Functions
const boom = () => {
  return () => {
    console.log("Function returned by boom !");
  };
};
boom()();

// Function to log even numbers in array
const printEvens = (arr) => {
  arr.forEach((num) => {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
};
printEvens([1, 2, 3, 4, 5, 6]);

// Pure function to add Tax
const addTax = (basePrice, tax) => {
  let totalPrice = basePrice + tax;
  return totalPrice;
};
let basePrice = 230,
  tax = 100;
console.log("Final Price with Tax Added = " + addTax(basePrice, tax));

// Immediately Invoked Function Expression (IIFE) to show welcome message.
(() => {
  console.log(`Welcome, User`);
})();

// Higher Order Function Discount Calculator
const discountCalculator = (basePrice, discountAmount) => {
  return () => {
    return basePrice - discountAmount;
  };
};
const calcFunction = discountCalculator(1000, 100);
const finalPrice = calcFunction();
console.log(finalPrice);

// toUpperCase Transformer using HOF
const toUpperCaseTransformer = (string) => {
  return () => {
    return string.toUpperCase();
  };
};
const transformer = toUpperCaseTransformer("SoNu");
console.log(transformer());
