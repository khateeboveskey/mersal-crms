import axios from 'redaxios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('AUTH_TOKEN')}`,
  },
});

export default instance;
