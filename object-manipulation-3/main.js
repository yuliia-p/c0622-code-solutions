console.log('Lodash is loaded:', typeof _ !== 'undefined');

var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var deck = [];

// function Players(name, hand) {
//   this.name = name;
//   this.habd = hand;
// }

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
  for (var i = 0; i < 500; i++) {
    var cardPlace1 = Math.floor((Math.random() * deck.length));
    var cardPlace2 = Math.floor((Math.random() * deck.length));
    var temporary = deck[cardPlace1];

    deck[cardPlace1] = deck[cardPlace2];
    deck[cardPlace2] = temporary;
  }
}
shuffle(deck);
console.log('deck', deck);

function deal() {
  return this.deck.pop();
}
deal();
