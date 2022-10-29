import axios from 'axios';

const api = axios.create({
    baseURL: 'https://wowmart.onrender.com/'
});

export default api;
