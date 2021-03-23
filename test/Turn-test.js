const chai = require('chai');
const assert = chai.assert;
const Turn = require('../src/turn.js');
const Card = require('../src/Card.js');

describe('Turn', () => {
    it('should be a function', () => {
        assert.isFunction(Turn);
    });

    it('should make new instance of Turn', () => {
        const turn = new Turn();
        assert.isObject(turn);
    });

    it('should take users guess as an argument', () => {
        const turn = new Turn('dog');

        assert.equal(turn.guess, 'dog');
    });

    it('should take current card as an argument', () => {
        const card = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'dog', 'capybara'], 'dog');
        const turn = new Turn('dog', card);
        const turn2 = new Turn('sea otter');

        assert.equal(turn.card, card);
        assert.equal(turn2.card, undefined);
    });

    it('should return guess', () => {
        const card = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'dog', 'capybara'], 'dog');
        const turn = new Turn('dog', card);

        turn.returnGuess();

        assert.equal(turn.returnGuess(), 'dog');
    });

    it('should return the card being use', () => {
        const card = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'dog', 'capybara'], 'dog');
        const turn = new Turn('sea otter', card);

        turn.returnCard();

        assert.equal(turn.returnCard(), card);
    });

    it('should return if anser is correct', () => {
        const card = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'dog', 'capybara'], 'dog');
        const turn = new Turn('dog', card);
        const turn2 = new Turn('sea otter', card);

        turn.evaluateGuess();
        turn2.evaluateGuess();

        assert.equal(turn.evaluateGuess(), true);
        assert.equal(turn2.evaluateGuess(), false);
    });

    it('should give feedback on answer picked', () => {
        const card = new Card(1, 'What is Dustin\'s favorite animal', ['sea otter', 'dog', 'capybara'], 'dog');
        const turn = new Turn('dog', card);
        const turn2 = new Turn('sea otter', card);

        turn.giveFeedback();
        turn2.giveFeedback();

        assert.equal(turn.giveFeedback(), 'Correct!');
        assert.equal(turn2.giveFeedback(), 'Incorrect');
    });
});
