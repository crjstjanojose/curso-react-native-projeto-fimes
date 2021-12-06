import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '24db03bee4557b9116fb6a7ab5ec68d8',
    language: 'pt-BR',
  },
});

export default movieDB;
