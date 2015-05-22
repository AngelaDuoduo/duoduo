$(function() {
	var bar = document.getElementsByTagName("span")[0];
	for (var i = 0; i < 101; i++) {
			(function(process){
				setTimeout(function() {
					if (process < 100) {
						bar.style.left = process + "%";
						$(bar).text(process + "%");
					} else {
						 $(bar).parent("div").css("text-align", "center");
						 $(bar).parent("div").text("Done!");
					}					
				}, process * 30);
			}(i));
		}
});