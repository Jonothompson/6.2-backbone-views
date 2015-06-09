require.register("main", function(exports, require, module){
  'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _viewsLikes = require('../views/likes');

var _viewsLikes2 = _interopRequireDefault(_viewsLikes);

(function () {
  'use strict';

  $(document).ready(function () {
    $('body').prepend(JST.likes());
    $('body').append(JST.loading());
  });
})();
  
});

require.register("models/likes", function(exports, require, module){
  "use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Like = Backbone.Model.extend({
	defaults: {
		count: 0
	},
	like: function like() {
		var count = this.attributes.count;
	}
});

exports["default"] = Like;
module.exports = exports["default"];
  
});

require.register("models/loading", function(exports, require, module){
  "use strict";
  
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

  template: JST.like,

  events: {
    'click .like': 'addCount'
  },

  addCount: function addCount(e) {
    e.preventDefault();
    this.model.like();
  },

  initialize: function initialize(e) {
    this.render();
  },

  render: function render() {
    this.$el.html(this.template(this.model.toJASON()));
  }
});
module.exports = exports['default'];
  
});

require.register("views/loading", function(exports, require, module){
  "use strict";
  
});

//# sourceMappingURL=app.js.map