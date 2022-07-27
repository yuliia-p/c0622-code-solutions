/* exported Transaction */
function Transaction(type, amount) {
  if (type === 'deposit' || type === 'withdrawal') {
    this.type = type;
  }
  if (Number.isInteger(amount) && amount > 0) {
    this.amount = amount;
  }
}
