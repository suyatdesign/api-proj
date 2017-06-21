var express = require('express');
var bodyParser = require('body-parser');
var ToDo = require('./db/todo.js');

var app = express();
app.use(bodyParser.json());

var db = require('./db/dbconfig.js');



app.get('/api/todo', function(req, res) {
  ToDo.find({}).exec(function(err, found) {
    if (found) {
      console.log('FOUND')
      res.send(found);
    } else {
      console.log('No Entries Exist')
    }
  });
});

app.post('/api/todo/', function(req, res) {
  console.log('REQUEST', req.body);
  var entry = req.body;
  var newEntry = new ToDo({
    entry: 'entry'
  })
  newEntry.save(function(err, newEntry) {
    if (err) {
      console.log('New Entry Error')
      res.send(err);
    } else {
      ToDo.find({}).exec(function(err, found) {
        if (found) {
          console.log('FOUND')
          res.send(found);
        } else {
          console.log('No Entries Exist')
        }
      });
    }
  });

});

app.get('/api/todo/', function(req, res) {

});





var port = 4000;
app.listen(port, function(){
  console.log('Server is listening PORT 4000')
});

module.exports = app;