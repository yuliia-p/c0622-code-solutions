var express = require('express');
var app = express();

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const newGradesArr = [];
  for (const key in grades) {
    newGradesArr.push(grades[key]);
  }
  res.json(newGradesArr);
});

app.listen(3000, () => {
  // console.log('Express server listening on port 3000');
});
