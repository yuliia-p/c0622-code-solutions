const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = Number(process.argv[2]);
const y = Number(process.argv[4]);
let result = 0;
if (process.argv[3] === 'plus') {
  result = add.add(x, y);
}

if (process.argv[3] === 'minus') {
  result = subtract.subtr(x, y);
}

if (process.argv[3] === 'time') {
  result = multiply.multip(x, y);
}

if (process.argv[3] === 'over') {
  result = divide.division(x, y);
}
console.log('result: ', result);
