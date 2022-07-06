function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
convertMinutesToSeconds(5);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
greet('Yuliia');

function getArea(width, height) {
  var area = width * height;
  return area;
}
getArea(17, 42);

function getFirstName(person) {
  return person.firstName;
}
getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}
getLastElement(['propane', 'and', 'propane', 'accessories']);
