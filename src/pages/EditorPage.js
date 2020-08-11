import React from 'react';
import Button from '../components/common/Button';
import ActionButton from '../components/write/ActionButton';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';

const EditorPage = () => {
    return (
        <Responsive>
            <EditorContainer />
            <ActionButton />
            <Button to='/category'>카테고리 추가</Button>
        </Responsive>
    );
};

export default EditorPage;