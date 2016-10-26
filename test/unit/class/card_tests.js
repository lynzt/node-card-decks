'use strict';
const chai = require('chai');
const expect = chai.expect;
const Card = require('./../../../lib/classes/card');

describe('Card class tests', function() {
  describe('test getSuit()', function() {
    it('return current card suit', function() {
      const card = new Card('hearts', 'ace');
      expect(card.getSuit()).to.equal('hearts');
    });
  });
  describe('test getFace()', function() {
    it('return current card suit', function() {
      const card = new Card('hearts', 'ace');
      expect(card.getFace()).to.equal('ace');
    });
  });
  describe('test getColor()', function() {
    it('return current card suit', function() {
      const card = new Card('hearts', 'ace');
      expect(card.getColor()).to.equal('red');
    });
    it('return current card suit', function() {
      const card = new Card('diamonds', 'ace');
      expect(card.getColor()).to.equal('red');
    });
    it('return current card suit', function() {
      const card = new Card('clubs', 'ace');
      expect(card.getColor()).to.equal('black');
    });
    it('return current card suit', function() {
      const card = new Card('spades', 'ace');
      expect(card.getColor()).to.equal('black');
    });
  });
});
