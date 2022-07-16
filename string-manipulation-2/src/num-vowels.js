/* exported numVowels */
// using match method on string
// retun of method is array of vowels
// .length preperty give us a number of vowels

function numVowels(string) {
  if (!string.match(/[aeiou]/gi)) {
    return 0;
  } else {
    var vowels = string.match(/[aeiou]/gi);
    var count = vowels.length;
  }
  return count;
}
