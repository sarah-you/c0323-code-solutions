/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const array = [];
  for (let i = 0; i < words.length; i++) {
    array.push(words[i] + suffix);
  }
  return array;
}
