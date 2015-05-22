$(function() {
	
	$(".button").click(function() {
		var choice = $(this).attr("id");
		$(".block.left img").attr("src", "../images/left_fist.png");
		$(".block.right img").attr("src", "../images/right_fist.png");
		$(".block img").addClass("shake");
		$(".block.message").html("3");
		setTimeout(function() {
			$(".block.message").html("2");
		}, 500);
		setTimeout(function() {
			$(".block.message").html("1");
		}, 1000);
		setTimeout(function() {
			var choices = ["rock", "paper", "scissors"];
			var choice2 = choices[Math.floor(Math.random() * 3)];
			$(".block.left img").attr("src", "../images/"+choice2+".png");
			$(".block.right img").attr("src", "../images/" + choice + ".png");
			if (choice === choice2){
				$(".message").html("Tie!");
			} else if ((choice == 'rock' && choice2 == 'scissors') || (choice === 'paper' && choice2 === 'rock') ||
			(choice === 'scissors' && choice2 === 'paper')) {
				$(".message").html("You win!"); 
			} else {
				$(".message").html("You lose.");
			}
			$(".block img").removeClass("shake");
		}, 1500);
	});
});