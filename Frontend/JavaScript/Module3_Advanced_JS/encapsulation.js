class Account {
  // Private fields must be initialized first
  #customerName;
  #accNum;
  #pin;

  constructor(customerName, accNum, pin) {
    this.#customerName = customerName;
    this.#accNum = accNum;
    this.#pin = pin;
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
}

const myAccount = new Account("Sonu", "3123123432", 5678);
console.log(myAccount.#pin); // Error
console.log(myAccount.getPin());
