import Like from '../models/likes';
export default Backbone.View.extend ({
  
  template: JST.like,
  
  events: {
    'click .like': 'addCount'
  },
  
  addCount: function(e) {
    e.preventDefault();
    this.model.like();
  },
  
  initialize: function(e) {
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
  
});