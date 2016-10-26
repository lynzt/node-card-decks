'use strict';
const chai = require('chai');
const expect = chai.expect;
const HandAndFootCard = require('./../../../lib/classes/hand_and_foot_card');

describe('HandAndFootCard class tests', function() {
  describe('Should test isWild()', function() {
    it('return card is wild', function() {
      const handAndFootCard = new HandAndFootCard('hearts', 'joker');
      expect(handAndFootCard.isWild()).to.be.true;
    });
    it('return card is wild', function() {
      const handAndFootCard = new HandAndFootCard('hearts', '2');
      expect(handAndFootCard.isWild()).to.be.true;
    });
    it('return card is not wild', function() {
      const handAndFootCard = new HandAndFootCard('hearts', '3');
      expect(handAndFootCard.isWild()).to.be.false;
    });
  });
  describe('test getPoints()', function() {
    it('return card points', function() {
      const handAndFootCard = new HandAndFootCard('hearts', '4');
      expect(handAndFootCard.getPoints()).to.equal(5);
    });
    it('return card points', function() {
      const handAndFootCard = new HandAndFootCard('hearts', '5');
      expect(handAndFootCard.getPoints()).to.equal(5);
    });
    it('return card points', function() {
      const handAndFootCard = new HandAndFootCard('hearts', '6');
      expect(handAndFootCard.getPoints()).to.equal(5);
    });
    it('return card points', function() {
      const handAndFootCard = new HandAndFootCard('hearts', '7');
      expect(handAndFootCard.getPoints()).to.equal(5);
    });
    it('return card points', function() {
      const handAndFootCard = new HandAndFootCard('hearts', '8');
      expect(handAndFootCard.getPoints()).to.equal(5);
    });
    it('return card points', function() {
      const handAndFootCard = new HandAndFootCard('hearts', '9');
      expect(handAndFootCard.getPoints()).to.equal(10);
    });
    it('return card points', function() {
      const handAndFootCard = new HandAndFootCard('hearts', '10');
      expect(handAndFootCard.getPoints()).to.equal(10);
    });
    it('return card points', function() {
      const handAndFootCard = new HandAndFootCard('hearts', 'jack');
      expect(handAndFootCard.getPoints()).to.equal(10);
    });
    it('return card points', function() {
      const handAndFootCard = new HandAndFootCard('hearts', 'queen');
      expect(handAndFootCard.getPoints()).to.equal(10);
    });
    it('return card points', function() {
      const handAndFootCard = new HandAndFootCard('hearts', 'king');
      expect(handAndFootCard.getPoints()).to.equal(10);
    });
    it('return card points', function() {
      const handAndFootCard = new HandAndFootCard('hearts', '2');
      expect(handAndFootCard.getPoints()).to.equal(20);
    });
    it('return card points', function() {
      const handAndFootCard = new HandAndFootCard('hearts', 'ace');
      expect(handAndFootCard.getPoints()).to.equal(20);
    });
    it('return card points', function() {
      const handAndFootCard = new HandAndFootCard('hearts', 'joker');
      expect(handAndFootCard.getPoints()).to.equal(50);
    });
  });
});
