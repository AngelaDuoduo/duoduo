$(function() {
	for (var i = 0; i < 81; i++) {
		$("#wrapper").append("<div class='block'></div>");
	}
	
	$(".block").hover(function() {
		var color = randomColor();
		$(this).css("background-color", color);
	});
	
	function randomColor(){
		return "#" + Math.random().toString().slice(2, 8);
	}
});