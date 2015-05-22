(function($){
	$.fn.scrollLoading = function(options) {
		var defaults = {
			attr: "data-src",
			container: $(window),
			callback: $.noop
		};
		var params = $.extend({}, defaults, options || {});
		params.cache = [];
		$(this).each(function() {
			var node = this.nodeName.toLowerCase(), url = $(this).attr(params["attr"]);
			var data = {
				obj: $(this),
				tag: node,
				url:url
			};
			params.cache.push(data);
		});
		
		var loading = function(){
			var contHeight = params.container.height();
			if (params.container.get(0) === window) {
				contop = params.container.scrollTop();
			} else {
				contop = params.container.offset().top;
			}
			
			$.each(params.cache, function(i, data) {
				var o = data.obj, tag = data.tag, url = data.url, post, posb;
				
				if (o) {
					post = o.offset().top - contop, posb = post + o.height();
					if ((post >= 0 && post < contHeight) || (posb > 0 && posb <= contHeight)) {
						if (url) {
							if (tag == 'img') {
								o.attr("src", url);
							} 
						}
						data.obj = null;
					}
				}
			});
		};
		
		loading();
		params.container.on("scroll", loading);
	}

})(jQuery);