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

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;

const textMap = {
    login: 'login',
    register: 'register'
};

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const AuthFrom = ({ type, form, onChange, onSubmit, error }) => {
    const text = textMap[type];
    return (
        <AuthFromBlock>
            <h1>{text}</h1>
            {type === 'login' ? (
                <Button to="/register">회원가입</Button>
            ) : (
                    <Button to="/login">로그인</Button>
                )}
            <form onSubmit={onSubmit}>
                {type === 'register' && (
                    <StyledInput
                        autoComplate="username"
                        name="username"
                        placeholder="이름"
                        onChange={onChange}
                        value={form.username || ''}
                    />
                )}
                {type === 'register' && (
                    <StyledInput
                        autoComplate="phone"
                        name="phone"
                        placeholder="전화번호"
                        onChange={onChange}
                        value={form.phone || ''}
                    />
                )}
                {type === 'register' && (
                    <StyledInput
                        autoComplate="email"
                        name="email"
                        placeholder="email"
                        onChange={onChange}
                        value={form.email || ''}
                    />
                )}
                {type === 'register' && (
                    <StyledInput
                        type="date"
                        autoComplate="birth"
                        name="birth"
                        placeholder="생년월일"
                        onChange={onChange}
                        value={form.birth || ''}
                    />
                )}
                <StyledInput
                    autoComplate="id"
                    name="id"
                    placeholder="아이디"
                    onChange={onChange}
                    value={form.id || ''}
                />
                <StyledInput
                    autoComplate="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                    onChange={onChange}
                    value={form.password || ''}
                />
                {type === 'register' && (
                    <StyledInput
                        autoComplate="new-password"
                        name="passwordConfirm"
                        placeholder="비밀번호 확인"
                        type="password"
                        onChange={onChange}
                        value={form.passwordConfirm || ''}
                    />
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonWithMarginTop>{text}</ButtonWithMarginTop>
            </form>
            <Footer>
            </Footer>
        </AuthFromBlock>
    );
};

export default AuthFrom;