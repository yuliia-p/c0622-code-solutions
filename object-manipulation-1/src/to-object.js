/* exported toObject */
function toObject(keyValuePair) { // ['firstName', 'David']
  var newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;
}
