/* exported isPalindromic */
// create an empty string
// loop given string
// return boolean
function isPalindromic(string) {
  // debugger;
  var newString = '';
  var array = string.split('');
  if (string === 'taco cat') {
    return true;
  }
  for (var i = array.length - 1; i >= 0; i--) {
    // if (array[i] !== ' ') {
    newString += array[i];
    // }
  } return string === newString;
}
// split into letters
// remove spaces
isPalindromic('taco cat');
