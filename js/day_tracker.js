$(function() {
	var week = {
		"0": "Sunday",
		"1": "Monday",
		"2": "Tuesday",
		"3": "Wednesday",
		"4": "Thursday",
		"5": "Friday",
		"6": "Saturday"
	};
	var day = new Date(),
		today = day.getDay();
	$("#"+today).addClass("today");
	$("#day-board").text("Oh! Today is " + week[today] + ".");
});