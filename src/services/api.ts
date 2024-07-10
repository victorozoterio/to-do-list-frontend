import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://to-do-list-backend-iota.vercel.app',
});
