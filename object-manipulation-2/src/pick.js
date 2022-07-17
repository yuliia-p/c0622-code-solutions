/* eslint-disable no-prototype-builtins */
/* exported pick */
// keys - array of "properties"
// source - obj
// loop keys array
// if element of array exists in source obj as a property
// and its value is not undefined
// add it to a new obj
// retutn new obj

function pick(source, keys) {
  // source = { foo: 1, bar: 2, baz: 3 }
  // keys = ['foo', 'baz']
  var newObj = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (source.hasOwnProperty(key) && source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
