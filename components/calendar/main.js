require.config({
	paths:{
		'jquery': 'jquery-1.11.1'
	}
});
require(['jquery', 'calendar'], function($, cal){
	cal.datepick(".datepick");
});
