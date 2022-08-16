/* exported intersection */
// find the same elements push them to new arr
// dont push if new arr already has them
// [2, 1], [2, 3] ==> [2]
function intersection(first, second) {
  var newArr = [];
  for (var y = 0; y < first.length; y++) {
    if (second.includes(first[y])) {
      newArr.push(first[y]);
    }
  }
  for (var i = 0; i < second.length; i++) {
    if (first.includes(second[i])) {
      if (!newArr.includes(second[i])) {
        newArr.push(second[i]);
      }
    }
  }
  return newArr;
}
