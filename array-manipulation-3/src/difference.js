/* exported difference */
// given two arrays
// return new array
// a = [1, 2, 3, 4, 5]
// b = [3, 4, 5, 6, 7]
// difference = [1, 2, 6, 7]
// cheack if first array containing same elements as second
// if yes dont push them to new array
// cheack if second array contain same elements as first
//          [1, 2, 3, 4, 5]  [3, 4, 5, 6, 7]
function difference(first, second) {
  var newArr = [];
  for (var y = 0; y < first.length; y++) {
    if (!second.includes(first[y])) {
      newArr.push(first[y]);
    }
  }
  for (var i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      newArr.push(second[i]);
    }
  }
  return newArr;
}
difference([2, 1], [2, 3]);
