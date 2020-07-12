import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import {Link} from 'react-router-dom';

const AuthTemplateBlock = styled.div``;

const AuthTemplate = ({children}) => {
    return (
        <AuthTemplateBlock>
            <div className="logo-area">
                <Link to="/">REACTERS</Link>
            </div>
            {children}
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;