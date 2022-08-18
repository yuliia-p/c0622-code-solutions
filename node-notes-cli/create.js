// // add a note
const data = require('./data');
const fs = require('fs');

exports.create = function () {
  const newNote = process.argv[3];
  data.notes[data.nextId] = newNote;
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
};
