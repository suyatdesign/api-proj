var express = require('express');
var app = express();



var port = 4000;
app.listen(port, function(){
  console.log('Server is listening PORT 4000')
});

module.exports = app;