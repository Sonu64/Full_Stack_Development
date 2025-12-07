// Prototypal Inheritance where Objects are created from Objects and object.__proto__
// represents the Parent Object.

const user = {
  username: "Sonu",
  email: "sonu@outlook.com",
  showDetails: function () {
    console.log(`\nUsername: ${this.username}\nE-Mail: ${this.email}`);
  },
};

const admin = Object.create(user);
// Adding new props to admin
admin["type"] = "Main Admin";
admin["showDetails"] = function () {
  console.log(
    `\nUsername: ${this.username}\nE-Mail: ${this.email}\nAdmin Type: ${this.type}`
  );
};

console.log("Admins Own Data: Admin Type is " + admin.type);
console.log(
  "Prototype Data that Admin creates itself from: Admin Username: " +
    admin.__proto__.username +
    "\nAdmin E-Mail: " +
    admin.__proto__.email
);

// Accessing admins proto method, and its own method
admin.__proto__.showDetails();
admin.showDetails();
