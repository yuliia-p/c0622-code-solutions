// /* exported titleCase */
// // split str into words array
// // cap first char of each
// // title = 'javascript: the definitive guide'
// // words[0] = 'javascript'

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
    } else {
      var restWords = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      newArr.push(restWords);
    }
  }
  var str = newArr.join(' ');
  var js = 'Javascript' || 'Javascript:';
  var newStr = str.replace(js, 'JavaScript');
  return newStr;
}
titleCase('speaking Javascript: an in-depth guide for programmers');

titleCase('hop on pop');
titleCase('node.js in action');
titleCase('professional JavaScript for web developers');
