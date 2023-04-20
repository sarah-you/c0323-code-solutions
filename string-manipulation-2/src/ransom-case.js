/* exported ransomCase */
function ransomCase(string) {
  let word = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      word += string.charAt(i).toLowerCase();
    } else {
      word += string.charAt(i).toUpperCase();
    }
  }
  return word;
}
