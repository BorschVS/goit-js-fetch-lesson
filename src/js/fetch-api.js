import '../css/common.css';
import '../css/fetch.css';
import pokemonCardTpl from '../templates/pokemon-card.hbs';
import API from './api-service';

const refs = {
  contentBox: document.querySelector('.content-box'),
  form: document.querySelector('.search-form'),
  findPockemonBtn: document.querySelector('button'),
};

refs.form.addEventListener('submit', findPokemonById);

function findPokemonById(e) {
  e.preventDefault();

  const form = e.currentTarget;
  const id = form.elements.query.value;

  if (!id) {
    return;
  }

  API.fetchPokemon(id)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(form.reset());
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  refs.contentBox.insertAdjacentHTML('beforeend', markup);
}

function onFetchError() {
  alert('Покемон не найден');
}

////////////////////////////////////////////////////////////////////

// fetch(
//   'https://pixabay.com/api/?key=40756671-54754ada209148e7d7f60a97d&q=dogs&image_type=vector'
// )
//   .then(response => response.json())
//   .then(console.log);

////////////////////////////////////////////////////////////////////////

const url = 'https://newsapi.org/v2/everything?q=war';
const options = {
  headers: {
    // call your key =>
    // apiKey: '2b94772380c74ad89e726abe36fb7410'
    // 'X-Api-Key': '2b94772380c74ad89e726abe36fb7410',
    Authorization: '2b94772380c74ad89e726abe36fb7410',
  },
};
fetch(url, options)
  .then(r => r.json())
  .then(console.log);
