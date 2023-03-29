/* exported getWords */
function getWords(string) {
  if (string.length > 0) {
    const array = string.split(' ');
    return array;
  } else if (string.length === 0) {
    return [];
  }
}
