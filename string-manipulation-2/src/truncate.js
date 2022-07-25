/* exported truncate */
// use substring method on string
// with start from 0 to given number length
// return it from a function

function truncate(length, string) {
  return string.substring(0, length) + '...';
}
