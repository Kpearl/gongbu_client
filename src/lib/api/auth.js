import client from './cilent';

//로그인
export const login = ({ id, password }) => {
    client.post('/users/login', null, { params:{id: id, pw: password }})
        .then(
            function (response) {
                console.log(response);
            }).catch(error => {
                console.log('error : ', error.response)
            });
}

//회원가입
export const register = ({ id, password, username, phone, birth }) => {
    client.post('/users/register', null, { params: { id, password, username, phone, birth }})
        .then(
            function (response) {
                console.log(response);
            }).catch(error => {
                console.log('error : ', error.response)
            });
}

//로그인 상태 확인
export const check = () => client.post('/users/check');