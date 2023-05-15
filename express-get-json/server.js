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

app.use(function (req, res, next) {
  console.log('Time: ', Date.now());
  console.log('method: ', req.method);
  next();
});

app.get('/api/grades', (req, res) => {
  const gradeArray = [];

  for (const id in grades) {
    const grade = grades[id];
    gradeArray.push({
      id: grade.id,
      name: grade.name,
      course: grade.course,
      score: grade.score,
    });
  }
  res.json(gradeArray);
});

app.listen(8080, () => {
  console.log('server is listening');
});
