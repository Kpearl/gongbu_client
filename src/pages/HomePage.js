import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const PostListPage = () => {
    return(
        <div>
            <Link to="/login">로그인</Link>
            <br/>
            <Link to="/register">회원가입</Link>
        </div>
    )
};

export default PostListPage;