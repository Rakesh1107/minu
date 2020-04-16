$(".section").on("click tap", function() {
	var alphabet = $(this).attr("id");
	var audio = new Audio("sounds/" + alphabet + ".mp3");
	audio.play();
});