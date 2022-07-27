/* exported chunk */
function chunk(array, size) {
  var newArr = [];
  for (var i = 0; i < array.length; i += size) {
    newArr.push(array.slice(i, i + size));
  }
  return newArr;
}
