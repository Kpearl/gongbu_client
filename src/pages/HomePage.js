import React from 'react';
import Button from '../components/common/Button';
import CalendarViwer from '../components/calendar/monthView';

const PostListPage = () => {
  return (
    <>
      <CalendarViwer />
      <Button to="/write">입력</Button>
      <Button to="/category">카테고리 추가</Button>
    </>
  );
};

export default PostListPage;
