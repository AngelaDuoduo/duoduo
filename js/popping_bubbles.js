$(function() {
	
	var canvas = document.getElementsByTagName("canvas")[0],
		ctx = canvas.getContext("2d"),
		bubbles = [];
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	function Bubble(){
		this.radius = Math.random() * 50;
		this.x = Math.random() * window.innerWidth;
		this.y = window.innerHeight + 50;
		this.speed = Math.random() * 5;
	}
	
	Bubble.prototype.pop = function() {
		this.y -= this.speed;
	}
	
	function addBubbles(){
		for (var i = 0; i < 20; i++) {
			bubbles.push(new Bubble());
		}
	}
	
	function drawBubbles() {
		for (var i =0, num = bubbles.length; i < num; i++) {
			var b = bubbles[i];
			var grd=ctx.createRadialGradient(b.radius + b.x, b.radius + b.y, b.radius*3,b.radius + b.x, b.radius + b.y, b.radius);
			grd.addColorStop(0,"rgba(91,174,252,0.7)");
			grd.addColorStop(.7,"rgba(207,231,254,0.5)");

			ctx.fillStyle = grd;
			ctx.shadowBlur = 20;
			ctx.shadowColor = "rgb(255,255,255)"
			ctx.beginPath();
			ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
			ctx.fill();
		}
	}
	
	function init() {
		addBubbles();
		setInterval(function() {
			ctx.clearRect(0 ,0, window.innerWidth, innerHeight);
			for (var i = 0, num = bubbles.length; i < num; i++) {
				bubbles[i].pop();
			}
			drawBubbles();
		}, 50);
	}
	
	function getMousePoint(e) {
		var point = {
			x: 0,
			y: 0
		};
		if (typeof window.pageXOffset !== 'undefined'){
			point.x = window.pageXOffset;
			point.y = window.pageYOffset;
		} else if (typeof document.compatMode !== "undefined" && document.compatMode !== "BackCompat"){
			point.x = document.documentElement.scrollLeft;
			point.y = document.docuemntElement.scrollTop;
		} else if ( typeof document.body !== "undefined") {
			point.x = document.body.scrollLeft;
			point.y = document.body.scrollTop;
		}
		point.x += e.clientX;
		point.y += e.clientY;
		return point;
	}
	
	function isIn(bubble, point){
		return Math.abs(point.x - bubble.x) <= 2 * bubble.radius && Math.abs(point.y - bubble.y) <= 2 * bubble.radius;
	}
	
	$("button").click(function() {
		addBubbles();
	});
	
	$("canvas").click(function(e) {
		var point = getMousePoint(e);
		for (i = 0, num = bubbles.length; i < num;i++) {
			if (isIn(bubbles[i], point)) {
				bubbles.splice(i, 1);
				num--;
			}
		}
	});
	
	init();	
});