// /* exported titleCase */
// // split str into words
// // cap first char of each
// // title = 'javascript: the definitive guide'
// // words[0] = 'javascript'

function titleCase(title) {
  // debugger;
  var newArr = [];
  var words = title.split(' ');
  for (var i = 0; i < words.length; i++) {
    if (words[i].length <= 3) {
      var a = words[i].toLowerCase();
      newArr.push(a);
    } else if (words[i].length >= 4) {
      var capW = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      newArr.push(capW);
    }
  }
  // for (var y = 0; y < newArr.length; y++) {
  //   if (words[y].toLowerCase === 'javascript') {
  //     // words[y] = 'JavaScript';
  //     newArr.splice(y, 1, 'JavaScript');
  //   }
  // }
  var str = newArr.join(' ');
  var js = 'Javascript' || 'Javascript:';
  var newStr = str.replace(js, 'JavaScript');
  return newStr;
  //     // var firstW = words[0].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  //     // if (words[i].length >= 4) {
  //     // var capW = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  //     // newArr.push(capW);
  //     // // }
  //     // if (words[i] === )
  //   }
  //   // newArr.push(firstW);

}
titleCase('professional JavaScript for web developers');
