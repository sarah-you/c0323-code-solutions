/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('getNumbersToTen: ', getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('getEvenNumbersToTwenty: ', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log('repeatWord: ', repeatWord('sarah', 6));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log(logEachCharacter(''));
console.log(logEachCharacter('Sarah You'));
console.log(logEachCharacter('I love my cat!'));

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('doubleAll: ', doubleAll([1, 2, 3]));
console.log('doubleAll: ', doubleAll([2, 4, 6]));

function getKeys(object) {
  const keys = [];
  for (const prop in object) {
    keys.push(prop);
  }
  return keys;
}
// sample object for testing
const a = {
  first: 'Sarah',
  last: 'You',
  age: 26
};
const cat = {
  name: 'Blessing',
  age: 1,
  color: 'gray and white'
};
// end sameple object for testing

console.log('getKeys: ', getKeys(a));
console.log('getKeys: ', getKeys(cat));

function getValues(object) {
  const values = [];
  for (const prop in object) {
    values.push(object[prop]);
  }
  return values;
}

console.log('getValues: ', getValues(a));
console.log('getValues: ', getValues(cat));
