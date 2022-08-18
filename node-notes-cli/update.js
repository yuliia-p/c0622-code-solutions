// // update
const data = require('./data');
const fs = require('fs');

exports.update = function () {
  const idToUpdate = process.argv[3];
  data.notes[idToUpdate] = process.argv[4];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
  });
};
