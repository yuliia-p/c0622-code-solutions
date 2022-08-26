const pg = require('pg');
const express = require('express');
var app = express();
app.use(express.json());

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades/', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

});

app.post('/api/grades/', (req, res) => {
  const newGradeObj = req.body;
  if (!newGradeObj.name || !newGradeObj.course) {
    return res.status(400).json({ error: 'missing name, course, or score' });
  } else if ((!Number.isInteger(newGradeObj.score) || newGradeObj.score > 100 || newGradeObj.score < -1)) {
    return res.status(400).json({ error: 'invalid score' });
  }
  const params = [newGradeObj.name, newGradeObj.course, newGradeObj.score];
  const sql = `
  insert into "grades"
  ("name", "course", "score")
  values ($1, $2, $3)
       returning *`;
  db.query(sql, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const idToUpdate = Number(req.params.gradeId);
  if (!Number.isInteger(idToUpdate) || idToUpdate <= 0) {
    return res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.name || !req.body.course || !req.body.score) {
    return res.status(400).json({ error: 'missing name, course, or score' });
  } else if ((!Number.isInteger(req.body.score.score) || req.body.score.score > 100 || req.body.score.score < 0)) {
    return res.status(400).json({ Error: 'score is invalid.' });
  }
  const sql = `
        update "grades"
            set "name" = $1,
                "course" = $2,
                "score" = $3
            where "gradeId" = $4
            returning *`;
  const params = [req.body.name, req.body.course, req.body.score, idToUpdate];
  db.query(sql, params)
    .then(result => {
      const gradeToUpdate = result.rows[0];
      if (!gradeToUpdate) {
        res.status(404).json({ error: 'cannot find note with this id' });
      } else {
        res.json(gradeToUpdate);
      }
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
}
);

app.delete('/api/grades/:gradeId', (req, res) => {
  const idToDelete = Number(req.params.gradeId);
  if (!Number.isInteger(idToDelete) || idToDelete <= 0) {
    return res.status(400).json({ error: 'invalid gradeId' });
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
        returning *;`;
  const params = [idToDelete];
  db.query(sql, params)
    .then(result => {
      const deletGrade = result.rows[0];
      if (!deletGrade) {
        return res.status(400).json({ error: 'Id doesn\'t exist in the system' });
      }
      res.sendStatus(204);
    }).catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
