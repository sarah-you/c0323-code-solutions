import pg from 'pg';
import express from 'express';

const app = express();

// database connect object
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

// parses incoming request of JSON data into JS objects to be used in the application
app.use(express.json());

// reusable error handling function for app
function handleErr(res, err) {
  console.error(err);
  res.status(500).json({ error: 'an unexpected error occurred' });
}

// reusable function that checks if URL parameter is valid
function checkParamsId(req, res) {
  const gradeId = Number(req.params.id);
  if (Number.isNaN(gradeId) || !Number.isInteger(gradeId) || gradeId < 1) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
    return false;
  }
  return true;
}
// reusable function that checks user ID input (request body)
// function checkReqBody(req, res) {
//   const { content } = req.body;
//   if (content === undefined) {
//     res.status(400).json({ error: 'content is a required field' });
//     return false;
//   }
//   return true;
// }

// get list of all grades data from database
app.get('/api/grades/', async (req, res) => {
  try {
    const gradeId = Number(req.params.id);
    if (!checkParamsId(req, res)) {
      return;
    }
    const sql = `
      select *
        from "grades";
  `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.json(grade);
    } else {
      res
        .status(404)
        .json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    handleErr(res, err);
  }
});

// gets grade data for specific id
app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.id);
    if (!checkParamsId(req, res)) {
      return;
    }
    const sql = `
      select *
        from "grades"
      where "gradeId" = $1;
  `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (grade) {
      res.json(grade);
    } else {
      res
        .status(404)
        .json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
    }
  } catch (err) {
    handleErr(res, err);
  }
});

// submits new data into database with gradeId
// app.post('/api/grades/', async (req, res) => {
//   try {

//   } catch (err) {
//     handleErr (res, err);
//   }
// });
