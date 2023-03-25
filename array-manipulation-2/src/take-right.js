/* exported takeRight */
function takeRight(array, count) {
  const newArray = [];
  for (let i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
    if (count > array.length) {
      return array;
    }
  }
  return newArray;
}
