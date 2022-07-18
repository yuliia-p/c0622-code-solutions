/* exported takeRight */
// check if number is larger
// than the length of the array
// if so - return array
// if not use slice method to take
// number(count) of elements from the end of array
// return the result
function takeRight(array, count) {
  if (count > array.length) {
    return array;
  } else {
    array.slice(-count);
    return array.slice(-count);
  }
}
