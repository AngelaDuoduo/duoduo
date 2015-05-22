require.config({
	paths: {
		'jquery': 'jquery-1.11.1'
	}
});
require(['jquery', 'city'], function($, city){
	city.citypicker(".citypicker");
});