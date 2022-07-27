/* exported Account */
function Account(number, holder) {
  if (Number.isInteger(number) && number > 0) {
    this.number = number;
  }
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var deposit = new Transaction('deposit', amount);
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(deposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var withdrawal = new Transaction('withdrawal', amount);
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(withdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var sumWithdraw = 0;
  var sumDepos = 0;
  if (this.transactions.length === 0) {
    return 0;
  }
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'withdrawal') {
      sumWithdraw += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'deposit') {
      sumDepos += this.transactions[i].amount;
    }
    var balance = sumDepos - sumWithdraw;
  }
  return balance;
};
