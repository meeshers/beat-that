console.log("dom.js connected");

// need to hide all elements that are not part of the title screen
$('.roll').hide();
$('.submit').hide();
$('.player-p').hide();
$('.how-to-play').hide();
$('.next').hide();
$('.cpu-p').hide();
$('.player-answer').hide();
$('.scores').hide();
$('.cpu-dice').hide();
//$('.aaa').hide();

//these will show up after player presses start
function showAll() {
  $('.roll').show();
  $('.player-p').show();
  $('.cpu-dice').show();
  $('.cpu-p').show();
}


/* STARTING SCREEN */
//this will initiate gameplay
$('.start').on("click", function (event) {
  $('.buttons').hide();
  $('i').hide();
  showAll();
});

//this will have the directions appear at the bottom
$('.directions').on("click", function (event) {
  $('.how-to-play').show();
});

/* PLAYER SCREEN */
//this will create the number of dices
$('.roll').on("click", function (event) {
  $('.player-dice').append(player.createDice(3));
  $('.player-answer').show();
  $('.roll').hide();
  $('.submit').show();
  //$('.aaa').show();
})

//after they submit, they can start on the next round
$('.submit').on("click", function (event) {
  if(roundsPlayed<4){
    $('.cpu-dice').empty();
    $('.cpu-dice').append(cpu.createDice(3));
    $('.cpu-dice').append(`<p>CPU plays ${cpu.playDice()}</p>`);
    $('.next').show();
    $('.submit').hide();
    $('.player-answer').hide();
    compare();
    $('.result').show();
    $('.scores').show()
  } else {
    $('.result').append("Afhadgasdf");
  }
  console.log(`rounds played ${roundsPlayed}`);

})

// clicking on next round should clear both player-dice and cpu-dice 
// need to add a check for rounds functionality
$('.next').on("click", function (event) {
  if (roundsPlayed < 4) {
    $('.cpu-dice').empty();
    cpu.clearArray();
    $('.player-dice').empty();
    $('.roll').show();
    $('submit').show();
    $('.next').hide();
    $('.result').empty();
    $('.result').hide();
  } else {
    $('.roll').hide();
    $('.submit').hide();
    $('.player-p').hide();
    $('.how-to-play').hide();
    $('.next').hide();
    $('.cpu-p').hide();
    $('.player-answer').hide();
    $('.scores').hide();
    $('.result').append("alsdkjlakj");
  }

})

