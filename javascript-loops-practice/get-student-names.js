/* exported getStudentNames */
function getStudentNames(students) {
  var studentsFistName = [];
  for (var i = 0; i < students.length; i++) {
    studentsFistName.push(students[i].name);
  }
  return studentsFistName;
}
