console.log('Lodash is loaded:', typeof _ !== 'undefined');

// var collectionPlayers = [
//   {
//     name: '',
//     hand: 0
//   },
//   {
//     name: '',
//     hand: 0
//   },
//   {
//     name: '',
//     hand: 0
//   },
//   {
//     name: '',
//     hand: 0
//   }
// ];

var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

// create a collection of fifty-two objects
function deckGenerator() {
  var deck = []; // 52 card-obj
  for (var i = 0; i < suits.length; i++) {
    for (var y = 0; y < values.length; y++) {
      var card = {
        value: values[y],
        suit: suits[i]
      };
      deck.push(card);
      // console.log('card', card);
    }
  }
  return deck;
  // console.log('deck', deck);
}

var deck = deckGenerator();
console.log('deck', deck);

// shuffle the deck
function shuffle(deck) {
  // for 500 turns
  // switch the values of two random cards
  for (let i = 0; i < 500; i++) {
    var cardPlace1 = Math.floor((Math.random() * deck.length));
    var cardPlace2 = Math.floor((Math.random() * deck.length));
    var temporary = deck[cardPlace1];

    deck[cardPlace1] = deck[cardPlace2];
    deck[cardPlace2] = temporary;
  }
  return deck;
}
shuffle(deck);
