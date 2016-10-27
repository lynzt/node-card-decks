"use strict";
const _ = require('underscore');
const HandAndFootCard = require('./hand_and_foot_card');
const utils = require('./helpers/utils');

class Deck {
  constructor(options) {
    this.options = utils.setOptionDefaults(options, getDefaultOptions());
    let cardTypes = generateCardTypes(this.options);

    let keys = {};
    this.allCards = generateDecks(cardTypes, this.options);
    keys['allCards'] = Object.keys(this.allCards);
    keys['deck'] = Object.keys(this.allCards);
    keys['discard'] = [];
    this.keys = keys;
  }

  countCards(pileType) {
    return this.keys[pileType].length;
  }

  shuffle(pileType) {
    this.keys[pileType] = _.shuffle(this.keys[pileType]);
  }

  getKeys(pileType) {
    return this.keys[pileType];
  }

  // resetDeck() {
  //   keys['deck'] = keys['allCards'];
  //   keys['discard'] = [];
  // }

  drawCards(cardsToDraw) {
    let cards = [];
    for (let i = 0; i < cardsToDraw; i++ ) {
        cards.push(this.keys['deck'].pop());
    }
    return cards;
    // return this.keys['deck'].pop();

  }

  displayCards(pileType) {
    let keys = this.keys[pileType];
    for (let key of keys) {
      console.log("key: " + key + " \t this.allCards: " + this.allCards[key].points);
    }
  }

}

function generateCardTypes(options) {
  let cardTypes = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
  return _.without.apply(_, [cardTypes].concat(options.cardsNotUsed));
}

function generateDecks(cardTypes, options) {
  let allCards = {};
  let decks = parseInt(options.nbrOfDecks);

  for (let i = 0; i < decks; i++) {
    let deckNbr = i + 1;
    _.extend(allCards, generateCards(deckNbr, cardTypes, options));
  }

  return allCards;
}

function generateCards(deckNbr, cardTypes, options) {
  let allCards = {};
  _.extend(allCards, generateSuitCards(deckNbr, cardTypes, 'hearts'));
  _.extend(allCards, generateSuitCards(deckNbr, cardTypes, 'diamonds'));
  _.extend(allCards, generateSuitCards(deckNbr, cardTypes, 'spades'));
  _.extend(allCards, generateSuitCards(deckNbr, cardTypes, 'clubs'));
  _.extend(allCards, generateJokerCards(deckNbr, options));
  return allCards;
}

function generateSuitCards(deckNbr, cardTypes, suit) {
  let cards = {}
  for (let cardType of cardTypes) {
    let cardName = suit + '_' + cardType + '_d' + deckNbr;
    cards[cardName] = new HandAndFootCard(suit, cardType);
  }
  return cards;
}

function generateJokerCards(deckNbr, options) {
  let cards = {}
  if (options.redJoker) {
    let cardName = 'redJoker' + '_d' + deckNbr;
    cards[cardName] = new HandAndFootCard('red', 'joker');
  }
  if (options.blackJoker) {
    let cardName = 'blackJoker' + '_d' + deckNbr;
    cards[cardName] = new HandAndFootCard('black', 'joker');
  }
  return cards;
}

function getDefaultOptions() {
  return {
    nbrOfDecks: 1,
    redJoker: false,
    blackJoker: false,
    cardsNotUsed: []
  };
}

module.exports = Deck;
