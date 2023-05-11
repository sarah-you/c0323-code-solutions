import { writeFile } from 'node:fs';
import { readFile } from 'node:fs/promises';

try {
  const data = await readFile(String(process.argv[2]), 'utf8');
  console.log(data);
  writeFile('copy-note.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
} catch (err) {
  console.error(err.message);
}

// answer key code:
// const [, , source, destination] = process.argv;
// try {
//   const data = await readFile(source);
//   await writeFile(destination, data);
// } catch (err) {
//   console.error('Error copying file: ', err.message);
// }
