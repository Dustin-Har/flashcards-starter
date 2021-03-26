const chai = require('chai');
const Card = require('../src/Card.js');
const Deck = require('../src/deck.js')
const assert = chai.assert;

describe ('Deck', () => {
    it('should be a function', () => {
        assert.isFunction(Deck);
    });

    it('should make new instance of Deck', () => {
        const deck = new Deck();

        assert.isObject(deck);
    });

    it('should take a card as an argument', () => {
        const card1 = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'fox', 'capybara'], 'fox');
        const array = [card1];
        const deck = new Deck(array);

        assert.equal(deck.cards, array)
    })

    it('should hold multiple cards', () => {
        const card1 = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'fox', 'capybara'], 'fox');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const array = [card1, card2];
        const deck = new Deck(array);

        assert.equal(deck.cards, array)
    });

    it('should be able to count cards', () => {
        const card1 = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'fox', 'capybara'], 'fox');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const array = [card1, card2];
        const deck = new Deck(array);

        assert.equal(deck.countCards(), 2);
    })
})