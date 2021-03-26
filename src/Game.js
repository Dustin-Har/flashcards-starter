const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('./Round.js');
const Deck = require('./Deck.js');
const Card = require('./Card.js');
const Turn = require('./turn.js');


class Game {
  constructor() {
    this.currentRound = null;
  }

  start = () => {
    const cardPile = prototypeQuestions.map(card => card);
    const deck = new Deck(cardPile);
    const newRound = new Round(deck);
    this.currentRound = newRound;
    this.printMessage(deck, newRound)

  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
    this.printQuestion(round);
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;