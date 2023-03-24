/* exported getValues */
function getValues(object) {
  const array = [];
  for (const key in object) {
    array.push(object[key]);
  }
  return array;
}
