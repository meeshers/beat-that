console.log("app.js connected");
/* <!--  USER STORIES  -->
- There will be a "start" button along with "roll" and "submit"
- Game is played with minimum of 2 dice
- User/cpu will roll the set of die
- The goal of the game is to have the biggest number with the dice roll
    for example: user rolls a 2/3: They can make either 32 or 23. cpu rolls 4/6: 64, cpu wins
- user will have control over the number they create
- There will be 3 rounds, winner is whoever won the most rounds */

//Start button will initiate the game 

// roll button will roll the player's dice and allow the player to try to create the biggest number with their dice

// submit button will submit the player's answer. it will also trigger the cpu's dice roll and compare their submission to the cpu's highest value

// after the comparison, score will update and display winner of the match. There will be a "next round" or "final scores" depending on how many rounds were played

// after clicking next round/final score, the cpu and player dice will clear to either start the next game or display the results

// after all rounds played, it will display the overall winner

//create the dice - dice needs to have the ability to roll random number from 1 to 6
//create an array of the dice images to call into rollDice

const diceArray = [ 
`<i class="fas fa-dice-one"></i>`, 
`<i class="fas fa-dice-two"></i>`,
`<i class="fas fa-dice-three"></i>`,
`<i class="fas fa-dice-four"></i>`,
`<i class="fas fa-dice-five"></i>`,
`<i class="fas fa-dice-six"></i>`
];

let roundsPlayed = 0;


/* const dice = {
  numberRoll: 1,
  rollDice() {
    this.numberRoll = Math.floor(Math.random() * 6) + 1;
  },
  createDice(num) {
    for(let i = 0; i < num; i++){
      this.rollDice();
      const $create = $(`<div class='${this.numberRoll}'>${diceArray[this.numberRoll-1]}</div>`);
      //$('.player-dice').append($create);
    }
  }
} */

const player = {
  roundsWon: 0,
  name: "You",
  numberRoll: 1,
  rollArray: [],
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
  }
}

const cpu = {
  roundsWon: 0,
  name: "CPU",
  numberRoll: 1,
  rollArray: [],
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
    cpuAnswer = this.rollArray.sort(function(a,b){return b-a}).join("");
    return cpuAnswer;
  },
  addRound(){
    this.roundsWon++;
  }
}
