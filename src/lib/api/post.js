import client from './cilent';

//카테고리 리스트
export const get = ({ id }) =>
  client.post('/category/getCategory', null, { params: { id: id } });

//카테고리 입력
export const set = ({ id, key, value }) =>
  client.post('/category/setCategory', null, {
    params: { id: id, key: key, value: value },
  });

//가계부 추가
export const setAccount = ({ g_id, user_id }) =>
  client.post('/account/setGroup', null, {
    params: { g_id: g_id, user_id: user_id },
  });

//가계부 리스트
export const getAccount = ({ user_id }) =>
  client.post('/account/getGroup', null, { params: { user_id: user_id } });

//가계부 파트너 추가
export const partner = ({ g_id, partner_id }) =>
  client.post('/account/setPartner', null, {
    params: { g_id: g_id, partner_id: partner_id },
  });

//가계부 내용 입력
export const writePost = ({ id, title, content, consumer, cost, category }) =>
  client.post('/post/write', null, {
    params: {
      id: id,
      title: title,
      content: content,
      consumer: consumer,
      cost: cost,
      category: category,
    },
  });

//가계부 내용 불러오기
export const read = ({ id, g_id }) =>
  client.post('/post/list', null, { params: { id: id, g_id: g_id } });
