$(function() {
	
	$(".category").click(function() {
		var status = $(".blog-category").css("display");
		if (status === 'none') {
			$(".blog-category").css("display", "block");
		} else {
			$(".blog-category").css("display", "none");
		}		
	});
	
	
	
});