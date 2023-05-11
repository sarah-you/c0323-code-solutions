import { readFile } from 'node:fs/promises';
try {
  const array = process.argv.slice(2);
  const promise = array.map((element) => readFile(element, 'utf8'));
  const contents = await Promise.all(promise);
  // something goes here to separate out the array into each elements;
  console.log(contents);
} catch (err) {
  console.error(err.message);
}
