(function() {
	require.config({
		paths: {
			'jquery': 'jquery-1.11.1',
			'tabs': 'tabs'
		}
	});
	require(['jquery', 'tabs'], function($, Tabs) {
		new Tabs({
			dom: document.getElementById("tabs")
		}).render();
	});
}());