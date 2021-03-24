const chai = require('chai');
const Card = require('../src/Card');
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
        const deck = new Deck([card1]);

        assert.equal(deck.card, [{
            id: 1,
            question: 'What is Dustin\'s favorite animal',
            answers: ['sea otter', 'fox', 'capybara'],
            correctAnswer: 'fox',
        }])
    })

    it('should hold multiple cards', () => {
        const card1 = new Card();
        const card2 = new Card();
        const deck = new Deck([card1, card2]);

        assert.equal(deck.card, [{
            id: 1,
            question: 'What is Dustin\'s favorite animal',
            answers: ['sea otter', 'fox', 'capybara'],
            correctAnswer: 'fox',
        },{
            id: 2,
            question: "What is a comma-separated list of related values?",
            answers: ["array", "object", "function"],
            correctAnswer: "array"
        }])
    })
})