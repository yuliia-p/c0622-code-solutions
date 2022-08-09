/* exported union */
//
//
//
// [2, 1], [2, 3] ==> [2, 1, 3]
function union(first, second) {
// push all and check
  var newArr = [];
  for (var y = 0; y < first.length; y++) {
    newArr.push(first[y]);
  }
  for (var i = 0; i < second.length; i++) {
    if (!newArr.includes(second[i])) {
      newArr.push(second[i]);
    }
  }
  return newArr;
}
