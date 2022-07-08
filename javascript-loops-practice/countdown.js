/* exported countdown */
function countdown(number) {
  var newArray = [];
  for (number; number >= 0; number--) {
    newArray.push(number);
  }
  return newArray;
}
