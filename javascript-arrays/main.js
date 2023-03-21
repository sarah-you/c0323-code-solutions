const colors = ['red', 'white', 'blue'];

console.log('colors[0]: ', colors[0]);
console.log('colors[1]: ', colors[1]);
console.log('colors[2]: ', colors[2]);
console.log('America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');

colors[2] = 'green';

console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.');
console.log('colors array: ', colors);

const students = ['Sarah', 'Christine', 'Eugene', 'Sterling'];
const numberOfStudents = students.length;

console.log('There are ', numberOfStudents, ' students in the class');

const lastIndex = (numberOfStudents - 1);
const lastStudent = students[lastIndex];

console.log('The last student in the array is', lastStudent);
console.log('students array:', students);
