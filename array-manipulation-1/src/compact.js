/* exported compact */
// Assign an empty array to variable to future truthy values
// Loop three each element with for loop
// With if condition sort/check truthy value
// numbers other than zero, strings with content, number
// calculations are considered as truthy values
// Push every element to a new array
// return new array
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
