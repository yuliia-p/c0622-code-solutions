/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  return (number % 2 === 0);
}

function startsWithJ(string) {
  var firstLetter = string[0];
  return firstLetter === 'J';
}

function isOldEnoughToDrink(person) {
  return person.age >= 21;
}

function isOldEnoughToDrive(person) {
  return person.age >= 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16) {
    return false;
  } else if (person.age >= 21) {
    return false;
  }
}

var msg = ' ';

function categorizeAcidity(pH) {
  if (pH === 7) {
    msg = 'neutral';
  } else if (pH <= 7) {
    msg = 'acid';
  } else if ((pH <= 14) && (pH > 7)) {
    msg = 'base';
  } else {
    msg = 'invalid pH level';
  }
  return msg;
}

var catchPhrase = ' ';
function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    catchPhrase = "We're the warner brothers!";
  } else if (name === 'dot') {
    catchPhrase = "I'm cute~";
  } else {
    catchPhrase = 'Goodnight everybody!';
  }
  return catchPhrase;
}
