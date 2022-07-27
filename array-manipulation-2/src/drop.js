/* exported drop */
// new empty array
// loop given array
// and push to a new array only elements
// with indexes greater than or equal to given number
// retern new array

function drop(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i >= count) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
