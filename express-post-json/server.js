import express from 'express';

const app = express();

let nextId = 1;
const grades = {};

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const prop in grades) {
    array.push(grades[prop]);
  }
  res.json(array);
});

app.post('/api/grades', (req, res) => {
  const inputObj = req.body;
  inputObj.id = nextId++;
  grades[inputObj.id] = inputObj;
  res.status(201).json(inputObj);
});

app.listen(8080, () => {
  console.log('listening on port 8080!');
});
