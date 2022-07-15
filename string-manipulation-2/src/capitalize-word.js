/* exported capitalizeWord */
// check if given word is 'javascript' word
// before do all charters in lower or upper case
// in if condition check if word is strikly equal to 'javascript' string
// if yes, do first charater uppercase concatenate with next sectiom in lower case
// and for charater at index 4 use touppercase again
// if condition is false do next step - first letter to upper, rest lower
function capitalizeWord(word) {
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return word.charAt(0).toUpperCase() + word.slice(1, 4).toLowerCase() + word.charAt(4).toUpperCase() + word.slice(5).toLowerCase();
  } else {
    var newWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return newWord;
  }
}
