// /* exported titleCase */
// split str into words array
// cap first char of first word
//
//
// use join method
// return new str
// title = 'javascript: the definitive guide'
// words[0] = 'javascript'

function titleCase(title) {
  // debugger;
  var exceptions = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var newArr = [];
  var words = title.split(' '); // ==> ['javascript:', 'the', 'definitive', 'guide']
  var firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase(); // first word always starts with capital
  newArr.push(firstWord);
  for (var i = 1; i < words.length; i++) {
    if (exceptions.includes(words[i])) {
      newArr.push(words[i]);
    } else if (words[i].includes('-')) { // in-depth
      var capitalCount = words[i].indexOf('-') + 1;
      var splitWordArray = words[i].split(''); // ==> [i, n, -, d, e, p, t, h]
      splitWordArray.splice(0, 1, splitWordArray[0].toUpperCase());
      splitWordArray.splice(capitalCount, 1, splitWordArray[capitalCount].toUpperCase());
      newArr.push(splitWordArray.join(''));
      // skips this step
    } else if (words[i].includes(':')) { // use split ? words[i - 1] ??
      // var splitWordArray2 = words[i].split('');
      var wordWithColon = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      newArr.push(wordWithColon);
      // do i need to check if it is already in array
      var wordAfterColon = words[i + 1];
      if (exceptions.includes(wordAfterColon)) {
        newArr.push(wordAfterColon.charAt(0).toUpperCase() + wordAfterColon.slice(1).toLowerCase()); // words[i].charAt(0).toUpperCase())
      }
      // var wordAfterColon = words[i + 1].charAt(0).toUpperCase() + words[i + 1].slice(1).toLowerCase(); // words[i].charAt(0).toUpperCase()
    } else {
      var restWords = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      newArr.push(restWords);
    }
  }
  var str = newArr.join(' ');
  var js = 'Javascript' || 'Javascript:'; // ?
  var newStr = str.replace(js, 'JavaScript');
  return newStr;
}
titleCase('speaking Javascript: an in-depth guide for programmers');

titleCase('speaking: the in-depth guide for programmers');
titleCase('hop on pop');
titleCase('node.js in action');
titleCase('professional JavaScript for web developers');
