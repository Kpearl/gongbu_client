import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import palette from '../../lib/styles/palette';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';

const ToolBarBlack = styled.div`
	position: fixed;
	font-weight: bold;
	font-family: 'Beth Ellen', sans-serif;
	width: 100%;
	font-size: 30px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
	background: white;
`;

const Wrapper = styled(Responsive)`
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.logo {
		text-decoration: none;
		font-size:1.125rem;
		font-weight: 800;
		letter-spacing: 2px;
	}

	.right {
		display: flex;
		align-items: center;
	}
`;

const Spacer = styled.div`
	height: 4rem;
`;

const UserInfo = styled.div`
	font-weight: 800;
	margin-right: 1rem;
`;

const ToolBar = ({ user, onLogout }) => {
	return (
		<>
			<ToolBarBlack>
				<Wrapper>
					<Button to="/setting">환경설정</Button>
					<Link to="/" className="logo">Gongbu</Link>
					{user ? (
						<div className="right">
							<UserInfo>{user.id}</UserInfo>
							<Button onClick={onLogout}>로그아웃</Button>
						</div>
					) : (
							<div className="right">
								<Button to="/login">로그인</Button>
							</div>
						)}
				</Wrapper>
			</ToolBarBlack>
			<Spacer />
		</>
	)
}

export default ToolBar;