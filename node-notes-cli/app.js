import { readFile, writeFile } from 'node:fs/promises';

const rawData = await readFile('data.json', 'utf8');
const data = JSON.parse(rawData);
const action = process.argv[2];

async function updateData(data) {
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

try {
  switch (action) {
    case 'read':
      for (const prop in data.notes) {
        console.log(`${prop}: ${data.notes[prop]}`);
      }
      break;
    case 'create': {
      data.notes[data.nextId] = process.argv[3];
      data.nextId++;
      updateData(data);
      break;
    }
    case 'update': {
      const id = process.argv[3];
      if (data.notes[id]) {
        data.notes[id] = process.argv[4];
        updateData(data);
      } else {
        console.log('Note cannot be found');
      }
      break;
    }
    case 'delete': {
      const id = process.argv[3];
      if (data.notes[id]) {
        delete data.notes[id];
        updateData(data);
      } else {
        console.log('Note cannot be found');
      }
      break;
    }
    default:
      console.log('Unknown command');
  }
} catch (err) {
  console.error(err.message);
}
