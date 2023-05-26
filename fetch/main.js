async function fetchData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`Request failed ${response.status}`);
    }
    const bulbasaur = await response.json();
    console.log(bulbasaur);
  } catch (err) {
    console.error('404: an unexpected error occurred', err);
  }
}
fetchData();
