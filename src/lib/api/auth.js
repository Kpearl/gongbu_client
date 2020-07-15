import client from './cilent';

export const login = ({ username, password }) =>
    client.post('/login', { username, password });

export const register = ({ username, password }) =>
    client.post('/register', { username, password });

export const check = () => client.get('/check');