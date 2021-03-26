const chai = require('chai');
const assert = chai.assert;
const Card = require('../src/Card.js');
const Deck = require('../src/deck.js');
const Round = require('../src/Round.js')
const Game = require('../src/Game.js');
const data = require('../src/data.js');
const prototypeQuestions = data.prototypeData;


describe('Game', () => {
    it('Should be a function', () => {
        assert.isFunction(Game);
    });

    it('Should make a new instance of Game', () => {
        const game = new Game();
        assert.isObject(game);
    });

    it('Should not keep track round at first', () => {
        const newGame = new Game();

        assert.equal(newGame.currentRound, null)
    })

    it('Should have be able to start game',() => {
        const array = prototypeQuestions.map(card => card);
        const deck = new Deck(array);
        const round = new Round(deck);
        const newGame = new Game();

        newGame.start();

        assert.isObject(newGame.currentRound);
    });
})