import React from 'react';
import Button from '../components/common/Button';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const EditorPage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <WriteActionButtonsContainer />
      <Button to="/category">카테고리 추가</Button>
    </Responsive>
  );
};

export default EditorPage;
