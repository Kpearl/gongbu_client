import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const ActionButtonBlock = styled.div`
  margin-top: 1rem;
  magin-bottom: 3rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const ActionButton = ({ onCancel, onPublish }) => {
  return (
    <ActionButtonBlock>
      <StyledButton cyan onClick={onPublish}>
        등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </ActionButtonBlock>
  );
};

export default ActionButton;
