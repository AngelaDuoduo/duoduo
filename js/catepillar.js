$(function() {
	var circles = [];
	
	function randomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function randomColor() {
		return "#" + Math.random().toString(16).slice(2, 8);
	}
	
	function Circle() {
		this.x = 0;
		this.y = 0;
		this.radius = randomInt(0, 20);
		this.color = randomColor();
	}
	
	function getMousePos(event){
		point = {
			x: 0,
			y: 0
		}
		if(window.pageXOffset && window.pageYOffset) {
			point.x = window.pageXOffset;
			point.y = window.pageYOffset; 
		} else if(document.compatMode && document.compatMode == 'BackCompat') {
			point.x = document.documentElement.scrollLeft;
			point.y = document.documentElement.scrollTop;
		} else if(document.body) {
			point.x = document.body.scrollLeft;
			point.y = document.body.scrollTop;
		}
		point.x += event.clientX;
		point.y += event.clientY;
		
		return point;
	}
	
	for (var i = 0; i < 20; i++){
		var circle = new Circle();
		circles.push(circle);
		$("<div class='circle' id='circle" + i + "'></div>")
		.css({"top":circle.y + "px", "left":circle.x + "px", "width":
			circle.radius * 2 + "px", "height": circle.radius * 2 + "px", "background-color":circle.color})
		.appendTo("body");
	}
	
	var mPos = {x: 0, y:0};
	
	$("body").mousemove(function(event) {
		mPos = getMousePos(event);
	});		
	
	/*setInterval(function(){
			circles.forEach(function(element, index) {
				var speed = randomInt(8, 50);
				element.x += (mPos.x - element.x) / speed;
				element.y += (mPos.y - element.y) / speed;
				$("#circle"+index).css({"top":element.y, 
									"left": element.x});
			});
	}, 30);*/
	
	circles.forEach(function(element, index) {
		var speed = randomInt(8, 50);
		setInterval(function() {
			element.x += (mPos.x - element.x) / speed;
			element.y += (mPos.y - element.y) / speed;
			$("#circle"+index).css({"top":element.y, 
									"left": element.x});
		}, 30);
	});
	
	
});