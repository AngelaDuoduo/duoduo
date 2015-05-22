$(document).ready(function () {
	makeShapes();

	$('.block').draggable({
		containment: 'window',
		stack: '.block',
		snap: true,
		snapMode: 'outer',
		snapTolerance: 13,
	});

	$('#choices').on('mousedown', function () {
		$('#info').fadeOut('slow');
	})

	function makeShapes() {
		var shapes = ['square', 'rectup', 'rectup long', 
					  'rectdown', 'triup', 'trileft', 'triright',
					  'paraleft', 'pararight', 'circle', 
					  'semitop', 'quartleft', 'quartright'];

		for (var i = 0; i < 13; i++) {
			var shape = shapes[i];
			makeShape(shape);
		}
	};

	function makeShape(shape) {
		for (var i = 0; i < 8; i++){
			$('#choices').append('<div class="block ' + shape + '"></div>');
		}		
	};
});