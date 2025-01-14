// složka: switch
// soubor: switch_bets.js

const username = "pete44451";
const bet = "45";
let probability;
let betMessage;
let potentialWinAmount;
const betAmount = 1000;

switch (bet) {
  case "1":
    probability = 1.05;
    betMessage = "výhra domácí";
    break;
  case "2":
    probability = 4.5;
    betMessage = "výhra hosté";
    break;
  case "0":
    probability = 7.66;
    betMessage = "remíza";
    break;
  case "10":
    probability = 1.01;
    betMessage = "Výhra domácích nebo remíza";
    break;
  case "02":
    probability = 1.57;
    betMessage = "Výhra hostů nebo remíza";
    break;
  default:
    console.log("CHYBA: Vybraná sázka neexistuje");
    probability = 0;
    betMessage = "CHYBA";
}

potentialWinAmount = betAmount * probability;
console.log(
  `Uživatel: ${username} vsadil částku: ${betAmount} Kč na: '${betMessage}' s kurzem: ${probability} a potenciální výhrou: ${potentialWinAmount} Kč`
);
