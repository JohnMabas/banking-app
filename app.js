const users = [];

class BankAccount {
  constructor(name, balance, type) {
    this.adminID = 100;
    this.userCode = 6231;
    this.name = name;
    this.balance = balance;
    this.type = type.toLowerCase();
    this.isActive = true;
    this.accountNumber = this.generateAccountNumber();
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
// Generate account number
  generateAccountNumber() {
    return Math.floor(Math.random() * 1000000000);
  }

  // Deposit money
  deposit(amount) {
    if (!this.isActive) {
      this.message = "Account is inactive.";
      return;
    }

    if (amount <= 0) {
      this.message = "Amount must be greater than 0.";
      return;
    }

    this.balance += amount;
    this.message = `${amount} deposited successfully.`;
  }

}

const user1 = new BankAccount("Mabas", 54000, "Savings");
user1.deposit(20000)

console.log(user1);
