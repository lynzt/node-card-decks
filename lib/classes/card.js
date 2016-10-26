"use strict";

class Card {
  constructor(suit, face) {
    this.suit = suit;
    this.face = face;
    this.color = getCardColor(this.suit);
  }

  getSuit() {
    return this.suit;
  }
  getFace() {
    return this.face;
  }
  getColor() {
    return this.color;
  }
}

function getCardColor(suit) {
  if (suit == 'clubs' || suit == 'spades' || suit == 'black') {
    return 'black';
  } else if (suit == 'diamonds' || suit == 'hearts' || suit == 'red') {
    return 'red';
  }
}

module.exports = Card;
