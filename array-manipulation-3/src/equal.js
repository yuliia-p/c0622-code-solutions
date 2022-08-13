// /* exported equal */
// loop through first array
// check if element is obj
// if yes ==> get keys and values to compare
// if element is an array ==> get elements and conpare
// if no - just compare

function equal(first, second) {
  if (first.length !== second.length || !first || !second) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (typeof first[i] !== typeof second[i]) {
      return false;
    }
    if (typeof first[i] === 'object') {
      var strFirst = JSON.stringify(first[i]);
      var strSecond = JSON.stringify(second[i]);
      // if stringified objects do not match -> return false
      if (strFirst !== strSecond) {
        return false;
      }
    } else {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  }
  return true;
}
equal([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
equal([{ foo: 'bar' }, { baz: 'qux' }], [{ foo: 'qux' }, { baz: 'bar' }]);
