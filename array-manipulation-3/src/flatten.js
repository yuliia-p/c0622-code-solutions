// /* exported flatten */
// new empty array
// loop given array to get all values ?
// cheack if value is an array
// get values with for of loop
// push them to new array

// flatten([[1], [2], 3, 4, [5]])
// [1, 2, 3, 4, 5]

function flatten(array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      var val = array[i].values();
      // get value of an array
      for (var values of val) {
        newArr.push(values);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
flatten([false, [true, [false]], [true]]);
flatten([[1], [2], 3, 4, [5]]);
