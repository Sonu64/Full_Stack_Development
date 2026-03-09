// Operators
let x = 20;
let y = 10;

x += y; // x is now 30
console.log(x > y); // true [00:06:12]
console.log(x === "30"); // false (checks type)

// Conditionals
let age = 20;
if (age >= 18) {
  console.log("Authorized");
} else {
  console.log("Access Denied");
}

//Loops
// Printing numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Iteration: " + i);
}
let count = 5;
while (count > 0) {
    console.log("Count is: " + count);
    count--;
}

// 4. Bitwise Operators (The "Homework" Challenge)
// The video introduces a challenge regarding single & and | (Bitwise) vs. double && and || (Logical) [01:07:25].

// Logical (&&): Short-circuits. If the first part is false, it stops.

// Bitwise (&): Operates on the binary representation of numbers. For example, 2 & 3 looks at bits: 10 (2) and 11 (3), resulting in 10 (2) [01:07:32].



