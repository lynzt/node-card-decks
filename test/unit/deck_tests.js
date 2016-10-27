'use strict';
const chai = require('chai');
const expect = chai.expect;
const Deck = require('./../../lib/deck');

describe('Deck class tests', function() {
  describe('test countCards() - testing deck constructor', function() {
    it('should return standard deck of 52', function() {
      let oneDeck = new Deck();
      expect(oneDeck.countCards('allCards')).to.equal(52);
    });
    it('should return deck of 52 + 2 joker cards', function() {
      let oneDeck = new Deck({redJoker: true, blackJoker: true});
      expect(oneDeck.countCards('deck')).to.equal(54);
    });
    // TODO: make this more specific? remove red jacks? remove 3 of hearts?
    it('should return deck with [2, jack, 6] removed from deck', function() {
      let oneDeck = new Deck({cardsNotUsed: ['2', 'jack', '6']});
      expect(oneDeck.countCards('deck')).to.equal(40);
    });
    it('should return 2 decks which is 104 cards', function() {
      let oneDeck = new Deck({nbrOfDecks: 2});
      expect(oneDeck.countCards('deck')).to.equal(104);
    });
    it('should return 2 decks with jokers which is 108 cards', function() {
      let oneDeck = new Deck({nbrOfDecks: 2, redJoker: true, blackJoker: true});
      expect(oneDeck.countCards('deck')).to.equal(108);
    });
  });
  describe('test getKeys()', function() {
    it('return hash keys', function() {
      let oneDeck = new Deck({redJoker: true, blackJoker: true});
      let keys = oneDeck.getKeys('deck');
      expect(keys).to.be.instanceof(Array);
    });
  });
  describe('test shuffle()', function() {
    it('return current card suit', function() {
      let oneDeck = new Deck({redJoker: true, blackJoker: true});
      oneDeck.shuffle('deck');
      let deckKeys = oneDeck.getKeys('deck');
      let allCardsKeys = oneDeck.getKeys('allCards');
      expect(deckKeys).to.not.deep.equal(allCardsKeys);
    });
  });
  describe('test drawCards()', function() {
    it('should draw card from back(top)', function() {
      let oneDeck = new Deck({redJoker: true, blackJoker: true});
      expect(oneDeck.countCards('deck')).to.equal(54);
      let cards = oneDeck.drawCards(1);
      expect(cards[0]).to.equal('blackJoker_d1');
      expect(oneDeck.countCards('deck')).to.equal(53);

    });
    it('should draw card from back(top)', function() {
      let oneDeck = new Deck({redJoker: true, blackJoker: true});
      expect(oneDeck.countCards('deck')).to.equal(54);
      let cards = oneDeck.drawCards(5);
      expect(cards[4]).to.equal('clubs_jack_d1');
      expect(oneDeck.countCards('deck')).to.equal(49);
    });
  });
});
