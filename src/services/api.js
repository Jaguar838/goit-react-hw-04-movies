import axios from 'axios';

const API_KEY = 'e0f5a2b3f12c3f7ea9352edce7e33432';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {api_key: API_KEY, language: 'en-EN'};

const fetchTrendingMoviesPage = async page => {
    try {
      const { data } = await axios.get('/trending/movie/day', {
        params: { page },
      });
      return data.results;
    } catch (error) {
        console.log('error:',error);
      return [];
    }
  };