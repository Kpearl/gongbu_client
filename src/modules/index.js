import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import category from './category';

const rootReducer = combineReducers({
    auth,
    loading,
    user,
    category
});

export function* rootSaga() {
    yield all([authSaga(), userSaga()]);
}

export default rootReducer;