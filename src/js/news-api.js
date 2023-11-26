const NEWS_API_URL = 'https://newsapi.org/v2/';
const NEWS_API_KEY = '2b94772380c74ad89e726abe36fb7410';

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const options = {
      Authorization: NEWS_API_KEY,
    };
    const url = `${NEWS_API_URL}/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}&apiKey=${options.Authorization}`;

    return fetch(url, options)
      .then(response => response.json())
      .then(articles => {
        this.incrementPage();
        return articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
