const library = [
  {
    isbn: '9781118531648',
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Duckett'
  },
  {
    isbn: '9783869711423',
    title: 'Romeo and Juliet',
    author: 'William Shakespeare'
  },
  {
    isbn: '9780735211735',
    title: 'The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living',
    author: 'Ryan Holiday and Stephen Hanselman'
  }
];
console.log('library: ', library);
console.log('library type of: ', typeof library);

const libString = JSON.stringify(library);
console.log('object to string: ', libString);
console.log('var libString type of: ', typeof libString);

const co2023 = '{ "id": "12345", "name": "cera"}';

console.log('JSON String co2023: ', co2023);
console.log('co2023 type of: ', typeof co2023);

const classObj = JSON.parse(co2023);
console.log('string to object: ', classObj);
console.log('type of: ', typeof classObj);
