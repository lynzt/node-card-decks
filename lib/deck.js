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
    keys['cardsInDeck'] = Object.keys(this.allCards);
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
  console.log("decks: " + decks);

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
  _.extend(allCards, generateJokerCards(options));
  return allCards;
}

function generateSuitCards(deckNbr, cardTypes, suit) {
  let cards = {}
  for (let cardType of cardTypes) {
    let cardName = 'deck' + deckNbr + '_' + suit + '_' + cardType;
    cards[cardName] = new HandAndFootCard(suit, cardType);
  }
  return cards;
}

function generateJokerCards(options) {
  let cards = {}
  if (options.redJoker) {
    cards['redJoker'] = new HandAndFootCard('red', 'joker');
  }
  if (options.blackJoker) {
    cards['blackJoker'] = new HandAndFootCard('black', 'joker');
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
