var colors = ['red', 'white', 'blue'];
console.log('value of colors[0]: ', colors[0]);
console.log('value of colors[1]: ', colors[1]);
console.log('value of colors[2]: ', colors[2]);

var america = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(america);

colors[2] = 'green';

var mexico = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(mexico);

console.log(colors);

var students = ['Yuliia', 'Tara', 'David', 'Cody'];
var numberOfStudents = students.length;
console.log(numberOfStudents);
console.log('There are ' + numberOfStudents + ' students in the class');

var lastIndex = numberOfStudents - 1;
console.log(lastIndex);

var lastStudent = students[lastIndex];
console.log('The last sudent in the array is', lastStudent);
console.log(students);
