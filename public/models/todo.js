// Model

var Todo = Backbone.Model.extend({

    default: {
      entry: 'Enter new oens'
    }
  // initialize: function() {
  //   this.render();
  // }

  // render: function() {
  //   this.$el.html('');
  //   this.collection.each(function(entry) {
  //     this.$el.append(new Todo({model: entry}).$el);
  //   }, this);

  //   return this;
  // },

});

// Collection
var Todos = Backbone.Collection.extend({

});

var todo1 = new todo({
  entry: 'Take out garbage'
});

var todo2 = new todo({
  entry: 'Get mail'
});



var TodoView = Backbone.View.extend({
  tagName: 'tr',
  model: new Todo();

  intialize: function(){
    this.template = _.template('<td class="fish-name"><%=name%></td><td><img src="<%=image%>"></td><td class="fish-description"><%= description%></td>')
  }
});


var TodosView = Backbone.View.extend({

});







