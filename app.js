console.log("app.js connected");

const diceArray = [ 
`<i class="fas fa-dice-one flip-horizontal-top"></i>`, 
`<i class="fas fa-dice-two flip-horizontal-top"></i>`,
`<i class="fas fa-dice-three flip-horizontal-top"></i>`,
`<i class="fas fa-dice-four flip-horizontal-top"></i>`,
`<i class="fas fa-dice-five flip-horizontal-top"></i>`,
`<i class="fas fa-dice-six flip-horizontal-top"></i>`
];

let roundsPlayed = 0;

const player = {
  roundsWon: 0,
  name: "You",
  numberRoll: 1,
  rollArray: [],
  playerResponse: "",
  rollDice() {
    this.numberRoll = Math.floor(Math.random() * 6) + 1;
  },

  createDice(num) {
    for(let i = 0; i < num; i++){
      this.rollDice();
      const $create = $(`<span class='${this.numberRoll}'>${diceArray[this.numberRoll-1]}</span>`);
      $('.player-dice').append($create);
      this.rollArray.push(this.numberRoll);
    }
  },

  addRound(){
    this.roundsWon++;
  },



 /*  retrieveClicks(){
    for(let i = 0; i < this.rollArray.length; i++){
      console.log($('span').get(i));
    }
  }, */
}

const cpu = {
  roundsWon: 0,
  name: "CPU",
  numberRoll: 1,
  rollArray: [],
  cpuAnswer: "",
  rollDice() {
    this.numberRoll = Math.floor(Math.random() * 6) + 1;
  },
  createDice(num) {
    for(let i = 0; i < num; i++){
      this.rollDice();
      const $create = $(`<span class='flip-horizontal-top ${this.numberRoll}'>${diceArray[this.numberRoll-1]}</span>`);
      $('.cpu-dice').append($create);
      this.rollArray.push(this.numberRoll);
    }
  },
  playDice(){
    //this one will automatically sort values from highest to loweset
    let test  = this.rollArray.sort(function(a,b){return b-a}).join("");
    cpuAnswer = test;
    //console.log(cpuAnswer);
    return test;
  },
  addRound(){
    this.roundsWon++;
  },

  clearArray(){
    this.rollArray.splice(0,this.rollArray.length);
  }
}

//compare values to display who wins
function compare(){
/*   console.log(parseInt(cpu.playDice()));
  console.log(parseInt(player.playerResponse.value)); */
  if(parseInt(cpu.playDice()) > parseInt(player.playerResponse.value)){
    cpu.addRound();
    $('.result').append(`<p>CPU wins!</p>`);
  } else if (player.playerResponse > cpu.cpuAnswer){
    player.addRound();
    $('.result').append(`<p>You win!</p>`);
  } else {
    $('.result').append(`Tie! No points awarded`);
  }
  roundsPlayed++;
  $('.scores').text(`Player score: ${player.roundsWon} | CPU score: ${cpu.roundsWon} | Rounds played: ${roundsPlayed}`);

}

function declareWinner(){
  if(cpu.roundsWon>player.roundsWon){
    $('.container').append(`CPU WINS THE GAME!`);
  } else if (player.roundsWon>cpu.roundsWon){
    $('.container').append('YOU WIN THE GAME!');
  }else {
    $('.container').append('TIE! NO ONE WINS');
  }
}

//this will take in user input for the dice
// TODO: work on clearing the field
const submit = document.querySelector(".submit");
submit.addEventListener("click", function(event){
  const p = document.createElement('p');
  player.playerResponse = document.querySelector('.player-answer');
  p.textContent = `You played ${player.playerResponse.value}`;
  const dice = document.querySelector('.player-dice');
  dice.append(p);
});


/* function   clickDice(event) {
  if(event.target.classList.contains("picked") === false){
    //let pickedArray = [];
    $(event.target).addClass("picked");
    console.log(event.target);
    //this.playerArray.push("1");
  }

    //console.log(this.playerArray);
}
 */

 function clickDice(event){
   if(event.target.classList.contains("picked")===false){
     console.log(event.target);
     $(event.target).addClass("picked");
   }
 }
 
 $('i').on('click',clickDice);         
