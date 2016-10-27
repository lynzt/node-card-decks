'use strict';
const chai = require('chai');
const expect = chai.expect;
const Deck = require('./../../lib/deck');

describe('Deck class tests', function() {
  describe('test countCards()', function() {
    it('should return standard deck of 52', function() {
      let oneDeck = new Deck();
      expect(oneDeck.countCards('allCards')).to.equal(52);
    });
    it('should return deck of 52 + 2 joker cards', function() {
      let oneDeck = new Deck({redJoker: true, blackJoker: true});
      expect(oneDeck.countCards('cardsInDeck')).to.equal(54);
    });
    // TODO: make this more specific? remove red jacks? remove 3 of hearts?
    it('should return deck with [2, jack and 6] removed from deck', function() {
      let oneDeck = new Deck({cardsNotUsed: ['2', 'jack', '6']});
      expect(oneDeck.countCards('cardsInDeck')).to.equal(40);
    });
  });
  describe('test getKeys()', function() {
    it('return hash keys', function() {
      let oneDeck = new Deck({redJoker: true, blackJoker: true});
      let keys = oneDeck.getKeys('cardsInDeck');
      expect(keys).to.be.instanceof(Array);
    });
  });
  describe('test shuffle()', function() {
    it('return current card suit', function() {
      let oneDeck = new Deck({redJoker: true, blackJoker: true});
      oneDeck.shuffle('cardsInDeck');
      let cardsInDeckKeys = oneDeck.getKeys('cardsInDeck');
      let allCardsKeys = oneDeck.getKeys('allCards');
      expect(cardsInDeckKeys).to.not.deep.equal(allCardsKeys);
    });
  });
});
