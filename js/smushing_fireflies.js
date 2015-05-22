$(document).ready(function () {
	
	$("body").click(function(event) {
		var random = randomInt(0, 20);
		var color = randomColor();
		var block;
		if($(".color" + random).length === 0) {
			block = $("<div class='block color" + random + "'></div>");
			block.appendTo("#container");
		} else {
			block = $(".color" + random);
		}		
		block.css({"top": event.pageY, "left": event.pageX, "background-color": color}).addClass("drop");
		setTimeout(function() {
			block.removeClass("drop");
		}, 2000);
	});
	
	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function randomColor() {
		return '#' + Math.random().toString(16).slice(2, 8);
	};

});