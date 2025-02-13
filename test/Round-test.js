const chai = require('chai');
const assert = chai.assert;

const Round = require('../src/Round.js');
const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const Turn = require('../src/turn.js');


describe('Round', () => {
    it('Should be a function', () => {
        assert.isFunction(Deck);
    });

    it('Should make a new instance of Round', () => {
        const round = new Round();

        assert.isObject(round);
    });

    it('Should take instance of deck as an argument', () => {
        const card1 = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'fox', 'capybara'], 'fox');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const array = [card1, card2];
        const deck = new Deck(array);
        const round = new Round(deck);

        assert.equal(round.deck, deck);
    });

    it('Should return current card', () => {
        const card1 = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'fox', 'capybara'], 'fox');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const array = [card1, card2];
        const deck = new Deck(array);
        const round = new Round(deck);

        round.returnCurrentCard();

        assert.equal(round.returnCurrentCard(), card1);
    });

    it('Should keep track of how many turns have happend', () => {
        const card1 = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'fox', 'capybara'], 'fox');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const array = [card1, card2];
        const deck = new Deck(array);
        const round = new Round(deck);

        assert.equal(round.turns, 0);
    });

    it('Should be able to make a guess', () => {
        const card1 = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'fox', 'capybara'], 'fox');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const array = [card1, card2];
        const deck = new Deck(array);
        const round = new Round(deck);
        const round2 = new Round(deck);

        round.returnCurrentCard();
        round2.returnCurrentCard();

        
        assert.equal(round.takeTurn('fox'), 'Correct!');
        assert.equal(round2.takeTurn('sea otter'), 'Incorrect');
    });

    it('should be able to move to next card after turn', () => {
        const card1 = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'fox', 'capybara'], 'fox');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const array = [card1, card2];
        const deck = new Deck(array);
        const round = new Round(deck);
        

        round.returnCurrentCard();

        round.takeTurn('fox');

        assert.equal(round.returnCurrentCard(), card2);
    })

    it('Should keep track of how many questions were answered wrong', () => {
        const card1 = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'fox', 'capybara'], 'fox');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const array = [card1, card2];
        const deck = new Deck(array);
        const round = new Round(deck);

        round.returnCurrentCard();
        round.takeTurn('sea otter');
        
        assert.equal(round.incorrectGuesses[0], 1);
    });

    it('Should be able to calculate percentage of correct guesses', () => {
        const card1 = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'fox', 'capybara'], 'fox');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const array = [card1, card2];
        const deck = new Deck(array);
        const round = new Round(deck);

        round.returnCurrentCard();
        round.takeTurn('fox');
        round.returnCurrentCard();
        round.takeTurn('object');

        round.incorrectGuesses = [2];

        round.calculatePercentageCorrect();

        assert.equal(round.calculatePercentageCorrect(), 50);
    });

    it('Should be able to end round', () => {
        const card1 = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'fox', 'capybara'], 'fox');
        const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const array = [card1, card2];
        const deck = new Deck(array);
        const round = new Round(deck);

        round.returnCurrentCard();
        round.takeTurn('fox');
        round.returnCurrentCard();
        round.takeTurn('object');

        round.incorrectGuesses = [2];

        round.calculatePercentageCorrect();

        round.endRound();

        assert.equal(round.endRound(), 'You answered 50% of the questions correctly!');
    });
});