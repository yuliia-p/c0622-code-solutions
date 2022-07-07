var array = [1, 6, 50];
var maximumValue = Math.max(...array);
console.log('The value of maximumValue is: ', maximumValue);

var heroes = ['Ironman', 'Batman', 'Catwoman', 'Wonder Woman'];
var randomNumber = Math.random();
randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('the value of randomIndex is: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('the value of randomHero is ', randomHero);

var library = [
  {
    title: 'Verity',
    author: 'Colleen Hoover'
  },
  {
    title: 'Colorless Tsukuru Tazaki and his Years of Pilgrimage',
    author: 'Haruki Murakami'
  }
];

var lastBook = library.pop();
console.log('the value of lastBook is: ', lastBook);

var firstBook = library.shift();
console.log('the value of the firstBook is: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('the value of library is: ', library);

var fullName = 'Yuliia Pchelintseva';
var firstAndLastName = fullName.split(' ');
console.log('the value of firstAndLastName is: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('the value of sayMyName is: ', sayMyName);
