import axios from 'axios';

const client = axios.create();
//client.defaults.baseURL = 'http://localhost:8080/';

//client.defaults.headers.common['Authorization'] = 'Test';

// axios.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// )

export default client;