$(function() {
	var bodyWidth = parseInt($("body").css("width"));
	var boxWidth = Math.round(bodyWidth / 20);
	var boxHeight = boxWidth;
	$(".box").css({"width":boxWidth+"px", "height":boxHeight+"px"});
	
	var animations = ['dangle', 'crawl', 'jump', 'stretch', 'flip'];
	$(".box").click(function() {
		var animation = animations[Math.floor(Math.random() * 5)];
		var box = $(this);
		box.addClass(animation);
		setTimeout(function() {
			box.removeClass(animation);
		}, 3000);
	});
});