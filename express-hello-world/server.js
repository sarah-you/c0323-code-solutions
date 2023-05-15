import express from 'express';

const app = express();

app.use((req, res) => {
  console.log('Time: ', Date.now());
  console.log('method property: ', req.method);
  res.send('hello world');
});

app.listen(8080, () => {
  console.log('server is listening');
});
