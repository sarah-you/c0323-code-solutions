const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evens = numbers.filter((nums) => nums % 2 === 0);
console.log('evens: ', evens);

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const namesNoDs = names.filter(
  (names) => !names.includes('d') && !names.includes('D')
);
console.log('names with no Ds: ', namesNoDs);
// we use ! in front of the expressions because we want the return array's values to only include names that do not have D/d
