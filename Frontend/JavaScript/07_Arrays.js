// 1. Why Arrays
// Basic Array Creation
const marks = [100, 50, 70, 80, 90];

// Accessing Elements (0-indexed)
console.log(marks[0]); // 100
console.log(marks.length); // 5 [00:04:16]

// 2. JavaScript Heterogeneous Arrays
const mixedArray = [42, "Hello", true, null, { name: "Sonu" }, [1, 2, 3]];
console.log(mixedArray[4].name); // "Sonu"

// 3. Array Operations
let fruits = ["Apple", "Banana"];
// Adding to the end
fruits.push("Mango");
// Removing from the end
fruits.pop();
// Adding to the beginning
fruits.unshift("Orange");
// Removing from the beginning
fruits.shift();
// Searching
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.includes("Grapes")); // false

// 4. The Big Secret: "Arrays are Objects"
let arr = [10, 20];
arr.name = "My Array"; // Adding a property like an object
console.log(arr); // An Object !!!
console.log(typeof arr); // "object"
console.log(arr.name);   // "My Array"

// 5. Array Slicing and Splicing
// slicing (non-destructive) -> A copy
let numbers = [1, 2, 3, 4, 5];
let part = numbers.slice(1, 3); // [2, 3]
// splicing (destructive) -> Modifies original array
numbers.splice(2, 1, 99); // Start at index 2, remove 1 item, add 99
console.log(numbers); // [1, 2, 99, 4, 5]

console.log(arr.length); // 2, not 3 ! (length counts only indexed elements, not properties like name)