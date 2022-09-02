const express = require('express');
const path = require('path');
var app = express();

const joinedPath = path.join(__dirname, 'public');
console.log('joinedPath: ', joinedPath);

const serveFiles = express.static(joinedPath);
app.use(serveFiles);

/*
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
 */
app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
