// Create object for a book
const book = {
  title: "Jayanta Manik Sompurno",
  author: "Hemendra Kumar Ray",
  price: 1150,
};

// Access props using both dot and bracket notations
console.log(`${book.title}, by ${book.author} costs Rs.${book.price}`);
console.log(`${book["title"]}, by ${book["author"]} costs Rs.${book["price"]}`);

// Nested Object including user location and address
const user = {
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
const student = {
  studentName: "Sourakanti",
  age: 22,
  roll: 52,
};
const { studentName, age } = student; // roll not accessed
console.log(studentName, age);

// 
