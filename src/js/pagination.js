import '../css/common.css';
import '../css/pagination.css';
import newsMarkup from '../templates/pagination.hbs';
import NewsApiService from './news-api';
import LoadMoreBtn from './load-more';

const refs = {
  contentBox: document.querySelector('.content-box'),
  form: document.querySelector('.search-form'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: false,
});

console.log(loadMoreBtn);
const newsApiService = new NewsApiService();

refs.form.addEventListener('submit', findNews);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function findNews(e) {
  e.preventDefault();
  clearContentBox();

  newsApiService.query = e.currentTarget.elements.query.value;

  if (newsApiService.query === '') {
    return alert('Введи что-то нормальное');
  }

  newsApiService.resetPage();

  loadMoreBtn.show();
  loadMoreBtn.disable();

  fetchArticles();
}

function fetchArticles() {
  loadMoreBtn.disable();
  newsApiService.fetchArticles().then(articles => {
    renderMarkup(articles);
    loadMoreBtn.enable();
  });
}

function renderMarkup(news) {
  refs.contentBox.insertAdjacentHTML('beforeend', newsMarkup(news));
}

function clearContentBox() {
  refs.contentBox.innerHTML = '';
}
