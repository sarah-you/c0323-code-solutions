const one = 1;
const ten = 10;
const seven = 7;
const maximumValue = Math.max(one, ten, seven);

console.log('max value: ', maximumValue);

const heroes = ['Black Widow', 'Iron Man', 'Thor', 'Captain America'];
let randomNumber = Math.random();
randomNumber *= heroes.length;

console.log('random number: ', randomNumber);

const randomIndex = Math.floor(randomNumber);

console.log('random index: ', randomIndex);

const randomHero = heroes[randomIndex];

console.log('random hero: ', randomHero);

const library = [
  {
    title: 'Romeo and Juliet',
    author: 'William Shakespeare'
  },
  {
    title: 'The Daily Stoic',
    author: 'Ryan Holiday and Stephen Hanselman'
  },
  {
    title: 'JavaScript and jQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett'
  }
];
const lastBook = library.pop();

console.log('last book:', lastBook);

const firstBook = library.shift();

console.log('first book: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('remaining books: ', library);

const fullName = 'Sarah You';
const firstAndLastName = fullName.split(' ');

console.log('first and last  name:', firstAndLastName);

const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log('my first name in caps: ', sayMyName);
