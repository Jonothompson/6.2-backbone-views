import Like from '../models/likes';
export default Backbone.View.extend ({
  
  template: JST.likes,
  
  events: {
    'click .likeButton': 'like'
  },
  
  like: function(e) {
    e.preventDefault();
    this.model.like();
  },
  
  initialize: function(e) {
    this.render();
    this.model.on('change:count', this.render, this);
  },
  
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
  
});