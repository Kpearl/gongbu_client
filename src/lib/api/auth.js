import client from './cilent';

//로그인
export const login = ({ username, password }) =>
    client.get('/users/login', { username, password });

//회원가입
export const register = ({ username, password, id, phone, birth }) =>
    client.get('/users/register', { id, password, username, phone, birth });

//로그인 상태 확인
export const check = () => client.get('/check');