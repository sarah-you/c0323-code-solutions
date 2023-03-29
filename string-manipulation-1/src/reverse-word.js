/* exported reverseWord */
function reverseWord(word) {
  let string = '';
  for (let i = (word.length - 1); i >= 0; i--) {
    string += word[i];
  }
  return string;
}
