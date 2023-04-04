/* exported getKeys */
function getKeys(object) {
  const array = [];
  for (const key in object) {
    array.push(key);
  }
  return array;
}
