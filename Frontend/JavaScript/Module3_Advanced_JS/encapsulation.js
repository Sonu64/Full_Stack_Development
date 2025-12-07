class Account {
  // Private fields must be initialized first
  #customerName;
  #accNum;
  #pin;
  #amount;

  constructor(customerName, accNum, pin, amount) {
    this.#customerName = customerName;
    this.#accNum = accNum;
    this.#pin = pin;
    this.#amount = amount;
  }

  getCustomerName() {
    return this.#customerName;
  }
  setCustomerName(customerName) {
    this.#customerName = customerName;
  }
  getAccNum() {
    return this.#accNum;
  }
  getPin() {
    return this.#pin;
  }

  deposit(amt) {
    amt = parseInt(amt);
    this.#amount += amt;
    console.log(`New Amount after deposit = Rs.${this.#amount}`);
  }

  withdraw(amt) {
    amt = parseInt(amt);
    if (amt > this.#amount) {
      console.log("Not Enough Balance !");
    } else {
      this.#amount -= amt;
      console.log(`New Amount after deposit = Rs.${this.#amount}`);
    }
  }
}

const myAccount = new Account("Sonu", "3123123432", 5678, 1000);
// console.log(myAccount.#pin); // Error
console.log(myAccount.getPin());
myAccount.deposit(200);
myAccount.withdraw(1100);
myAccount.withdraw(900);
