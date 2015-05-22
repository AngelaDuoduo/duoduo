$(function() {
	var animation = ['shake', 'hop', 'spin', 'grow', 'hooray'];
	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	$(".pic").click(function() {
		var target = this;
		var choice = animation[randomInt(0, 4)];
		$(target).find("img").addClass(choice);
		setTimeout(function() {
			$(target).find("img").removeClass(choice);
		}, 2000);
	});
});