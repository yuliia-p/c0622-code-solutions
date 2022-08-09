// /* exported equal */
// first idea was to make arrays into strings and compare them
// second idea was to use includes method to cheack if first array contain
// all the same values

function equal(first, second) {
  // debugger;
  if (first.length !== second.length) {
    return false;
  } else if (Array.isArray(first) && Array.isArray(second)) {
    return first.toString() === second.toString();
  } else {
    for (var i = 0; i < first.length; i++) {
      if (!Array.isArray(first[i]) || !Array.isArray(second[i])) {
        return false;
      }
    }
  //
  //
  // }
  }
}
equal([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
equal([{ foo: 'bar' }, { baz: 'qux' }], [{ foo: 'qux' }, { baz: 'bar' }]);
