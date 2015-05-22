require.config({
	paths: {
		'jquery': "jquery-1.11.1"
	}
});
require(['jquery', 'pager'], function($, pager){
	pager.pager(".pager", {
		total: 10,
		oneline: 5,
		handler4li: function(page) {
			alert("request data for page " + page + ".");
		}
	});
});