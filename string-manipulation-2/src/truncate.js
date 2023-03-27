/* exported truncate */
function truncate(length, string) {
  let short = '';
  for (let i = 0; i < length; i++) {
    short += string[i];
  }
  short += '...';
  if (string === '') {
    return '...';
  }
  if (length > string.length) {
    return string + '...';
  }
  return short;
}
