/* exported capitalize */
function capitalize(word) {
  var newWord = word.charAt(0).toUpperCase() +
    word.slice(1).toLowerCase();
  // word.charAt(0).toUpperCase();
  return newWord;
}
