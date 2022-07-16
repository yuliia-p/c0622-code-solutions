/* exported swapChars */
//
//
//

function swapChars(firstIndex, secondIndex, string) {
  if (firstIndex === secondIndex) {
    return string;
  }

  if (secondIndex < firstIndex) {
    var temp = secondIndex;
    secondIndex = firstIndex;
    firstIndex = temp;
  }

  if (firstIndex >= string.length) {
    return string;

  }
  return string.substring(0, firstIndex) +
    string[secondIndex] +

    string.substring(firstIndex + 1, secondIndex) +

    string[firstIndex] +
    string.substring(secondIndex + 1);
}
