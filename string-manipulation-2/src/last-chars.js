/* exported lastChars */
// use slice method with str.lenght - given number
// as a indexEnd
// if condition - if string.length will be less than
// given number - return whole string

function lastChars(length, string) {
  if (length > string.length) {
    return string;
  }
  return string.slice(string.length - length);
}
