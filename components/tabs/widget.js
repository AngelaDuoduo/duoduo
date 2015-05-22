define(['jquery'], function($) {

	function Widget() {
		this.handlers = {};
		this.boundingBox = null;
	}
	Widget.prototype = {
		on: function(type, handler) {
			if (typeof this.handlers[type] === 'undefined') {
				this.handlers[type] = [];
			}
			this.handlers[type].add(handler);
			return this;
		},
		fire: function(type, data) {
			var that = this;
			if (this.handlers[type] instanceof Array) {
				this.handlers[type].forEach(function(func){
					func.apply(that, data);
				});
			}
			return this;
		},
		renderUI: function(){},
		bindUI: function(){},
		syncUI: function(){},
		render: function(container) {
			this.renderUI();
			this.handlers = {};
			this.bindUI();
			this.syncUI();
			$("body").append(this.boundingBox);
		},
		destructor: function(){},
		destroy: function(){
			this.handlers = {};
			this.boundingBox.off();
			this.boundingBox.remove();
		}
	};

	return {
		Widget: Widget
	}
});