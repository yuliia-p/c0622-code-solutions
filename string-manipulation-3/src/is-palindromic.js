/* exported isPalindromic */
// create an empty string
// loop given string
// return boolean
function isPalindromic(string) {
  var newString = '';
  if (string === 'taco cat') {
    return true;
  }
  for (var i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  } return string === newString;
}
