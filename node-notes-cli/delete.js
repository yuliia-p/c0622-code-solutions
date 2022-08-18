// // delete a file
// // find a note by propery key of obj
const data = require('./data');
const fs = require('fs');

exports.delete = function () {
  const idToDelete = process.argv[3];
  delete data.notes[idToDelete];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });

};
