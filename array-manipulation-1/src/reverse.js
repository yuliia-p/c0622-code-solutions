/* exported reverse */
// Assign an empty array to variable
// Using for loop with in descending order
// Starting with last element to 0
// push every element in this order to a new array
// return new array
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
