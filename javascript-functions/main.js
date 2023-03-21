function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('minutes to seconds: ', convertMinutesToSeconds(3));

function greet(name) {
  return 'Hey, ' + name;
}

console.log('greet: ', greet('Sarah'));

function getArea(width, height) {
  return width * height;
}

console.log('area of a rectangle: ', getArea(5, 7));

function getFirstName(person) {
  const first = person.firstName;
  return first;
}

console.log("person's first name: ", getFirstName({ firstName: 'Sarah', lastName: 'You' }));

function getLastElement(array) {
  return array[array.length - 1];
}
console.log("array's last element: ", getLastElement(['first', 'second', 'third', 'last']));
