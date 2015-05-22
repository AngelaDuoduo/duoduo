define(['jquery', 'widget'], function($, Widget) {
	function Tips(options) {
		this.titleFunc = options.titleFunc || function() {return "";};
		this.width = options.width || 120;
		this.height = options.height || 70;
	}
	Tips.prototype = $.extend({}, new Widget(), {
		renderUI: function() {
			this.boundingBox = $('<div class="tip"></div>');		
		},
		bindUI: function() {
			var that = this;
			$(".tooltips").each(function() {
				var self = $(this);
				var dom = this;
				self.on("mouseover", function() {
					var left = self.offset().left;
					var top = self.offset().top;
					var height = self.height();
					var width = self.width();
					that.boundingBox.show();
					that.boundingBox.offset({top: top + height + 15, left: left - Math.abs((width - that.width)) / 2});
					that.boundingBox.text(that.titleFunc(self.text()));
					
				});
			    self.on("mouseout", function() {
			    	that.boundingBox.hide();
			    });
			});
		},
		syncUI: function() {
			var that = this;
			this.boundingBox.css({
				width: that.width + "px",
				height: that.height + "px"
			});
		}
	});

	return Tips;
});