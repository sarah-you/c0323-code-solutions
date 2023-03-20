const student = {
  firstName: 'Sarah ',
  lastName: 'You',
  age: 26
};

student.fullName = student.firstName + student.lastName;

console.log('fullname: ', student.fullName);

student.livesInIrvine = true;
student.previousOccupation = 'marketing assistant';

console.log('lives in irvine: ', student.livesInIrvine);
console.log('previous occupation: ', student.previousOccupation);
console.log('student: ', student);

const vehicle = {
  make: 'Hyundai',
  model: 'Elantra',
  year: 2020
};

vehicle['isConvertible'] = false;
vehicle['color'] = 'silver';

console.log('vehicle color: ', vehicle['color']);
console.log('vehicle is convertible: ', vehicle['isConvertible']);
console.log('vehicle: ', vehicle);

const pet = {
  name: 'Blessing',
  type: 'Cat'
};

delete pet.name;
delete pet.type;

console.log('pet: ', pet);
