require.config({
	paths: {
		'jquery': 'jquery-1.11.1',
		'tips': 'tips'
	}
});
require(['jquery', 'tips'], function($, Tips) {
	new Tips({
		titleFunc: function(text) {
			return text;
		},
		width: 150,
		height: 80
	}).render();
});