var express = require('express');
var app = express();

app.use(function (req, res) {
  // eslint-disable-next-line no-console
  // console.log('req.method: ', req.method);
  res.send('I am passing a string');
});

app.listen(3000, () => {
  // console.log('Express server listening on port 3000');
});
