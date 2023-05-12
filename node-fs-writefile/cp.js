import { writeFile, readFile } from 'node:fs/promises';

const [, , original, copy] = process.argv;
try {
  const data = await readFile(original);
  console.log(data);
  await writeFile(copy, data);
  console.log('The file has been saved!');
} catch (err) {
  console.error(err.message);
}
