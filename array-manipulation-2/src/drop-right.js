/* exported dropRight */
// use slice method
// start from index 0
// end - result of array.length subtracted by count
function dropRight(array, count) {
  return array.slice(0, array.length - count);
}
