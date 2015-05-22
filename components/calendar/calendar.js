define(['jquery', 'widget'], function($, widget) {

	function dateFormat(year, month, conta) {
		return month <= 9 ? (year + conta + "0" + month) : (year + conta + month);
	}

	function calculateDays(currentMonth, target) {
		var current = new Date(currentMonth);
		var result = [];
		switch(target) {
			case "current":
				var start = 31;
				while (new Date(currentMonth + "-" + start).getMonth() !== current.getMonth()) 
					start--;
				for (var i = 1; i <= start; i++) {
					result.push(i);
				}
				break;
			case "before": 
				if (current.getDay() !== 0) {
					var lastMonth;
					if (current.getMonth() !== 0) {
						lastMonth = new Date(current.getFullYear() + "-" + current.getMonth());
					} else {
						lastMonth = new Date(current.getFullYear() - 1 + "-" + 12);
					}
					start = 31;
					while (new Date(lastMonth + "-" + start).getMonth() !== lastMonth.getMonth())
						start--;
					for (var i = start - current.getDay();i <= start; i++) {
						result.push(i);
					}
				}
				break;
		}
		return result;
	}
	
	function Calender() {
		this.cfg = {
			x: 0,
			y: 0
		};
		this.currentMonth = "";
		this.beforeDays = [];
		this.currentDays = [];
		this.dom = null;
	}

	Calender.prototype = $.extend({}, new widget.Widget(), {
		renderUI: function() {
			this.boundingBox = $('<div class="calendar">\
										<div class="last_month"></div>\
										<div class="next_month"></div>\
										<div class="month"></div>\
										<div class="week"></div>\
										<div class="days"></div>\
								</div>');
			
			this.boundingBox.find(".month").text(this.currentMonth);
			
			var week = ['日', '一', '二','三','四','五','六'];
			var weekBrand = this.boundingBox.find(".week")[0];
			var days = this.boundingBox.find(".days")[0];

			for (var i = 0; i < 7; i++) {
				$('<div class="weekday">' + week[i] + '</div>').appendTo(weekBrand);
			}
			for (var i = 0, len = this.beforeDays.length - 1; i < len; i++) {
				$('<a class="invalid_day">' + this.beforeDays[i] + "</a>").appendTo(days);
			}
			for (i = 0, len = this.currentDays.length; i < len; i++) {
				if (this.currentDays[i] === new Date().getDate()) {
					$('<a class="day today">' + this.currentDays[i] + "</a>").appendTo(days);
				} else {
					$('<a class="day">' + this.currentDays[i] + "</a>").appendTo(days);
				}				
			}

		},
		bindUI: function(){
			var that = this;
			this.dom.on("click", function() {
				if (that.boundingBox.css("display") === "none") {
					that.boundingBox.css("display", "block");
					console.log(that.boundingBox.offset().left);
				} else {
					that.boundingBox.css("display", "none");
				}
			});

			this.boundingBox.delegate(".day", "click", function() {
				var day = $(this).text();
				if (day < 10) {
					that.dom.val(that.currentMonth + "-0" + day);
				} else {
					that.dom.val(that.currentMonth + "-" + day);
				}
			});

			this.boundingBox.delegate(".last_month", "click", function() {
				that.refresh("last_month");
			});

			this.boundingBox.delegate(".next_month", "click", function() {
				that.refresh("next_month");
			});
		},
		syncUI: function(){
			this.boundingBox.css({
				top: this.cfg.y + "px",
				left: this.cfg.x + "px"
			});			
		},
		refresh: function(target) {
			if (target == "last_month") {
				var current = new Date(this.currentMonth);
				if (current.getMonth() !== 0) {
					var date = new Date(current.getFullYear() + "-" + current.getMonth());
					this.currentMonth = dateFormat(date.getFullYear(), date.getMonth() + 1, '-');
				} else {
					var date = new Date(current.getFullYear() - 1 + "-" + 12);
					this.currentMonth = dateFormat(date.getFullYear(), date.getMonth() + 1, '-');
				}				
			} else {
				var current = new Date(this.currentMonth);
				if (current.getMonth() < 11) {
					var date = new Date(current.getFullYear() + "-" + (current.getMonth() + 2));
					this.currentMonth = dateFormat(date.getFullYear(), date.getMonth() + 1, '-');
				} else {
					var date = new Date(current.getFullYear() + 1 + "-01");
					this.currentMonth = dateFormat(date.getFullYear(), date.getMonth() + 1, '-');
				}	
			}

			this.beforeDays = calculateDays(this.currentMonth, "before");
			this.currentDays = calculateDays(this.currentMonth, "current");

			this.boundingBox.find(".invalid_day, .day").remove();
			var days = this.boundingBox.find(".days")[0];
			for (var i = 0, len = this.beforeDays.length - 1; i < len; i++) {
				$('<a class="invalid_day">' + this.beforeDays[i] + "</a>").appendTo(days);
			}
			for (i = 0, len = this.currentDays.length; i < len; i++) {
				$('<a class="day">' + this.currentDays[i] + "</a>").appendTo(days);
			}
			this.boundingBox.children(".month").text(this.currentMonth);
		},
		calendar: function($input){
			var offset = $input.offset();
			var height = $input.height();
			this.cfg.x = offset.left;
			this.cfg.y = offset.top + height + 10;

			var date = new Date();
			this.currentMonth = dateFormat(date.getFullYear(), date.getMonth() + 1, '-');
			this.currentDays = calculateDays(this.currentMonth, "current");
			this.beforeDays = calculateDays(this.currentMonth, "before");
			this.dom = $input;
			this.render();
			return this;
		}
	});

	var datepick = function(selector) {
		$(selector).each(function() {
			var self = $(this);
			new Calender().calendar(self);
		});
	};

	return {
		datepick: datepick
	};
});