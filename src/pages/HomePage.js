import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Category from '../components/write/Category';

const PostListPage = () => {
    return (
        <>
            <Button to='/editor'>입력</Button>
            <Button to='/category'>카테고리 추가</Button>
        </>
    )
};

export default PostListPage;