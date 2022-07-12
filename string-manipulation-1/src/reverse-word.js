/* exported reverseWord */
// Assign an empty string to variable for a future word
// Using for loop get all indexes of a character in reverse order
// Sum and assign all reversed indexes to get a new word
function reverseWord(word) {
  var newWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}
