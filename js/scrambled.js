$(function() {
	$("#start-button").click(function() {
		$("#start-info").fadeOut("slow");
	});
	
	var set = ["duoduo", "liangliang", "ruanruan", "shanshan"];
	
	var answer = set[randomInt(0, 3)],
		score = 0;
	showWords(answer);
	$("#word").text(answer);
	$("button[type='submit']").click(function(e) {
		e.preventDefault();
		var value = $("input").val();
		if (answer === value) {
			score += 1;
		} else {
			score -= 1;
		}
		$("#score").text("Score: " + score);
		answer = set[randomInt(0, 3)];
		showWords(answer);
	});
	
	function showWords(word) {
		var letters = word.split("");
		letters.sort(function(a, b) {
			return Math.random() > 0.5 ? 1:-1;
		});
		$("#word").text(letters.join(""));
	}
	function randomInt(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
});