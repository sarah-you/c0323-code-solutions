import express from 'express';

// creates new Express application object;
const app = express();

// server is listening;
app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 8080');
});
