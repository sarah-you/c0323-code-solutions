import { readFile } from 'node:fs/promises';

try {
  const filePath = new URL('./dijkstra.txt', import.meta.url);
  const contents = await readFile(filePath, { encoding: 'utf8' });
  console.log(contents);
} catch (err) {
  console.error(err.message);
}

// answer key code:
// try {
//   const text = await readFile('dijkstra.txt', 'utf8');
//   console.log(text);
// } catch (err) {
//   console.error('Error reading file: ', err);
//   process.exit(1);
// }

// process here is the Node; process.exit causes node to instantly quit; shell script returns an exit code (0 = successful, any other number = error); the red dot in terminal means this;
