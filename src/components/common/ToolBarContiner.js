import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToolBar from './ToolBar';
import { logout } from '../../modules/user';

const ToolBarContainer = () => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    };
    return <ToolBar user={user} onLogout={onLogout}/>;
}

export default ToolBarContainer;