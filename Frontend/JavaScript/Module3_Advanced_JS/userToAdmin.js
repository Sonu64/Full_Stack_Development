class User {
  // User Constructor
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  // Methods -> No function keyword or const Arrow functions !!!!!
  getName() {
    return this.username;
  }

  getEmail() {
    return this.email;
  }
}

class Admin extends User {
  constructor(username, email, adminType) {
    // Call Parent Constructor to setup child properly -> Implicitly called in Java.
    super(username, email);
    // Setting props unique to Child Class
    this.adminType = adminType;
  }

  // Method specific to Admin child class
  getAdminDetails() {
    return `Admin Username: ${this.username}\nAdmin E-Mail: ${this.email}\nAdmin Type: ${this.adminType}`;
  }
}

const admin = new Admin("Sourakanti", "sonu@outlook.com", "Super Admin");
const user = new User("Sonu", "sample@gmail.com");

try {
  console.log(user.getAdminDetails());
} catch (e) {
  console.error(e); // This will be printed as individual users don't have a method called getAdminDetails().
}
console.log(admin.getName()); // Runs from User Parent class
console.log(admin.getEmail()); // Runs from User Parent class
console.log(admin.getAdminDetails()); // Runs from Admin child class
