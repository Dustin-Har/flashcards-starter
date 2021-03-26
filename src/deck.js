const card = require('./Card.js');

class Deck {
    constructor(card) {
        this.cards = card;
    }

    countCards = () => (this.cards.length);
}

module.exports = Deck;