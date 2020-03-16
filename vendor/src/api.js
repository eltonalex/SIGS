import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://sigsbackend.herokuapp.com'
})

export default api;