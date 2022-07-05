var student = {
  firstName: 'Yuliia',
  lastName: 'Pchelintseva',
  age: '32'
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
console.log('value of student', student);

student.livesInIrvine = false;
student.previousOccupation = 'Graphic desiner';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Volvo',
  model: 'C30',
  year: 2021
};

vehicle['color'] = 'Grey';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]: ', vehicle['color']);
console.log('value of vehicle["isConvertible"]: ', vehicle['isConvertible']);
console.log('value of vehicle', vehicle);

var pet = {};

pet.name = 'Goody';
pet.type = 'dog';

delete pet.name;
delete pet.type;
console.log(pet);
