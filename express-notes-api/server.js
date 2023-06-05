import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

const app = express();

app.use(express.json());

// reusable functions
async function read() {
  const data = await readFile('data.json', 'utf8');
  return JSON.parse(data);
}

async function write(data, res) {
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

function handleError(res, err) {
  console.error(err);
  res.status(500).json({ error: 'An unexpected error occurred.' });
}
//

app.get('/api/notes', async (req, res) => {
  try {
    const data = await read();
    const notes = [];
    for (const entry in data.notes) {
      notes.push(data.notes[entry]);
    }
    res.status(200).json(notes);
  } catch (err) {
    handleError(res, err);
  }
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const data = await read();
    const id = Number(req.params.id);
    if (id < 1 || isNaN(id) || !Number.isInteger(id)) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else if (!data.notes[id]) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    } else {
      res.status(200).json(data.notes[id]);
    }
  } catch (err) {
    handleError(res, err);
  }
});

app.post('/api/notes', async (req, res) => {
  const bodyContent = req.body.content;
  try {
    if (!bodyContent) {
      res.status(400).json({ error: `content is a required field` });
    }
    const data = await read();
    const obj = {
      id: data.nextId++,
      content: bodyContent,
    };
    data.notes[obj.id] = obj;
    await write(data, res);
    res.status(201).json(bodyContent);
  } catch (err) {
    handleError(res, err);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const data = await read();
    if (id < 1 || isNaN(id) || !Number.isInteger(id)) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else if (!data.notes[id]) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    }
    delete data.notes[id];
    await write(data, res);
    res.sendStatus(204);
  } catch (err) {
    handleError(res, err);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const body = req.body;
    const data = await read();
    if (!body) {
      res.status(400).json({ error: `content is a required field` });
    } else if (id < 1 || isNaN(id) || !Number.isInteger(id)) {
      res.status(400).json({ error: 'id must be a positive integer' });
    } else if (!data.notes[id]) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    }
    data.notes[id].content = req.body.content;
    await write(data, res);
    res.status(200).json(data.notes[id]);
  } catch (err) {
    handleError(res, err);
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080!');
});
