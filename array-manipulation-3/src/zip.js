/* exported zip */
// new empty array
// find the amount of loops based on the length of shortes of the arrays
// loop through the shortest array and push elements to new array

function zip(first, second) {
  var arrHolder = [];
  // if first array shorter loop through and push elements to new arr
  var minLength = first.length;
  if (second.length < first.length) {
    minLength = second.length;
  }
  for (var i = 0; i < minLength; i++) {
    arrHolder.push([first[i], second[i]]);
  }
  return arrHolder;
}

zip(
  ['dog', 'lion', 'hawk', 'tiger'],
  ['cat', 'lamb', 'dove']
);
