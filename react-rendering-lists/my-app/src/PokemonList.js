export default function PokemonList({ list }) {
  const pokemons = list.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul>{pokemons}</ul>;
}

// used .map() method to turn the pokedex into li elements;
// added a key to each list item using the pokemon number to create id from each list item;
