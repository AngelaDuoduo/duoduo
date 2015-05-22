$(function() {
	$(".dropdown").mouseenter(function() {
		$(this).find(".dropdown-menu").show();
	});
	$(".dropdown").mouseleave(function() {
		$(this).find(".dropdown-menu").hide();
	});
	
	$(".thumbnail>a img").scrollLoading();
});