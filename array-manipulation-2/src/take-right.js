/* exported takeRight */

// use slice method with length - count/given number
// to return a shallow copy witch last count elements
// if count > than array.length return array

function takeRight(array, count) {
  if (count > array.length) {
    return array;
  } else {

    return array.slice(array.length - count);

    array.slice(-count);
    return array.slice(-count);

  }
}
