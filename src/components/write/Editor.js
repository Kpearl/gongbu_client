import React, { useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const EditorBlock = styled(Responsive)`
  padding: 2rem;
`;

const TitleInput = styled.input`
  font-size: 2rem;
  outline: none;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;

const ContentInput = styled.input`
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 40%;
`;

const CostInput = styled.input`
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 50%;
`;

const Editor = ({
  title,
  content,
  cost,
  category,
  consumer,
  onChangeField,
}) => {
  useEffect(() => {}, [onChangeField]);

  const onChangeTitle = (e) => {
    onChangeField({ key: 'title', value: e.target.value });
  };

  const onChangeContent = (e) => {
    onChangeField({ key: 'content', value: e.target.value });
  };

  const onChangeCost = (e) => {
    onChangeField({ key: 'cost', value: e.target.value });
  };

  const onChangeCategory = (e) => {
    onChangeField({ key: 'category', value: e.target.value });
  };

  const onChangeConsumer = (e) => {
    onChangeField({ key: 'consumer', value: e.target.value });
  };

  return (
    <EditorBlock>
      <TitleInput placeholder="제목" onChange={onChangeTitle} value={title} />
      <ContentInput
        placeholder="내용"
        onChange={onChangeContent}
        value={content}
      />
      <CostInput placeholder="비용" onChange={onChangeCost} value={cost} />
      <Dropdown
        placeholder="카테고리 선택"
        options={category}
        onChange={onChangeCategory}
        value={category}
      />
      <Dropdown
        placeholder="사용자 선택"
        onChange={onChangeConsumer}
        options={consumer}
        value={consumer}
      />
    </EditorBlock>
  );
};

export default Editor;
