class Turn {
    constructor(guess, card) {
        this.guess = guess;
        this.card = card;
    }

    returnGuess() {
        return this.guess
    }

    returnCard() {
        return this.card
    }

    evaluateGuess = () => (this.guess === this.card.correctAnswer) ? 1 : 0

    giveFeedback = () => (this.evaluateGuess()) ? 'Correct!' : 'Incorrect'
}


module.exports = Turn;

