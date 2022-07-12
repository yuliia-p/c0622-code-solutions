/* exported getValues */
// Assign an empty array to variable
// Using for in loop with get properties of an object
// Push to new array values of an object at[property]
// Return new array
function getValues(object) {
  var objValues = [];
  for (var val in object) {
    objValues.push(object[val]);
  }
  return objValues;
}
