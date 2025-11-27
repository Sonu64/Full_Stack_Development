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

// Creating counter using closures
const outerFunction = () => {
  let counter = 0;
  console.log("Outer function called !, counter created, counter = " + counter);
  return () => {
    counter++;
    console.log("Inner function called !, counter = " + counter);
  };
  /** The closure "feature" or "link" is
   * established when the inner function is first defined
   * within the outer function. */
};
let counterFunc = outerFunction();
counterFunc();
counterFunc();
counterFunc();
// counterFunc =   return () => {
//     console.log("Inner function called !");
//     counter++; gets access to outer funcs variable via closures
//   };

/**
The `counter` variable is defined and initialized to `0` **only once** for each time you call `outerFunction()`.

Here is a breakdown of what happens:

-----

## 🏃 Execution Flow

When you execute the following line, a sequence of events occurs:

```javascript
const myCounter = outerFunction();
```

1.  ### 1\. Outer Function Execution ($\text{Only Once}$)

      * The `outerFunction` is called.
      * The line `let counter = 0;` executes. A new, dedicated variable named `counter` is created in the scope of this specific call to `outerFunction`.
      * `console.log("Outer function called !");` prints.
      * The `outerFunction` finishes executing. Normally, its variables would be cleaned up (garbage collected).

2.  ### 2\. Closure Formation ($\text{Persistence}$)

      * Instead of being destroyed, the inner anonymous function (`return () => {...}`) is **returned** and assigned to `myCounter`.
      * This inner function forms a **closure** over the specific environment (scope) where it was defined. This closure ensures that the `counter` variable created in step 1 **stays alive** and accessible, even though the `outerFunction` has finished.

3.  ### 3\. Inner Function Execution ($\text{Repeated Access}$)

      * When you call `myCounter()`, the inner function executes.
      * It looks up the **persistent, single instance** of the `counter` variable saved by the closure and increments it.

-----

## 💡 What it Means

This setup is the classic JavaScript pattern for creating **private state** or **private counters**:

  * Each time you call `outerFunction()`, you get a **new, independent counter**.
    ```javascript
    const counterA = outerFunction(); // Initializes A's counter = 0
    const counterB = outerFunction(); // Initializes B's counter = 0

    counterA(); // A's counter is now 1
    counterB(); // B's counter is now 1
    counterA(); // A's counter is now 2
    // A and B do not affect each other.
    ```
  * The `let counter = 0;` line **will not execute again** when you call `myCounter()`. It only runs during the initial call to `outerFunction()`.
 */
