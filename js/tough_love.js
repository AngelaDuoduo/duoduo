$(function() {
	$("button").click(function(event) {
		event.preventDefault();
		var text = $("input").val().replace(/^\s+|\s+$/g, "");
		if(text !== ''){
			$("p").text("That's ok!");
			$("p#change").text("You "+text+"?");			
		}
	});
});