/* exported chunk */
/*
1. iterate through original array
2. create temporary array to store chunks
3. push elements into temporary array untill they reach the size of "count"
4. once reached, push to newArr
*/
function chunk(array, size) {
  var newArr = [];
  var tempArr = [];
  for (let i = 0; i < array.length; i++) {
    var el = array[i];
    if (tempArr.length === size) {
      newArr.push(tempArr);
      tempArr = [];
    }
    tempArr.push(el);
  }
  if (tempArr.length) {
    newArr.push(tempArr);
  }
  return newArr;
}
