// /* exported isAnagram */
// split a sring into array of letters
// remove all spaces
// push only truly value into new arr
// usw sort method to sort arr velues
// join them into a str and compare
// eslint-disable-next-line no-unused-vars
function isAnagram(firstString, secondString) {
  var word1 = [];
  var word2 = [];
  var array1 = firstString.split('');
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== ' ') {
      word1.push(array1[i]);
    }
  }
  var array2 = secondString.split('');
  for (var y = 0; y < array2.length; y++) {
    if (array2[y] !== ' ') {
      word2.push(array2[y]);
    }
  }
  return word1.sort().join('') === word2.sort().join('');
}
isAnagram('anagram', 'nag a ram');
