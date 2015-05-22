define(function() {
	function Widget() {
		this.handlers = {};
		this.boundingBox = null;//属性：最外层容器
	}
	Widget.prototype = {
		on: function(type, handler){
			if (typeof this.handlers[type] === 'undefined'){
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler);
			return this;
		},
		fire: function(type, data) {
			if (this.handlers[type] instanceof Array){
				this.handlers[type].forEach(function(func){
					func.apply(this, data);
				});
			}
			return this;
		},
		renderUI: function() {
		},
		destructor: function(){},//销毁前的处理函数
		bindUI: function() {},
		syncUI: function() {},
		render: function(container) {
			this.renderUI();
			this.handlers = {};
			this.bindUI();
			this.syncUI();
			$(container || document.body).append(this.boundingBox);
			
		},
		destroy: function() {
			this.destructor();
			this.boundingBox.off();
			this.boundingBox.remove();
		}
	};
	return {
		Widget: Widget
	}
});