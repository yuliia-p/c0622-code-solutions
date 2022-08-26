const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];
const sum = numbers.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log('sum: ', sum);

const product = numbers.reduce((previousValue, currentValue) => {
  return previousValue * currentValue;
});
console.log('product: ', product);

const balance = account.filter(item =>
  item.type === 'deposit').reduce((previousValue, currentValue) => {
  return previousValue + currentValue.amount;
}, 0) - account.filter(item =>
  item.type === 'withdrawal').reduce((previousValue, currentValue) => {
  return previousValue + currentValue.amount;
}, 0);

console.log('balance: ', balance);

const composite = traits.reduce((previousValue, currentValue) => {
  const obj = Object.assign(previousValue, currentValue);
  return obj;
});
console.log('composite: ', composite);
