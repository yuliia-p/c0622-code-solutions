/* exported isPalindromic */
// using split method break str into array
// loop through array to remove spaces
// join() result
// reapeat the loop but in reverse order
// return boolean
function isPalindromic(string) {

  var strToArray = string.split(''); // [t, a, c, o, ' ', c, a, t]
  var noSpaceArray = [];
  for (let i = 0; i < strToArray.length; i++) {
    if (strToArray[i] !== ' ') {
      noSpaceArray.push(strToArray[i]);
      var noSpacesStr = noSpaceArray.join('');
    }
  }
  var noSpaceReverse = [];
  for (let i = strToArray.length - 1; i >= 0; i--) {
    if (strToArray[i] !== ' ') {
      noSpaceReverse.push(strToArray[i]);
      var reverseW = noSpaceReverse.join('');
    }
  }
  return noSpacesStr === reverseW;
}

isPalindromic('taco cat');
