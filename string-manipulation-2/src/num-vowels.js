/* exported numVowels */
// using toLowerCase method on string do all letters in lower case
// assign 0 to new variable to count vowels
// loop sting
// with if statment check if character on i is equal to vowels
// if so add and assign to count 1
// .length preperty give us a number of vowels

function numVowels(string) {
  var lowStr = string.toLowerCase();
  var count = 0;
  for (var i = 0; i < lowStr.length; i++) {
    var char = lowStr[i];
    if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
      count += 1;
    }
  }
  return count;
}
