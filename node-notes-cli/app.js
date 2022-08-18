// get data obj
const data = require('./data');
const fs = require('fs');

// show all notes when user's input === read:
if (process.argv[2] === 'read') {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

// add a note
if (process.argv[2] === 'create') {
  const newNote = process.argv[3];

  data.notes[data.nextId] = newNote;
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

// delete a file
// find a note by propery key of obj
if (process.argv[2] === 'delete') {
  const idToDelete = process.argv[3];
  delete data.notes[idToDelete];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}

// update
if (process.argv[2] === 'update') {

  const idToUpdate = process.argv[3];
  data.notes[idToUpdate] = process.argv[4];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
}
/*
if (process.argv[2] === 'read') {

}

if (process.argv[2] === 'delete')
*/
