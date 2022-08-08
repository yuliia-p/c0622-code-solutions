/* exported zip */
// take first el and push it new arr
// ['name', 'course', 'grade'], ['Cody', 'CSS', 9001]
// -> [["name", "Cody"], ["course", "CSS"], ["grade", 9001]]

function zip(first, second) {
  // debugger;
  var newArr = [];
  var arrHolder = [];
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== undefined && second[i] !== undefined) {
      newArr.push(first[i], second[i]);
      arrHolder.push(newArr);
      newArr = [];
    }
    // } else {

    // }
    // newArr.push(first[i], second[i]);
    // arrHolder.push(newArr);
    // newArr = [];
  }
  return arrHolder;
}
zip(
  ['dog', 'lion', 'hawk', 'tiger'],
  ['cat', 'lamb', 'dove']
);
