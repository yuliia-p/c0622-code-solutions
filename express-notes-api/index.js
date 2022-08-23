const data = require('./data');
const fs = require('fs');

var express = require('express');
var app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (const key in data.notes) {
    dataArray.push(data.notes[key]);
  }
  res.json(dataArray);
});

app.get('/api/notes/:id', (req, res) => {
  // const numID = Number(req.params.id);
  if (!Number.isInteger(req.params.id) && req.params.id < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[req.params.id]) {
    res.status(404).json({ error: 'cannot find note with this id' });
  } else {
    res.status(200);
    res.send(data.notes[req.params.id]);
  }
});

app.post('/api/notes/', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (req.body.content) {
    const noteObj = req.body;
    noteObj.id = data.nextId;
    data.notes[noteObj.id] = noteObj;
    data.nextId++;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      }
    });
    res.status(201);
    res.send(noteObj);
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const idToDelete = Number(req.params.id);
  if (!Number.isInteger(idToDelete) && idToDelete < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[idToDelete]) {
    res.status(404).json({ error: 'cannot find note with this id' });
  } else {
    delete data.notes[idToDelete];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      }
    });
    res.sendStatus(204);
  }
});

app.put('/api/notes/:id', (req, res) => {
  const idToUpdate = Number(req.params.id);
  if (!Number.isInteger(idToUpdate) && idToUpdate < 0) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!data.notes[idToUpdate]) {
    res.status(404).json({ error: 'cannot find note with this id' });
  } else {
    data.notes[idToUpdate].content = req.body.content;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
  }
  res.status(200);
  res.send(data.notes[idToUpdate]);
});

app.listen(3000, () => {
  // console.log('Express server listening on port 3000');
});
