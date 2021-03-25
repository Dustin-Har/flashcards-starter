const Turn = require("./turn");


class Round {
    constructor(deck) {
        this.deck = deck;
        this.turns = 0;
        this.incorrectGuesses = [];
    }

    returnCurrentCard = () => this.deck.cards[this.turns];

    takeTurn = (guess) => {
        const turn = new Turn(guess, this.deck.cards[this.turns])
        if(turn.evaluateGuess()) {
            this.turns++
            return turn.giveFeedback()
        } else {
            this.turns++
            this.incorrectGuesses.push(turn.card.id);
            return turn.giveFeedback()
        }
    };

    calculatePercentageCorrect = () => (100 - ((this.incorrectGuesses.length / this.deck.cards.length)* 100));

    endRound = () => `You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`
}

module.exports = Round;