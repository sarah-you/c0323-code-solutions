/* exported countdown */
function countdown(number) {
  const array = [];
  let i = number;
  while (i >= 0) {
    array.push(i);
    i--;
  }
  return array;
}
