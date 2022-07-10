/* exported getValue */

function getValue(object, key) {
  for (var value in object) {
    value = object[key];
  }
  return value;
}
