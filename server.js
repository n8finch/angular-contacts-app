var express = require('express'),
  api = require('./api');
  app = express();

app
  .use(express.static('./public'))//statically serve all files in public
  .use('/api', api) //use the api we created
  .get('*', function (req, res) {
    res.sendfile('public/main.html');
  })
  .listen(3000);

