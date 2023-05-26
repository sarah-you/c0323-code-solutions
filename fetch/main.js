async function fetchData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err, '404: an unexpected error occurred');
  }
}
fetchData();
