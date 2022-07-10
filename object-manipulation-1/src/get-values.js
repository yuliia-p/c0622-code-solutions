/* exported getValues */
function getValues(object) {
  var objValues = [];
  for (var val in object) {
    objValues.push(object[val]);
  }
  return objValues;
}
