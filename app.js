console.log("app.js connected");

const diceArray = [ 
`<i class="fas fa-dice-one"></i>`, 
`<i class="fas fa-dice-two"></i>`,
`<i class="fas fa-dice-three"></i>`,
`<i class="fas fa-dice-four"></i>`,
`<i class="fas fa-dice-five"></i>`,
`<i class="fas fa-dice-six"></i>`
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

/*   clickDice(event) {
    if(event.target.classList.contains("picked") === false){
      //let pickedArray = [];
      $(event.target).addClass("picked");
      console.log(event.target);
      this.playerArray.push("1");
    }

      console.log(this.playerArray);
  }, */

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
      const $create = $(`<span class='${this.numberRoll}'>${diceArray[this.numberRoll-1]}</span>`);
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
  $('.scores').append(`<p>Player score: ${player.roundsWon} | CPU score: ${cpu.roundsWon} | Rounds played: ${roundsPlayed}</p>`);

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


