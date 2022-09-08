import Carousel from './carousel';
import ReactDOM from 'react-dom/client';
import React from 'react';

const images = [
  {
    url: '../images/001.png'
  }, {
    url: '../images/004.png'
  }, {
    url: '../images/007.png'
  }, {
    url: '../images/025.png'
  }, {
    url: '../images/039.png'
  }
  // ,
  // {
  //   url: '../images/045.jpg'
  // },
  // {
  //   url: '../images/050.jpg'
  // }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Carousel images={images}/>);
