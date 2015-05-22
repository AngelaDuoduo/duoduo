$(function(){
	
	setInterval(update, 1000);
	
	function update() {
		var date = new Date();
		var hour = date.getHours(),
		min = date.getMinutes(),
		seconds = date.getSeconds(),
		colorStr,
		timeStr;
		
		timeStr = formatTime(hour) + ":" + formatTime(min) + ":" + formatTime(seconds);
		colorStr = formatColor(generateColor("hour", hour)) + formatColor(generateColor("min", min)) + formatColor(generateColor("seconds", seconds));
		
		$("#time").text(timeStr);
		$("#color").text(colorStr.toUpperCase());
		$("body").css("background-color", "#" + colorStr);
	}
	
	function formatTime(time) {
		return time < 10? ("0" + time) : (+time); 
	}
	function generateColor(type, time) {
		if(type === 'hour') {
			return Math.round(time / 24 * 255).toString(16);			
		} else {
			return Math.round(time / 60 * 255).toString(16);
		}
	}
	function formatColor(result) {
		return result.length < 2 ?  ("0" + result) : result; 
	}
	
});