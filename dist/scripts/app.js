require.register("main", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsLikes = require('../views/likes');

var _viewsLikes2 = _interopRequireDefault(_viewsLikes);

var _viewsLoading = require('../views/loading');

var _viewsLoading2 = _interopRequireDefault(_viewsLoading);

var _modelsLikes = require('./models/likes');

var _modelsLikes2 = _interopRequireDefault(_modelsLikes);

(function () {
  'use strict';

  $(document).ready(function () {
    $('#content').html(JST.likes());
    renderLike();
    renderLoading();

    function renderLike() {
      var like = new _modelsLikes2['default']();
      var likeView = new _viewsLikes2['default']({ model: like });
      $('.likeButton').html(likeView.el);
    }

    function renderLoading() {
      var loadingButton = new _viewsLoading2['default']();
      $('.loadingButton').html(loadingButton.el);
    }
  });
})();
  
});

require.register("models/likes", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var Like = Backbone.Model.extend({
	defaults: {
		count: 0
	},
	like: function like() {
		if (this.get('count') == 0) {
			this.set('like', 'Like');
		} else {
			this.set('like', 'Likes');
		}

		var count = this.get('count') + 1;
		this.set('count', count);
		console.log(this.get('count'));
	}
});

exports['default'] = Like;
module.exports = exports['default'];
  
});

require.register("models/loading", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var Loading = Backbone.Model.extend({
	test: '',
	isLoading: false
});

exports['default'] = Loading;
module.exports = exports['default'];
  
});

require.register("views/likes", function(exports, require, module){
  'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _modelsLikes = require('../models/likes');

var _modelsLikes2 = _interopRequireDefault(_modelsLikes);

exports['default'] = Backbone.View.extend({

  template: JST.likes,

  events: {
    'click .likeButton': 'like'
  },

  like: function like(e) {
    e.preventDefault();
    this.model.like();
  },

  initialize: function initialize(e) {
    this.render();
    this.model.on('change:count', this.render, this);
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJSON()));
  }

});
module.exports = exports['default'];
  
});

require.register("views/loading", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = Backbone.View.extend({

	template: JST.loading,

	initialize: function initialize() {
		this.render();
	},

	render: function render() {
		this.$el.html(this.template());
	}

});
module.exports = exports["default"];
  
});

//# sourceMappingURL=app.js.map