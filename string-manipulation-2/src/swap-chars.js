/* exported swapChars */
// SUBSTRING = start (including index), end (excluding index)
// if firstIndex === secondIndex => return string
// to use substring method start index should be smaller than end index
// if not swap them
// using substring method cut the string
// into parts - before fisrt given index (from 0 to firstIndex)
// then from firstIndex + 1 (to avoid character we swaping) to secondIndex
// and last part - from secondIndex to the end
// concatenate all part
// return new string

function swapChars(firstIndex, secondIndex, string) {
  if (firstIndex === secondIndex) {
    return string;
  }
  var first = firstIndex;
  var second = secondIndex;
  if (firstIndex > secondIndex) {
    first = secondIndex;
    second = firstIndex;
  }
  var firstPart = string.substring(0, firstIndex); // comple
  var secondPart = string.substring(firstIndex + 1, secondIndex); // -
  var lastPart = string.substring(secondIndex + 1); // d

  var newString = firstPart + string[second] + secondPart + string[first] + lastPart;
  return newString;
}
