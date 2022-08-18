// get data obj
const data = require('./data');

// // show all notes when user's input === read:
exports.read = function () {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
};
