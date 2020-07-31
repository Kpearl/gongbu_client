import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledToolBar = styled.button`
body{	
	font-family: 'Noto Sans KR', sans-serif;
	margin: 0;
	text-align: center;
	font-size: 15px;
}

.nav-container {
	display: flex;
	width:100%;
	margin: 0;
	padding: 0;
	list-style-type: none;
	background-color: lightslategray;
}

.nav-item {
	font-weight: bold;
	font-family: 'Beth Ellen', sans-serif;
	padding: 15px;
	cursor: pointer;
	width: 50%;
}

.nav-container li a {
	display: block;
}

.nav-container ul {
	list-style: none;
	position: absolute;
	background: #90b5da;
	text-align: center;
	opacity: 0;
	padding: 15px;
	margin: 0;
	left: 0;
}

.nav-container li:hover ul {
	opacity: 1;
}

.nav-left {
	text-align: left;
}

.nav-center {
	text-align: center;
}

.nav-right {
	text-align: right;
}

.nav-right::before, .nav-right::after {
	font-size: 50px;
}

.nav-right::before {
	transform: rotate(-90deg);
}

.nav-right:hover { cursor: pointer; }

.nav-item a {
	text-decoration: none;
	color: white;
}`;

const ToolBar = props => <StyledToolBar{...props} />;

export default ToolBar;