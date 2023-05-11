import { writeFile } from 'node:fs';

const data = process.argv[2] + '\n';
console.log(data);
writeFile('note.txt', String(data), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

// answer key code:
// const [, , note] = process.argv;
// try {
//   await writeFile('note.txt', note + '\n', 'utf8');
// } catch (err) {
//   console.error(err);
// }
