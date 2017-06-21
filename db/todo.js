var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var toDoSchema = mongoose.Schema({
  id: Number,
  entry: String
});

var ToDo = mongoose.model('todo', toDoSchema);

module.exports = ToDo;