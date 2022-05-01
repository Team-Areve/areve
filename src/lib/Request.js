import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://193.122.121.118.com',
});

instance.defaults.timeout = 2500;

export default instance;
