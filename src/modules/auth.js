import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth'; 

const CHANGE_FILED = 'CHANGE_FIELD';
const INITIALIZE_FORM = 'INITIALIZE_FROM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
    'auth/REGISTER',
);

const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
    'auth/LOGIN',
);

export const changeField = createAction(
    CHANGE_FILED,
    ({ form, key, value}) => ({
        form, key, value }),
    );

    export const initializeForm = createAction(INITIALIZE_FORM, form => form);

    export const register = createAction(REGISTER, ({id, password, username, phone, birth}) => ({
        id, password, username, phone, birth
    }));

    export const login = createAction(LOGIN, ({id, password}) => ({
        id, password
    }));

    const registerSaga = createRequestSaga(REGISTER, authAPI.register);
    const loginSaga = createRequestSaga(LOGIN, authAPI.login);
    
    export function* authSaga() {
        yield takeLatest(REGISTER, registerSaga);
        yield takeLatest(LOGIN, loginSaga);
    }

const initialState = {
    register: {
        id: '',
        password: '',
        passwordConfirm: '',
        username: '',
        phone: '',
        birth: '',
    },
    login: {
        id: '',
        password: ''
    },
    auth: null,
    authError: null,
};

const auth = handleActions(
    {
        [CHANGE_FILED]: (state, { payload: {form, key, value} }) =>
        produce( state, draft => {
            draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            authError: null,
        }),
        [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
    },
    initialState,
);

export default auth;