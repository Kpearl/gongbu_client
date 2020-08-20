import React, { useEffect } from 'react';
import ActionButton from '../../components/write/ActionButton';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { writePost } from '../../modules/write';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const {
    title,
    content,
    consumer,
    cost,
    category,
    post,
    postError,
  } = useSelector(({ write }) => ({
    title: write.title,
    content: write.content,
    consumer: write.consumer,
    cost: write.const,
    category: write.category,
    post: write.post,
    postError: write.postError,
  }));

  const onPublish = () => {
    dispatch(
      writePost({
        title,
        content,
        cost,
        consumer,
        category,
      })
    );
  };

  const onCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return <ActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonsContainer);
