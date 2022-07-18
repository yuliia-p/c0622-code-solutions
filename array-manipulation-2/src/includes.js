/* exported includes */
// loop array
// check if value given is equal to array at i
// return false if not
function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
