$(function() {
	var color = "white";
	$(".color").click(function() {
		color = $(this).attr("id");
	});
	
	$(".col").click(function() {
		$(this).css("background-color", color);
	});
});