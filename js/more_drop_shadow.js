$(function() {
	var imgShadow = 0,
		textShadow = 0,
		blur = 0;
	$("img").click(function() {
		imgShadow = imgShadow + 5;
		var boxShadow = $(this).css("box-shadow");
		if(boxShadow === "none") {
			$(this).css("box-shadow", "0 0 " + imgShadow + "px rgba(0, 0, 0, 0.2)");
		} else {
			$(this).css("box-shadow", boxShadow + ",0 0 " + imgShadow + "px rgba(0, 0, 0, 0.2)");
		}
		
	});
	
	$("#words").click(function() {
		textShadow = textShadow + 2;
		blur++;
		$("#words").css("text-shadow", textShadow + "px " + textShadow + "px " + blur + "px rgba(0, 0, 0, 0.7)");
	});
});