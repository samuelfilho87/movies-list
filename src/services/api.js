import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-movies-v1.herokuapp.com',
});

export default api;
