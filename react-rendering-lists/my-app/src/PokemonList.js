export default function PokemonList({ list }) {
  const pokemons = list.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul>{pokemons}</ul>;
}

// used .map() method to turn the pokedex into li elements;
// added a key to each list item using the pokemon number to create id from each list item;
// another way to write this code:
// export default function PokemonList({ pokdex }) {
//   return(
//     <ul>
//       { pokedex.map((pokemon)) => <li key={pokemon.number}>{pokemon.name}</li> }
//     </ul>);
// }
