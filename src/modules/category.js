import {createAction, handleActions} from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, {
    createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as categoryAPI from '../lib/api/category'; 

const CHANGE_FILED = 'CHANGE_FIELD';
const INITIALIZE_FORM = 'INITIALIZE_FROM';

const [CATEGORY, CATEGORY_SUCCESS, CATEGORY_FAILURE] = createRequestActionTypes(
    'CATEGORY',
);

export const changeField = createAction(
    CHANGE_FILED,
    ({ form, key, value}) => ({
        form, key, value }),
    );

    export const initializeForm = createAction(INITIALIZE_FORM, form => form);

    export const set = createAction(CATEGORY, ({id}) => ({
        id
    }));

    export const get = createAction(CATEGORY, ({id, key, value}) => ({
        id, key, value
    }));

    const getSaga = createRequestSaga(CATEGORY, categoryAPI.get);
    const setSaga = createRequestSaga(CATEGORY, categoryAPI.set);
    
    export function* categorySaga() {
        yield takeLatest(CATEGORY, getSaga);
        yield takeLatest(CATEGORY, setSaga);
    }

const initialState = {
    category: {
        id: '',
        key: '',
        value: ''
    },
    auth: null,
    authError: null,
};


const category = handleActions(
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
        [CATEGORY_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [CATEGORY_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        })
    },
    initialState,
);


export default category;