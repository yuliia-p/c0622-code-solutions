
const read = require('./read');
const create = require('./create');
const del = require('./delete');
const update = require('./update');

if (process.argv[2] === 'read') {
  read.read();
} else if (process.argv[2] === 'create') {
  create.create();
} else if (process.argv[2] === 'delete') {
  del.delete();
} else if (process.argv[2] === 'update') {
  update.update();
}
