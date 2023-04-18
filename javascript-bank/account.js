/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
  this.deposit = function (amount) {
    // const newTransaction = new Transaction();
    if (amount > 0) {
      // this.transactions.push(newTransaction);
      return true;
    } else {
      return false;
    }
  };
}

const newAccount = new Account();
