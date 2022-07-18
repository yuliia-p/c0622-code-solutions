/* exported take */
// new empty array
// with for loop loop all elements
// with if condition compare index to given count number
// if its less then push it a new array
// return new array
function take(array, count) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (i < count) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
