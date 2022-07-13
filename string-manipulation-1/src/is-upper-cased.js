/* exported isUpperCased */
// check if string word is strictly
// equal to word string with toUpperCase() method
// Return true or false
function isUpperCased(word) {
  if (word.toUpperCase() === word) {
    return true;
  }
  return false;
}
