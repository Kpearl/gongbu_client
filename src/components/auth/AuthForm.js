import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AuthFromBlock = styled.div``;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid;
    paddigng-bottom: 0.5rem;
    outline: none;
    width: 100%;
    & + & {
        margin-top: 1rem;
    }
  `;

const Footer = styled.div``;

const textMap = {
    login: 'login',
    register: 'register'
};

const AuthFrom = ({ type, form, onChange, onSubmit }) => {
    const text = textMap[type];
    return (
        <AuthFromBlock>
            <h1>{text}</h1>
            <from onSubmit={onSubmit}>
                <StyledInput 
                    autoComplate="username"
                    name="username"
                    placeholder="아이디"
                    onChange={onChange}
                    value={form.username}
                />
                <StyledInput
                    autoComplate="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password" 
                    onChange={onChange}
                    value={form.password}
                />
                {type === 'register' && (
                    <StyledInput
                        autoComplate="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                        onChange={onChange}
                        value={form.passwordConfirm}
                    />
                )}
                <Button>{text}</Button>
            </from>
            <Footer>
                {type === 'login' ? (
                    <Link to="/register">회원가입</Link>
                ) : (
                    <Link to="/login">로그인</Link>
                )}
            </Footer>
        </AuthFromBlock>
    );
};

export default AuthFrom;