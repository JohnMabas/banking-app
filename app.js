const users = [];

class BankAccount {
  constructor(name, balance, type) {
    this.adminID = 100;
    this.userCode = 6231;
    this.name = name;
    this.balance = balance;
    this.type = type.toLowerCase();
    this.isActive = true;
    // this.accountNumber = this.generateAccountNumber();
    this.message = "";

    this.validateAccountType();

    users.push(this);
  }

  // Check account type
  validateAccountType() {
    const validTypes = ["savings", "current"];

    if (!validTypes.includes(this.type)) {
      return "Invalid account type";
    }
  }
}

const user1 = new BankAccount("Mabas", 54000, "Savings");

console.log(user1);
