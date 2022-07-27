/* exported omit */
// keys - array of "properties/keys"
// source - obj
// for in loop to get properties of an object sourse
// with indexOf method with key as argument
// look up all elements in the keys array
// if not found index === -1
// add it to empty object
// return new obj
function omit(source, keys) {
  // source = { foo: 1, bar: 2, baz: 3 }
  // keys = ['foo', 'baz']
  var newObj = {};
  for (var key in source) {
    var index = keys.indexOf(key);
    if (index === -1) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
