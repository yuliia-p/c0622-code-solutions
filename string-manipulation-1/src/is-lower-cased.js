/* exported isLowerCased */
// check if string word is strictly
// equal to word string with ttoLowerCase() method
// Return true or false
function isLowerCased(word) {
  if (word.toLowerCase() === word) {
    return true;
  }
  return false;
}
