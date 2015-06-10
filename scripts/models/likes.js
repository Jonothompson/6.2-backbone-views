var Like = Backbone.Model.extend({
	defaults: {
		count: 0,
	},
	like: function() {
		if (this.get('count') == 0) {
			this.set('like', 'Like');
		}
		else {
			this.set('like', "Likes");
		}
		
		var count = this.get('count') + 1;
		this.set('count', count);
		console.log(this.get('count'));
	}
});

export default Like;