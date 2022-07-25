/* exported student */
var student = {
  firstName: 'Yuliia',
  lastName: 'Pchelintseva',
  subject: 'Object-Oriented JavaScript',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction() {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
