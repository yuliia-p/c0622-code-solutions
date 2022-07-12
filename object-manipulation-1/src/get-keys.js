/* exported getKeys */
// Assign an empty array to variable
// Using for in loop get keyes in an object
// Push it to new array
// return a new array
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
