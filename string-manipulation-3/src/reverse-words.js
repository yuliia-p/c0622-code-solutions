/* exported reverseWords */
// split str into array with 'words'
// loop word in reverse order
// push it to new array
// join() array into a str

function reverseWords(string) {
  var arr = [];
  var reverseW = '';
  var wordsArr = string.split(' ');
  for (var i = 0; i < wordsArr.length; i++) {
    var word = wordsArr[i];
    for (var y = word.length - 1; y >= 0; y--) {
      reverseW += word[y];
    }
    arr.push(reverseW);
    reverseW = '';
  }
  return arr.join(' ');
}
