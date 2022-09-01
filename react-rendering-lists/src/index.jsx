import ReactDOM from 'react-dom/client';
import React from 'react';

function Pokemon(props) {
  const pokemons = props.pokedex;
  const list = pokemons.map(onePokemon =>
    <li key={onePokemon.number}>
      {onePokemon.name}
    </li>);
  return (
      <ul>{list}</ul>
  );
}
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Pokemon pokedex={pokedex}/>);
