const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

let result = 0;
if (process.argv[3] === 'plus') {
  result = add.add(Number(process.argv[2]), Number(process.argv[4]));
}

if (process.argv[3] === 'minus') {
  result = subtract.subtr(Number(process.argv[2]), Number(process.argv[4]));
}

if (process.argv[3] === 'time') {
  result = multiply.multip(Number(process.argv[2]), Number(process.argv[4]));
}

if (process.argv[3] === 'over') {
  result = divide.division(Number(process.argv[2]), Number(process.argv[4]));
}
console.log('result: ', result);
