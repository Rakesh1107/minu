// Mouse click & Mobile tap
$(".section").on("click tap", function() {
	var alphabet = $(this).attr("id");
	var clickAudio = new Audio("sounds/" + alphabet + ".mp3");
	playAudio(clickAudio);
});

// Keyboard Press
document.addEventListener("keydown", function(e) {
  var keyPressed = e.key;
  var keyAudio = new Audio("sounds/" + keyPressed + ".mp3");
  playAudio(keyAudio);
  animate(keyPressed);
});

//Play audio 
function playAudio(audio) {
	audio.play();
}

// function animate(button) {
// 	$("#" + button).addClass("animate");
//   setTimeout(function() {
//   	$("#" + button).removeClass("animate")
//   }, 200);
// }
