import { readFile } from 'node:fs/promises';
try {
  const array = process.argv.slice(2);
  const promise = array.map((element) => readFile(element, 'utf8'));
  const contents = await Promise.all(promise);
  // Promise.all fires all the promise at once and they get added to task queue and will be taken care of, not in order;
  console.log(contents.join('\n'));
  // .join will take all the contents and convert each of them to string and concat. them ('\n') spreads them out to each line;
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
