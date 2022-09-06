import Accordion from './accordion';
import ReactDOM from 'react-dom/client';
import React from 'react';

const topics = [
  {
    name: 'Glaciers and ice sheets hold about 69 percent of the world\'s freshwater.',
    description: 'Just over 96% of the total amount of the world\'s water is held in its oceans, according to Water in Crisis: A Guide to the World\'s Fresh Water Resources via the United States Geological Survey (USGS). However, that is primarily saltwater.To find the bulk of the world\'s freshwater you need to trek to the poles, as 68.7% of it is encased in ice caps, permanent snow, and glaciers. For more facts sent right to your inbox, sign up for our daily newsletter.'
  },
  {
    name: 'The best place in the world to see rainbows is in Hawaii.',
    description: 'If you\'re an avid rainbow gazer and want to get your fill of the beautiful phenomenon, look no further than the state of Hawaii. A study published by the American Meteorological Society in 2021 noted that the area\'s "mountains produce sharp gradients in clouds and rainfall, which are key to abundant rainbow sightings.'
  },
  {
    name: 'Whale songs can be used to map out the ocean floor.',
    description: 'Fin whales are basically the Barry White of the ocean. The deep, bellowing songs that males use to attract mates are considered to be the loudest of all marine life and can be "heard up to 1,000 kilometers (600 miles) away," according to Scientific American. They can also be used to sonically map out the ocean floor thanks to the fact that the sound can reach depths of 2.5 kilometers (1.6 miles) under the water, which bounces back and provides researchers with accurate measurements.'
  }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Accordion topics={topics}/>);
