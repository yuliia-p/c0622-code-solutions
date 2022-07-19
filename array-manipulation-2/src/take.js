/* exported take */
// new empty array
// loop array
// check if index is less than given number count
// if so puch to new array
function take(array, count) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i < count) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
