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
//create an array of the dice images?

const Dice = {
  rollDice() {
    const numberRoll = Math.floor(Math.random() * 5) + 1;
    return numberRoll;
  }
}

class Player {
  constructor(name){
    this.name = name;
    this.roundsWon = 0;
  }
  rollNumDice(num){
    // probably accept a num param for how many dice to create?
    for(let i = 0; i < num; i++){
      rollDice();
    }

  }
  addRound(){
    this.roundsWon++;
  }
}

class CPU extends Player {
  constructor(name){
    this.name = "CPU";
    this.roundsWon = 0;
  }
  playDice(){
    //insert function here to play largest value
  }
}