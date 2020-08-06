import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const AuthTemplateBlock = styled.div``;

const AuthTemplate = ({children}) => {
    return (
        <AuthTemplateBlock>
            {children}
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;