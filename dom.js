console.log("dom.js connected");

// need to hide all elements that are not part of the title screen
$('.roll').hide();
$('.submit').hide();
$('.player-p').hide();
$('.how-to-play').hide();
$('.next').hide();
$('.cpu-p').hide();

//these will show up after player presses start
function showAll() {
  $('.roll').show();
  $('.submit').show();
  $('.player-p').show();
}


/* STARTING SCREEN */
//this will initiate gameplay
$('.start').on("click", function (event) {
  $('.start').hide();
  $('.directions').hide();
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
  //$('.player-dice').append(`user plays ${player.playDice()}!`);
})

//after they submit, they can start on the next round
$('.submit').on("click",function(event){
  $('.cpu-p').show();
  $('.cpu-dice').append(cpu.createDice(3));
  $('.cpu-dice').append(`<p>CPU plays ${cpu.playDice()}</p>`);
  $('.next').show();
})

// clicking on next round should clear both player-dice and cpu-dice 
// need to add a check for rounds functionality
$('.next').on("click",function(event){
  $('.cpu-dice').empty();
  $('.player-dice').empty();
})