define(['jquery'], function($) {
	function Widget() {
		this.boundingBox = null;
		this.handlers = {};
	}
	Widget.prototype = {
		on: function(type, handler) {
			var handlers = this.handlers[type];
			if (typeof handlers === "undefined") {
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
		},
		fire: function(type, data){
			var handlers = this.handlers[type];
			if (handlers instanceof Array){
				for (var  i = 0, len = handlers.length; i < len; i++) {
					handlers[i].apply(this, data);
				}
			}
		},
		render: function(container) {
			this.renderUI();
			this.handlers = {};
			this.bindUI();
			this.syncUI();
			container ? $(container).append(this.boundingBox) : $("body").append(this.boundingBox);
		},
		renderUI: function(){},
		bindUI: function(){},
		syncUI: function(){},
		destory: function() {
			this.boundingBox.off();
			this.boundingBox.remove();
			this.boundingBox = null;
		}
	}
	return Widget;
});