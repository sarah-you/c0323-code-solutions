/* exported capitalizeWords */
function capitalizeWords(string) {
  let capWord = string[0].toUpperCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      capWord += ' ' + string[i + 1].toUpperCase();
      i++;
    } else {
      capWord += string[i].toLowerCase();
    }
  }
  return capWord;
}
