/* exported numVowels */
// using match method on string
// retun of method is array of vowels
// .length preperty give us a number of vowels

// function numVowels(string) {
//   if (!string.match(/[aeiou]/gi)) {
//     return 0;
//   } else {
//     var vowels = string.match(/[aeiou]/gi);
//     var count = vowels.length;
//   }
//   return count;
// }
function numVowels(string) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if ((char === 'a') || (char === 'A')) {
      count++;
    } else if ((char === 'e') || (char === 'E')) {
      count++;
    } else if ((char === 'i') || (char === 'I')) {
      count++;
    } else if ((char === 'o') || (char === 'O')) {
      count++;
    } else if ((char === 'u') || (char === 'U')) {
      count++;
    } else if ((char === 'y') || (char === 'Y')) {
      count++;
    } else {
      return count;
    }
  }
  return count;
}
