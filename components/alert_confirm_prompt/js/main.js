require.config({
	paths:{
		'jquery': 'jquery-1.11.1',
		"jqueryUI": "http://code.jquery.com/ui/1.10.4/jquery-ui"
	}
});
require(['jquery', 'window'], function($, w) {
	$(".alert-test").click(function(){
		new w.Window().alert({
			content: "Welcome!",
			width: 300,
			height: 150,
			y: 50,
			hasCloseBtn: true,
			handler4AlertBtn: function() {
				alert("ok!");
			}
		});
	});
	
	$(".confirm-test").click(function(){
		new w.Window().confirm({
			title: "Confirm",
			content: "Are you sure to leave the page?",
			width: 300,
			height: 150,
			y: 50,
			hasCloseBtn: true,
			handler4ConfirmBtn: function() {
				alert("true");
			},
			handler4CancelBtn: function() {
				alert("false");
			}
		});
	});
	
	$(".prompt-test").click(function(){
		new w.Window().prompt({
			title: "Prompt",
			content: "please input your name.",
			width: 300,
			height: 150,
			y: 50,
			hasCloseBtn: true,
			handler4SubmitBtn: function(data) {
				alert(data);
			}
		});
	});
});