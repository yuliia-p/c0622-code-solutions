/* exported toObject */
// keyValuePair An Array containing two elements; a String key and any other JavaScript value.
// Assign an empty object to variable newObj
// Index 0 will contain object’s property
// Value is at index 1
// Assign property and value to new object
// Return newObj

function toObject(keyValuePair) { // ['firstName', 'David']
  var newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;
}
