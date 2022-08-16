/* exported unique */
// new empty array containing only the unique elements of array,
// keep pushing elements to an array until they are not included
// check with includes() methods
// return uniqueArr

function unique(array) { // [1, 3, 3, 2, 5, 2, 1, 4, 5, 5]
  var uniqueArr = [];
  var notUnique = [];
  for (var i = 0; i < array.length; i++) {
    if (!uniqueArr.includes(array[i])) {
      uniqueArr.push(array[i]);
    } else {
      notUnique.push(array[i]);
    }
  }
  return uniqueArr;
}
unique([1, 3, 3, 2, 5, 2, 1, 4, 5, 5]);
