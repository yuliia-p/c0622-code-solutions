const fs = require('fs');
// console.log(' process.argv', process.argv);

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) throw err;
  // console.log('data:', data);
  // console.log('process.argv[2]', process.argv[2]);
  // console.log('typeof process.argv[2]', typeof process.argv[2]);
  fs.writeFile(process.argv[3], data, err => {
    if (err) throw err;
  });
});
