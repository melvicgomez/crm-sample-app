import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

instance.interceptors.response.use(
  (response) => response,
  ({ message, response: { headers, data, status, config } }) =>
    Promise.reject({ headers, message, data, status, config })
);

export default instance;
