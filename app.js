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


   // Withdraw money
  withdraw(amount) {
    if (!this.isActive) {
      this.message = "Account is inactive.";
      return;
    }

    if (amount <= 0) {
      this.message = "Invalid amount.";
      return;
    }

    if (amount > this.balance) {
      this.message = "Insufficient balance.";
      return;
    }

    this.balance -= amount;
    this.message = `${amount} withdrawn successfully.`;
  }


  // Withdraw money
  withdraw(amount) {
    if (!this.isActive) {
      this.message = "Account is inactive.";
      return;
    }

    if (amount <= 0) {
      this.message = "Invalid amount.";
      return;
    }

    if (amount > this.balance) {
      this.message = "Insufficient balance.";
      return;
    }

    this.balance -= amount;
    this.message = `${amount} withdrawn successfully.`;
  }

  // Transfer money
  transfer(receiverName, amount) {
    if (!this.isActive) {
      this.message = "Account is inactive.";
      return;
    }

    const receiver = users.find(user => user.name === receiverName);

    if (!receiver) {
      this.message = "Recipient not found.";
      return;
    }

    if (!receiver.isActive) {
      this.message = "Recipient account is inactive.";
      return;
    }

    if (amount <= 0 || amount > this.balance) {
      this.message = "Transfer failed.";
      return;
    }

    this.balance -= amount;
    receiver.balance += amount;

    this.message = `Transferred ${amount} to ${receiver.name}.`;
    receiver.message = `Received ${amount} from ${this.name}.`;
  }


}

const user1 = new BankAccount("Mabas", 54000, "Savings");
// user1.deposit(20000)
// user1.withdraw(10000)

console.log(user1);
