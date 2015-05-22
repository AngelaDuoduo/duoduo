define(['jquery', 'widget'], function($, widget) {
	function City() {
		this.cfg = {
			x: 0,
			y: 0
		};
		this.dom = null;
	}

	City.prototype = $.extend({}, new widget.Widget(), {
		maps: {
				'热门': ['北京', '上海', '广州', '济南', '深圳'],
				'A-G': ['北京', '长春', '大连','长沙', '桂林'],
				'H-L': ['哈尔滨', '海口', '杭州', '长沙', '大理'],
				'M-T': ['三亚', '青岛','台州', '唐山', '深圳'],
				'W-Z': ['西安', '厦门', '武汉']
		},
		city: function($input){
			var offset = $input.offset();
			this.cfg.x = offset.left;
			this.cfg.y = offset.top + 25;
			this.dom = $input;
			this.render();
			return this;
		},
		renderUI: function() {
			this.boundingBox = $('<div class="citybox">\
								<ul class="citynav">\
									<li class="tag active">\
										<a>热门</a>\
										<div class="cityboard" style="display: block">\
										</div>\
									</li>\
									<li class="tag">\
										<a>A-G</a>\
										<div class="cityboard">\
										</div>\
									</li>\
									<li class="tag">\
										<a>H-L</a>\
										<div class="cityboard">\
										</div>\
									</li>\
									<li class="tag">\
										<a>M-T</a>\
										<div class="cityboard">\
										</div>\
									</li>\
									<li class="tag">\
										<a>W-Z</a>\
										<div class="cityboard">\
										</div>\
									</li>\
								</ul>\
								</div>');
			var lis = this.boundingBox.find("li");
			for (var i = 0, len = lis.length; i < len; i++) {
				var tag = $(lis[i]).children("a")[0].innerText;
				var board = $(lis[i]).children("div")[0];
				var cities = this.maps[tag];

				for (var j = 0, num = cities.length; j < num; j++) {
					$(board).append('<a class="city">' + cities[j] + '</a>');
				}
			}
		},
		bindUI: function() {
			var that = this;
			this.dom.click(function() {
				if (that.boundingBox.css("display") === "none") {
					that.boundingBox.show();
				} else {
					that.boundingBox.hide();
				}				
			});
			
			this.boundingBox.delegate(".citynav .tag>a", "click", function(e) {
				e.preventDefault();
				var tagA = e.target || e.srcElement;
				that.boundingBox.find(".tag").each(function(){
					$(this).removeClass("active");
					$(this).find(".cityboard").css("display", "none");
				});
				var tagLi =  $(tagA).parent("li");
				tagLi.addClass("active");
				tagLi.find(".cityboard").css("display", "block");

			});
			this.boundingBox.delegate(".cityboard", "click", function(e){
				e.preventDefault();
				var a = e.target || e.srcElement;
				that.dom.val($(a).text());
			});
		},
		syncUI: function() {
			this.boundingBox.css({
				top: this.cfg.y + "px",
				left: this.cfg.x + "px"
			});
		}

	});


	var citypicker = function(selector){
		$(selector).each(function(){
			var self = $(this);
			new City().city(self);
		});
	};

	return {
		citypicker: citypicker
	};
});