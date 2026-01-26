// Hoisting and Temporal-Dead-Zone
// var -> Hoisted as undefined, but no TDZ, returns undefined on access before declaration, Error if never declared
console.log(myVar); // undefined
var myVar = 45;
var myVar = 78; // Re-initialization Possible
console.log(myVar);
if (true) {
  var myVar2 = 90; // should have Block scope
}
console.log(myVar2); // But is accessible outside block too !

// let and const -> Hoisted, but as Uninitialized, has TDZ !
// console.log(myLet); // ERROR ! --> Hoisting for let does not follow the 'undefined' behaviour. Instead it is Uninitialized during Hoisting. this Hoisting is different from var hoisting.

// TDZ of myLet ends
let myLet = 92;
console.log(myLet);

/** DATA TYPES */
// number
let a = 90;
let b = 10;
console.log(a + b);
// string
let username = "sonu64";
let age = 23;
console.log(username + " is " + age + " years old.");
// boolean
let isLoggedIn = true;
if (isLoggedIn) console.log(username + " is Logged In.");
// undefined ---> For let only
let op;
console.log(op); // undefined
// const constOp; // ERROR --> const vars should be defined during initialization !!!
// bigint
let myBigInteger = 938498239848239084823n;
console.log(myBigInteger);
// null --> Intentional Absence of Value, For example we are unable to fetch weather of a city for some reason, like Network Error.
console.log(null);
// undefined --> will be the weather if the city does not exist in the Database (or maybe the weather machine is not installed in the city)

// Symbols
const id1 = Symbol("userId");
const id2 = Symbol("userId");
console.log(id1 == id2); // false

/** NON-PRIMITIVE DATA TYPES ----> Generally all are of type OBJECT, though it may show differently ! */
// array
const arr = [1, 2, 3, undefined, null, "Sonu", true];
console.log(arr);
// objects
const profile = {
  name: "Sourakanti",
  age: 23,
  tech: "Full-Stack Robitics",
  loggedIn: true,
};
if (profile["loggedIn"]) console.log(profile["name"] + " is Logged In !");
// function
const f = function myFunc() {
  console.log("Hello, Javascript !");
};
f();

// typeof operator
console.log(
  typeof 34,
  typeof 67.89,
  typeof true,
  typeof f, // function, but under the hood this is also Object like all other non-primitive types.
  typeof myFunc, // undefined as does not return anything
  typeof undefined,
  typeof myBigInteger,
  typeof null, // BUG !! Gives object but should be null 🤣
  typeof id1,
  typeof profile,
  typeof arr, // Array is also OBJECT ⚠️
);
