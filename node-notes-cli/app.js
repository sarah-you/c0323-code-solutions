import { readFile } from 'node:fs/promises';

try {
  const data = await readFile('data.json', 'utf8');
  const parsedData = JSON.parse(data);
  console.log(parsedData.notes);
  const stringify = JSON.stringify(parsedData.notes, null, 2);
  console.log(stringify);
} catch (err) {
  console.error(err.message);
}
