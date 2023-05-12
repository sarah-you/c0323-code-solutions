import { writeFile } from 'node:fs/promises';

try {
  const data = Math.random() + '\n';
  console.log(data);
  await writeFile('random.txt', data);
  console.log('The file has been saved!');
} catch (err) {
  console.error(err.message);
}
