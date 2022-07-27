/* exported includes */


function includes(array, value) {
  // loop array
  // check if value on array[i] is equal to given value
  // return boolean
 for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
