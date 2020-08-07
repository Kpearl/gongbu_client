import client from './cilent';

//카테고리 리스트
export const get = ({ id }) => 
    client.post('/category/get', null, { params:{id: id}})


//카테고리 입력
export const set = ({ id, key, value }) => 
    client.post('/category/set', null, { params: { id: id, key: key, value: value}})
