/* exported initial */
// Assign an empty array to variable
// Using for loop with condition array.length - 1 - minus last element
// Push every element to a new array
// return new array
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
