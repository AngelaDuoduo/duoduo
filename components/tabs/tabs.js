define(['jquery', 'widget'], function($, Widget) {
	function Tabs(options) {
		this.boundingBox = options.dom;
	}
	Tabs.prototype = $.extend({}, new Widget.Widget(), {
		bindUI: function() {
			var list = $(this.boundingBox).find("li");
			var ul = $(this.boundingBox).find("ul")[0];
			$(ul).click(function(event) {
				var list_item = $(event.target);
				$(list).each(function() {
					$(this).removeClass("ecl-ui-tabs-selected");
				});
				list_item.addClass("ecl-ui-tabs-selected");
			});
		}
	});

	return Tabs;

});