/* exported ransomCase */
// new variable empty string
// loop string
// odd numbers of indexes to do lowercase
// even to upper
// concatenate and assign each taken letter to string variable
// return it from a function

function ransomCase(string) {
  var newStr = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      newStr += string[i].toLowerCase();
    } else {
      newStr += string[i].toUpperCase();
    }
  }
  return newStr;
}
