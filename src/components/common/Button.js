import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const buttonStyle = css`
text-decoration: none;
border: none;
border-radius: 4px;
font-size: 1rem;
font-weight:bold;
padding: 0.25rem 1rem;
color: white;
outline: none;
cursor: pointer;

background: ${palette.gray[8]};
&:hover {
    background: %{palette.gray[6]};
}
`;

const StyledButton = styled.button`
${buttonStyle}
`;

const StyledLink = styled(Link)`
${buttonStyle}
`;

const Button = props => {
    return props.to ? (
        <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
    ) : (
            <StyledButton {...props} />
        );
};

export default Button;