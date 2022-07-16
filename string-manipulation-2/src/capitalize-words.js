/* exported capitalizeWords */
// assign new empty array to a variable
// slice string into words
// loop them amd cap each first letter
// push to array
// use join method with space
// return new string

function capitalizeWords(string) {
  var newArr = [];
  var words = string.split(' ');
  for (var i = 0; i < words.length; i++) {
    var capW = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    newArr.push(capW);
    var Str = newArr.join(' ');
  }
  return Str;
}
