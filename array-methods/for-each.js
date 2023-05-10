const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('in order: ');
values.forEach((values) => {
  console.log(values);
});

console.log('in reverse order: ');

values.forEach((n, index) => console.log(values[values.length - 1 - index]));
// index is used here because in order to go in reverse order, we need to subtract from the index from the next 'last' index;
