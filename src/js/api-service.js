const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPokemon(id) {
  const url = `${BASE_URL}/pokemon/${id}`;
  return fetch(url).then(response => {
    return response.json();
  });
}

export default { fetchPokemon };
