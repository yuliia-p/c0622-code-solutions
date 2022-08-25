const takeAChance = require('./take-a-chance');
const promiseObj = takeAChance('Yuliia');
promiseObj.then(value => console.log(value));
promiseObj.catch(error => {
  console.error(error.message);
});
