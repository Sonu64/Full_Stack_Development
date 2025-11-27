// Create object for a book
const book = {
  title: "Jayanta Manik Sompurno",
  author: "Hemendra Kumar Ray",
  price: 1150,
};

// Access props using both dot and bracket notations
console.log(`${book.title}, by ${book.author} costs Rs.${book.price}`);
console.log(`${book["title"]}, by ${book["author"]} costs Rs.${book["price"]}`);

// Nested Object including user location and address, Using Optional Chaining
let user = {
  username: "Sonu",
  location: "West Bengal",
  address: {
    city: "Bankura",
    pin: 722102,
    postOffice: "Kenduadihi",
  },
};
console.log(
  `${user.username} lives in ${user?.location}, at ${user?.address?.city}. Pin: ${user?.address?.pin}, Post Office: ${user.address.postOffice}.`
);

// Destructure name and roll from a student object
let student = {
  studentName: "Sourakanti",
  age: 22,
  roll: 52,
};
const { studentName, age } = student; // roll not accessed
console.log(studentName, age);

// Loop through keys and values of an object
console.log(`Book Details -`);
for (const key in book) {
  const element = book[key];
  console.log(`${key.toUpperCase()} : ${element}`);
}

// Create Array from Object using Object.entires()
const userDataArray = Object.entries(user);
console.log(userDataArray);

// Copy an object through Rest Operator -> SHALLOW COPY
let newStudent = { ...student };
console.log(newStudent);
newStudent = {}; // reassigned to empty object
console.log(student); // remains unchanged
console.log(newStudent); // empty

// Using JSON.parse(JSON.stringify(objectName)) -> DEEP COPY
let newUser = JSON.parse(JSON.stringify(user));
console.log("Copied version initially: ");
console.log(newUser);
newUser = { data: "No content found" }; // Changed copied version
console.log("Copied version after changing: ");
console.log(newUser);
console.log("Actual Object is unchanged: ");
console.log(user);

// Using Computed Properties to access values
const keyName = "brand";
const biscuit = {
  biscuitName: "Marie Lite",
  [keyName]: "Sunfeast",
};
for (const key in biscuit) {
  console.log(`${key.toUpperCase()}: ${biscuit[key]}`);
}
