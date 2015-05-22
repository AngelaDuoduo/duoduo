$(function() {
	$("button").click(function() {
		$("#total").text("Shake, Shake, Shake...").addClass("shake");
		setTimeout(function() {
			var leftDots = randomInt(1, 6);
			var rightDots = randomInt(1, 6);
			var total = leftDots + rightDots;
			$("#total").removeClass("shake").text(total);
			drawDots("left", leftDots);
			drawDots("right", rightDots);
		},500);
	});
	
	function drawDots(oneDice, number) {
		var dice = $("." + oneDice);
		var dots = dice.find(".dot");
		switch(number) {
			case 1:
				dots.css("visibility", "hidden");
				dice.find(".d5").css("visibility", "visible");
				break;
			case 2:
				dots.css("visibility", "hidden");
				dice.find(".d4, .d6").css("visibility", "visible");
				break;
			case 3:
				dots.css("visibility", "hidden");
				dice.find(".d3, .d5, .d7").css("visibility", "visible");
				break;
			case 4:
				dots.css("visibility", "hidden");
				dice.find(".d1, .d3, .d7, .d9").css("visibility", "visible");
				break;
			case 5:
				dots.css("visibility", "hidden");
				dice.find(".d1, .d3, .d5, .d7, .d9").css("visibility", "visible");
				break;
			case 6:
				dots.css("visibility", "visible");
				dice.find(".d2, .d5, .d8").css("visibility", "hidden");
				break;
			default:
				dots.css("visibility", "hidden");
		};
	}
	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
});