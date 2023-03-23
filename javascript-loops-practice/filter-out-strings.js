/* exported filterOutStrings */
function filterOutStrings(values) {
  const array = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] === 'string') {
      delete values[i];
    } else {
      array.push(values[i]);
    }
  }
  return array;
}
