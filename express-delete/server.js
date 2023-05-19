import express from 'express';

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92,
  },
};

const app = express();

app.get('/api/grades', (req, res) => {
  const gradeArray = [];
  for (const prop in grades) {
    gradeArray.push(grades[prop]);
  }
  res.json(gradeArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const userId = req.params.id;
  if (userId in grades) {
    delete grades[userId];
  } else {
    res.status(400).json('userId does not exist');
  }
});

app.listen(8080, () => {
  console.log('listening on port 8080!');
});
