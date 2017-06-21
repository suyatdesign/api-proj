// Model

var Todo = Backbone.Model.extend({

    default: {
      entry: 'Enter new oens'
    }

});

// Collection
var Todos = Backbone.Collection.extend({
  // model: todo,
  // url: 'http://127.0.0.1:4000/api/todo/',

  // initialize: function() {
  //   console.log(this);
  //   this.fetch({
  //     success: function(model, response, options){
  //       this.get()
  //     },
  //     error: function(model, response, options){
  //       console.log("ERROR", response)
  //     }
  //   });
  // }
});

var todo1 = new Todo({
  entry: 'Take out garbage'
});

var todo2 = new Todo({
  entry: 'Get mail'
});



var TodoView = Backbone.View.extend({
  tagName: 'tr',

  model: new Todo(),

  intialize: function(){
    this.template = _.template($('.todo-list-template'));
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()))
  }
});


var TodosView = Backbone.View.extend({
   model: todos,
   el: $('.todos-list'),

   initialize: function(){

    this.model.on('add', this.render(), this);
   },

  render: function() {
    var self = this;

    this.$el.html('');
    _.each(this.model.toArray(), function(todo) {
      self.$el.append((new TodoView({model: todo})).render().$el)
    })
  }

});







