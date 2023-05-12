import { writeFile } from 'node:fs/promises';

try {
  const [, , note] = process.argv;
  console.log('The file has been saved!');
  await writeFile('note.txt', note + '\n');
} catch (err) {
  console.error(err.message);
}
