import { writeFile } from 'node:fs';

const data = String(Math.random() + '\n');
writeFile('random.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

// answer key code:
// const rNum = Math.random();
// try {
//   await writeFile('random.txt', rNum + '\n', 'utf8');
// } catch (err) {
//   console.error(err);
// }
