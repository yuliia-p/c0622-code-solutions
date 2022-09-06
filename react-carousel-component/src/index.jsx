import Carousel from './carousel';
import ReactDOM from 'react-dom/client';
import React from 'react';

// const images = [{
//   id: 1,
//   url: '/001.png'
// }, {
//   id: 2,
//   url: '/004.png'
// }, {
//   id: 3,
//   url: '../images/007.png'
// }, {
//   id: 4,
//   url: '../images/025.png'
// }, {
//   id: 5,
//   url: '../images/039.png'
// }];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Carousel />);
