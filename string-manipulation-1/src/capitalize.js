/* exported capitalize */
// Using charAt(0).toUpperCase() capitalize first character at index 0 of a string
// Using slice() method lower all characters from index 1
// Concatenate all together and assign to new var witch return from the function

function capitalize(word) {
  var newWord = word.charAt(0).toUpperCase() +
    word.slice(1).toLowerCase();
  // word.charAt(0).toUpperCase();
  return newWord;
}
