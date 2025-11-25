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
