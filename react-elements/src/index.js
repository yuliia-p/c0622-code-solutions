import React from 'react';
var ReactDOM = require('react-dom');

const element = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);
console.log('element: ', element);
const container = document.querySelector('#root');
console.log('container: ', container);

const root = ReactDOM.createRoot(container);
root.render(element);
