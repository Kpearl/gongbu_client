import React from 'react';
import Editor from '../components/write/Editor';
import Button from '../components/common/Button';
import Responsive from '../components/common/Responsive';

const EditorPage = () => {
    return (
        <Responsive>
            <Editor />
            <Button to='/category'>카테고리 추가</Button>
        </Responsive>
    );
};

export default EditorPage;