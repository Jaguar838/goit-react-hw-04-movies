import axios from 'axios';

const API_KEY = 'e0f5a2b3f12c3f7ea9352edce7e33432';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {api_key: API_KEY, language: 'en-EN'};

// - список самых популярных фильмов на сегодня для создания коллекции на главной странице.// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/trending/get-trending 

const fetchTrendingPage = async (page = 1) => {
    try {
      const { data: { total_pages, results }, } = await axios.get('/trending/movie/day', {
        params: { page },
      });
      return [results, total_pages];
    } catch (error) {
        console.log('error =>>', error);
      return [];
    }
  };
// - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/search/search-movies 

  const fetchSearchQuery = async (query, page = 1) => {
    try {
      const { data: { total_pages, results }, } = await axios.get('/search/movie', {
        params: {query, page },
      });
      return [results, total_pages];
    } catch (error) {
        console.log('error =>>', error);
      return [];
    }
  };
// - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-details 

  const fetchDetailsID = async (movieID) => {
    try {
      const { data } = await axios.get(`/movie/${movieID}`, {
      });
      return data;
    } catch (error) {
        console.log('error =>>', error);
      return null;
    }
  };
// - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits

  const fetchCreditsID = async (movieID) => {
    try {
      const { data: {cast}} = await axios.get(`/movie/${movieID}/credits`, {
      });
      return cast;
    } catch (error) {
        console.log('error =>>', error);
      return null;
    }
  };
// - запрос обзоров для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews 

  const fetchReviewsID = async (movieID) => {
    try {
      const { data: {results} } = await axios.get(`/movie/${movieID}/reviews`, {
      });
      return results;
    } catch (error) {
        console.log('error =>>', error);
      return null;
    }
  };

  const moviesAPI = {
    fetchTrendingPage,
    fetchSearchQuery,
    fetchDetailsID,
    fetchCreditsID,
    fetchReviewsID,

  }
  
  export default moviesAPI;



