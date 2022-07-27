/* exported dropRight */
// use slice method to slice array from first index
// to length - count/given number
// assign the result to new array
function dropRight(array, count) {
  var newArray = array.slice(0, array.length - count);
  return newArray;
}
