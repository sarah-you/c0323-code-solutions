/* exported filterOutNulls */
function filterOutNulls(values) {
  const array = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      array.push(values[i]);
    }
  }
  return array;
}
