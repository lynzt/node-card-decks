"use strict";
const Card = require('./card');

class HandAndFootCard extends Card {
  constructor(suit, face) {
    super(suit, face);
    this.points = getCardPoints(this.face, this.color);
    this.isWildCard = isCardWild(this.face);
  }

  getPoints() {
    return this.points;
  }
  isWild() {
    return this.isWildCard;
  }

}

function isCardWild(face) {
  if (face == '2' || face == 'joker') {
    return true;
  } else {
    return false;
  }
}

function getCardPoints(face, color) {
  if (face == 'joker') {
    return 50;
  } else if (face == 'ace' || face == '2') {
    return 20;
  } else if (face == 'king' || face == 'queen' || face == 'jack' || face == '10' || face == '9') {
    return 10;
  } else if (face == '4' || face == '5' || face == '6' || face == '7' || face == '8') {
    return 5;
  } else if (face == '3') {
    if (color == 'black') {
      return -300;
    } else if (color == 'red') {
      return -500;
    }
  }

}



module.exports = HandAndFootCard;
