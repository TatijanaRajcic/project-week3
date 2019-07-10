var myGame = new Game();
var solvedPuzzles = 0;

// NUMBER OF PUZZLE PIECES

$("#number-pieces").on("click", function() {
  var difficulty = $(this).val();

  if (difficulty > 66) {
    difficulty = 6;
  } else if (difficulty > 33 ) {
    difficulty = 3;
  } else {
    difficulty = 2;
  }

  myGame.restart(difficulty);
})

// CHOOSE ANOTHER PUZZLE

$("#other-game").on("click", function() {
  myGame.restart(3);
})

// THE CLUE

$("#clue").on("click", function(){
  $("#puzzle").toggleClass("invisible");
  $("#clue-img").toggleClass("invisible");
  $("#message-instructions-one").toggleClass("hidden");
  setTimeout(function(){
    $("#puzzle").toggleClass("invisible");
    $("#clue-img").toggleClass("invisible");
  },1000)
  $("#message-instructions-one").toggleClass("hidden");
})

// THE PUZZLE

$( "#puzzle" ).on( "click", function(e) {

  myGame.clicks +=1;

  // get the position where we clicked
  var clickX = e.pageX;
  var clickY = e.pageY;
  clickX -= $(this).offset().left;
  clickY -= $(this).offset().top;

  if (myGame.checkClickPuzzle(clickX,clickY) === true) {
    $("#message-instructions-one").toggleClass("hidden");
    $("#message-instructions-two").toggleClass("hidden");
  }

  if (myGame.checkClickCanvas(clickX,clickY) === true){
    $("#message-instructions-one").toggleClass("hidden");
    $("#message-instructions-two").toggleClass("hidden");
  }
  
  if (myGame.checkIfFinished() === true){
    $("#games").html(solvedPuzzles);
  };

});




