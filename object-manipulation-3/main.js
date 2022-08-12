console.log('Lodash is loaded:', typeof _ !== 'undefined');

var names = ['Yuliia', 'Cody', 'Yoon', 'Daniel'];
var myPlayers = [];
var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var deck = [];

function Players() {
  for (var i = 0; i < names.length; i++) {
    var player = {
      name: names[i],
      hand: [],
      total: null
    };
    myPlayers.push(player);
  }
  return myPlayers;
}
Players();

// create a collection of fifty-two objects
deck = deckGenerator();
function deckGenerator() {
  var deck = []; // 52 card-obj
  for (var i = 0; i < suits.length; i++) {
    for (var y = 0; y < values.length; y++) {
      var card = {
        value: values[y],
        suit: suits[i]
      };
      deck.push(card);
    }
  }
  return deck;
}

// shuffle the deck
function shuffle(deck) {
  // for 500 turns
  // switch the values of two random cards
  for (var i = 0; i < 1000; i++) {
    var cardPlace1 = Math.floor((Math.random() * deck.length));
    var cardPlace2 = Math.floor((Math.random() * deck.length));
    var temporary = deck[cardPlace1];

    deck[cardPlace1] = deck[cardPlace2];
    deck[cardPlace2] = temporary;
  }
}
function deal() {
  return this.deck.pop();
}

// myPlayers = [{name: 'Yuliia', hand: [{value: 4, suit: 'Diamonds'}], ...]
// {value: 4, suit: 'Diamonds'}
// myPlayers[0].hand[1].value = 4
// King, Queen and Jack which count as 10
// Ace as 11

function gameTime() {
  shuffle(deck);
  for (var x = 0; x < myPlayers.length; x++) {
    // deal 2 cards to a player
    myPlayers[x].hand.push(deal(), deal());
  }
  // convert value.str into number
  // compare the values
  for (var i = 0; i < myPlayers.length; i++) {
    if (myPlayers[i].hand[0].value === 'Jack' || myPlayers[i].hand[0].value === 'Queen' || myPlayers[i].hand[0].value === 'King') {
      myPlayers[i].hand[0].value = 10;
    } else if (myPlayers[i].hand[0].value === 'Ace') {
      myPlayers[i].hand[0].value = 11;
    }
    if (myPlayers[i].hand[1].value === 'Jack' || myPlayers[i].hand[1].value === 'Queen' || myPlayers[i].hand[1].value === 'King') {
      myPlayers[i].hand[1].value = 10;
    } else if (myPlayers[i].hand[1].value === 'Ace') {
      myPlayers[i].hand[1].value = 11;
    }
    // player's total
    myPlayers[i].total = myPlayers[i].hand[0].value + myPlayers[i].hand[1].value;
  }
  // find highest score
  var maxScore = myPlayers[0].total;
  var winner = myPlayers[0];
  for (var y = 1; y < myPlayers.length; y++) {
    if (maxScore < myPlayers[y].total) {
      maxScore = myPlayers[y].total;
      winner = myPlayers[y];
    }
  }
  return winner;
  // console.log('winner is: ', winner.name);
}

gameTime();
