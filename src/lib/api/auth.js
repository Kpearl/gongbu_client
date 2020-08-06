import client from './cilent';

//로그인
export const login = ({ id, password }) => 
    client.post('/users/login', null, { params:{id: id, pw: password }})


//회원가입
export const register = ({ id, password, username, phone, birth }) => 
    client.post('/users/register', null, { params: { id: id, pw: password, name: username, phone: phone, birth: birth }})

//로그인 상태 확인
export const check = () => client.get('/users/check');

//로그아웃
export const logout = () => client.post('/users/logout');