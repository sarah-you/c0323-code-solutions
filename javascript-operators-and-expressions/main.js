const width = 8;
const height = 6;
const area = width * height;
console.log('area: ', area);
console.log('typeof area: ', typeof area);

const bill = 20;
const payment = 15;
const change = bill - payment;
console.log('change: ', change);
console.log('typeof change: ', typeof change);

const quizzes = 86;
const midterm = 92;
const final = 91;
const grade = (quizzes + midterm + final) / 3;
console.log('grade: ', grade);
console.log('typeof grade: ', typeof grade);

const firstName = 'Sarah ';
const lastName = 'You';
const fullName = firstName + lastName;
console.log('fullName: ', fullName);
console.log('typeof fullname: ', typeof fullName);

const pH = 4;
const isAcidic = (pH < 7);
console.log('isAcidic: ', isAcidic);
console.log('typeof isAcidic: ', typeof isAcidic);

const headCount = 8;
const isSparta = (headCount === 300);
console.log('isSparta: ', isSparta);
console.log('typeof isSparta: ', typeof isSparta);

let motto = fullName;
motto = fullName + ' is the GOAT';
console.log('motto: ', motto);
console.log('typeof motto: ', typeof motto);
