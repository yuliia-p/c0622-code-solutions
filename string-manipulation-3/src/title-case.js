// /* exported titleCase */
// split str into words array
// cap first char of first word
// use join method
// return new str
// var capExceptions = ['and', 'or', 'nor', 'But', 'A', 'An', 'The', 'As', 'At', 'By', 'For', 'In', 'Of', 'On', 'Per', 'To'];

function titleCase(title) {
  var newTitle = title.toLowerCase();
  var exceptions = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var newArr = [];
  var words = newTitle.split(' ');
  for (var i = 0; i < words.length; i++) {
    if (words[i].includes(':')) {
      var wordWithColon = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      if (wordWithColon === 'Javascript:') {
        wordWithColon = 'JavaScript:';
      }
      newArr.push(wordWithColon);
      var wordAfterColon = words[i + 1];
      newArr.push(wordAfterColon.charAt(0).toUpperCase() + wordAfterColon.slice(1).toLowerCase());
      i++;
    } else if (exceptions.includes(words[i])) {
      newArr.push(words[i]);
    } else if (words[i].includes('-')) { // in-depth
      var capitalCount = words[i].indexOf('-') + 1;
      var splitWordArray = words[i].split(''); // ==> [i, n, -, d, e, p, t, h]
      splitWordArray.splice(0, 1, splitWordArray[0].toUpperCase());
      splitWordArray.splice(capitalCount, 1, splitWordArray[capitalCount].toUpperCase());
      newArr.push(splitWordArray.join(''));
    } else if (words[i].toLowerCase === 'javascript') {
      newArr.push(words[i] = 'JavaScript');
    } else if (words[i].toLowerCase() === 'api') {
      words[i] = 'API';
      newArr.push(words[i]);
    } else {
      var restWords = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      newArr.push(restWords);
    }
  }
  var firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
  if (firstWord === 'Javascript') {
    firstWord = 'JavaScript';
  } else if (firstWord === 'Javascript:') {
    firstWord = 'JavaScript:';
  }
  newArr.splice(0, 1, firstWord);
  var str = newArr.join(' ');
  var js = 'Javascript';
  var newStr = str.replace(js, 'JavaScript');
  return newStr;
}
titleCase('web audio api');
titleCase('javascript: the definitive guide');
titleCase('speaking Javascript: an in-depth guide for programmers');
titleCase('speaking: the in-depth guide for programmers');
titleCase('hop on pop');
titleCase('node.js in action');
titleCase('professional JavaScript for web developers');
