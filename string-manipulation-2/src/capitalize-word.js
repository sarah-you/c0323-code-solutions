/* exported capitalizeWord */
function capitalizeWord(word) {
  let cap = '';
  for (let i = 0; i < word.length; i++) {
    cap = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  return cap;
}
