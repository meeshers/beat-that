console.log("app.js connected");

const diceArray = [
  `<i class="fas fa-dice-one flip-horizontal-top"></i>`,
  `<i class="fas fa-dice-two flip-2-ver-right-2"></i>`,
  `<i class="fas fa-dice-three flip-horizontal-top"></i>`,
  `<i class="fas fa-dice-four flip-2-ver-right-2"></i>`,
  `<i class="fas fa-dice-five flip-horizontal-top"></i>`,
  `<i class="fas fa-dice-six flip-2-ver-right-2"></i>`
];

let roundsPlayed = 0;

const player = {
  roundsWon: 0,
  name: "You",
  numberRoll: 1,
  rollArray: [],
  playerResponse: "",
  playerArray: [],
  rollDice() {
    this.numberRoll = Math.floor(Math.random() * 6) + 1;
  },

  createDice(num) {
    for (let i = 0; i < num; i++) {
      this.rollDice();
      const $create = $(`<span class='${this.numberRoll}'>${diceArray[this.numberRoll - 1]}</span>`);
      $('.player-dice').append($create);
      this.rollArray.push(this.numberRoll);
    }
  },

  addRound() {
    this.roundsWon++;
  },

  clickDice(event) {
    const e = event;
    if (event.target.classList.contains("picked") === false) {
      //console.log(event.target);
      $(event.target).addClass("picked");
      // playerArray=[];
      // handle the clicked object input
      if (event.target.classList.contains("fa-dice-one") === true) {
        player.playerArray.push(1);
      } else if(event.target.classList.contains("fa-dice-two")===true){
        player.playerArray.push(2);
      } else if(event.target.classList.contains("fa-dice-three")===true){
        player.playerArray.push(3);
      } else if(event.target.classList.contains("fa-dice-four")===true){
        player.playerArray.push(4);
      } else if(event.target.classList.contains("fa-dice-five")===true){
        player.playerArray.push(5);
      } else if(event.target.classList.contains("fa-dice-six")===true){
        player.playerArray.push(6);
      }
    console.log(player.playerArray);
    //return player.playerArray;
      if(player.playerArray.length === 3){
          $('.player-dice').append(`<p class="aaa">${player.playerArray[0]}${player.playerArray[1]}${player.playerArray[2]}</p>`);
      }
    } else if(event.target.classList.contains("picked") === true){
      player.clearDice(e);
    }

  },

  clearDice(event) {
    console.log(`This is the event: `, event);
    if(event.target.classList.contains("picked") === true) {
      //console.log(event.target);
      $(event.target).removeClass("picked");
      //console.log("lkajdf");
      if (event.target.classList.contains("fa-dice-one") === true) {
        player.playerArray = player.playerArray.filter(num => num !== 1);
      } else if(event.target.classList.contains("fa-dice-two")===true){
        player.playerArray =player.playerArray.filter(num => num !== 2);
      } else if(event.target.classList.contains("fa-dice-three")===true){
        player.playerArray =player.playerArray.filter(num => num !== 3);
      } else if(event.target.classList.contains("fa-dice-four")===true){
        player.playerArray =player.playerArray.filter(num => num!== 4);
      } else if(event.target.classList.contains("fa-dice-five")===true){
        player.playerArray =player.playerArray.filter(num => num!== 5);
      } else if(event.target.classList.contains("fa-dice-six")===true){
        player.playerArray =player.playerArray.filter(num => num !== 6);
      }
      console.log(player.playerArray);
      $('.aaa').empty();
  }
},

    clearArray() {
    this.playerArray.splice(0, this.rollArray.length);
  }
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
    for (let i = 0; i < num; i++) {
      this.rollDice();
      const $create = $(`<span class='flip-horizontal-top ${this.numberRoll}'>${diceArray[this.numberRoll - 1]}</span>`);
      $('.cpu-dice').append($create);
      this.rollArray.push(this.numberRoll);
    }
  },
  playDice() {
    //this one will automatically sort values from highest to loweset
    let test = this.rollArray.sort(function (a, b) { return b - a }).join("");
    cpuAnswer = test;
    //console.log(cpuAnswer);
    return test;
  },
  addRound() {
    this.roundsWon++;
  },

  clearArray() {
    this.rollArray.splice(0, this.rollArray.length);
  }
}

//compare values to display who wins
function compare() {
  /*   console.log(parseInt(cpu.playDice()));
    console.log(parseInt(player.playerResponse.value)); */


  if (parseInt(cpu.playDice()) > parseInt(player.playerArray.join(""))) {
    cpu.addRound();
    $('.result').append(`<p>CPU wins!</p>`);
  } else if (player.playerResponse > cpu.cpuAnswer) {
    player.addRound();
    $('.result').append(`<p>You win!</p>`);
  } else {
    $('.result').append(`Tie! No points awarded`);
  }
  roundsPlayed++;
  $('.scores').text(`Player score: ${player.roundsWon} | CPU score: ${cpu.roundsWon} | Rounds played: ${roundsPlayed}`);

}

function declareWinner() {
  if (cpu.roundsWon > player.roundsWon) {
    $('.container').append(`CPU WINS THE GAME!`);
  } else if (player.roundsWon > cpu.roundsWon) {
    $('.container').append('YOU WIN THE GAME!');
  } else {
    $('.container').append('TIE! NO ONE WINS');
  }
}

//this will take in user input for the dice
// TODO: work on clearing the field
const submit = document.querySelector(".submit");
submit.addEventListener("click", function (event) {
  const p = document.createElement('p');
  //player.playerResponse = document.querySelector('.player-answer');
  p.textContent = `You played ${player.playerArray.join("")}`;
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

/*  function clickDice(event) {
   if(event.target.classList.contains("picked")===false){
     console.log(event.target);
     $(event.target).addClass("picked");
   }
 } */

$('.player-dice').on('click', 'span', player.clickDice);

