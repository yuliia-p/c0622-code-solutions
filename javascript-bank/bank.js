/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Math.round(balance) !== balance || balance <= 0) {
    return null;
  } else {
    var newAcc = new Account(this.nextAccountNumber, holder);
    newAcc.deposit(balance);
    this.accounts.push(newAcc);
    this.nextAccountNumber++;
    return newAcc.number;
  }
};

Bank.prototype.getAccount = function (number) {

  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var sumOfAll = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts.length > 0) {
      sumOfAll += this.accounts[i].getBalance();
    }
  }
  return sumOfAll;
};
