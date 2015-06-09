var Like = Backbone.Model.extend({
	defaults: {
		count: 0,
	},
	like: function() {
		var count = this.attributes.count;
	}
});

export default Like;