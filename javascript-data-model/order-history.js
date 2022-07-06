var orderHistory = [
  {
    orderNumber: '114-3941689-8772232',
    orderPlacedDate: 'August 4, 2020',
    deliveredOn: 'August 8, 2020',
    totalPrice: '$34.00',
    shipTo: 'JS Masher',
    orderItem: [
      {
        itemName: 'JavaScript for impatient programmers',
        itemPrice: '$31.55',
        returnWindow: 'September 7, 2020'
      }
    ]
  },

  {
    orderNumber: '113-9984268-1280257',
    orderPlacedDate: 'July 19, 2020',
    deliveredOn: 'July 20, 2020',
    totalPrice: '$44.53',
    shipTo: 'JS Masher',
    orderItem: [
      {
        itemName: 'The Timeless Way of Building',
        itemPrice: '$41.33',
        returnWindow: 'August 19, 2020'
      }
    ]
  },

  {
    orderNumber: '114-2875556-9059409',
    orderPlacedDate: 'July 4, 2020',
    deliveredOn: 'July 7, 2020',
    totalPrice: '$17.22',
    shipTo: 'JS Masher',
    orderItem: [
      {
        itemName: 'Gamecube Controller Adapter. Super Smash Bros Switch GameCube Adapter for WII U, PC. Support Turbo and Vibration Features.',
        itemPrice: '$15.98',
        returnWindow: 'August 5, 2020'
      }
    ]
  },

  {
    orderNumber: '113-2883177-2648248',
    orderPlacedDate: 'July 3, 2020',
    deliveredOn: 'July 5, 2020',
    totalPrice: '$138.93',
    shipTo: 'JS Masher',
    orderItem: [
      {
        itemName: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        itemPrice: '$94.95',
        returnWindow: 'August 4, 2020'
      },
      {
        itemName: 'The Art of Sql',
        itemPrice: '$33.99',
        returnWindow: 'August 4, 2020'
      }
    ]
  }

];

console.log(orderHistory);
console.log(orderHistory[0].totalPrice);
console.log(orderHistory[0].orderItem);
