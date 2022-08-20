var express = require('express');
var app = express();
let nextId = 1;
const grades = {};
/*
grades = {
    "course": "JavaScript",
    "id": 4,
    "name": "Yuliia",
    "score": 2000000
}
*/
app.use(express.json());

app.get('/api/grades', (req, res) => {
  const newGradesArr = [];
  for (const key in grades) {
    newGradesArr.push(grades[key]);
  }
  // newGradesArr.push(grades);
  res.json(newGradesArr);
});

app.post('/api/grades', (req, res) => {
  const gradesObj = req.body; // given obj ???
  gradesObj.id = nextId;
  grades[gradesObj.id] = gradesObj;
  nextId++;
  res.status(201);
  res.send(gradesObj);
});

app.listen(3000, () => {
  // console.log('Express server listening on port 3000');
});
