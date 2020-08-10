import client from './cilent';

//로그인
export const login = ({ id, password }) => 
    client.post('/users/login', null, { params:{ id: id, password: password }})


//회원가입
export const register = ({ id, password, username, phone, birth, email }) => 
    client.post('/users/register', null, { params: { id: id, password: password, name: username, phone: phone, birth: birth, email: email }})

//로그인 상태 확인
export const check = () => client.get('/users/check');

//로그아웃
export const logout = () => client.post('/users/logout');