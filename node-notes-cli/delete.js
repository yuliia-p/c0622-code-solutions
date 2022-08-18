// // delete a file
// // find a note by propery key of obj
// const data = require('./data');
// const fs = require('fs');

// function deleteNote() {
//   const idToDelete = process.argv[3];
//   if (process.argv[2] === 'delete') {
//     delete data.notes[idToDelete];
//     fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
//       if (err) throw err;
//     });
//   }
// }
