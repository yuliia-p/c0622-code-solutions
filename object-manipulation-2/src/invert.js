/* exported invert */
// source any object
// return new obj
// create new empty obj
// use for in loop to get all
// properties from given source obj
// assign taken property as a key to newObj
// ang give the value of a key
// return newObj
function invert(source) {
  var newObj = {};
  for (var key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
