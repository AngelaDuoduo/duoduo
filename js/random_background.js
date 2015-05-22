$(function() {
	$("#button").click(function() {
		var color = randomColor();
		$("body").css("background-color", color);
	});
	
	function randomColor() {
		return "#" + Math.random().toString().slice(2, 8);
	}
});