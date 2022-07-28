import { takeEvery, put, call } from 'redux-saga/effects';
import * as Types from './todo.type';
import * as Action from './todo.actions';
import API from './todo.api';

function* fetchSaga() {
    try {
        const res = yield call(API.fetch);
        if (res) {
            yield put(Action.fetchSuccess(res.data.data.items));
        }
    } catch (error) {
        yield put(Action.fetchFailure(error));
        console.log(error);
    }
}

function* addSaga({ params, callback }) {
    try {
        const res = yield call(API.add, params);
        if (res) {
            yield put(Action.addSuccess(params));
            callback();
        }
    } catch (error) {
        yield put(Action.addError(error));
        console.log(error);
    }
}

function* updateSaga({ params, callback }) {
    try {
        const res = yield call(API.update, params);
        if (res) {
            yield put(Action.updateSuccess(params));
            callback();
        }
    } catch (error) {
        yield put(Action.updateError(error));
        console.log(error);
    }
}

function* deleteSaga({ params, callback }) {
    try {
        const res = yield call(API.delete, params.id, params.userId);
        if (res) {
            yield put(Action.deleteSuccess(params));
            yield put(Action.fetchRequest(params));
            callback();
        }
    } catch (error) {
        yield put(Action.deleteError(error));
        console.log(error);
    }
}

export function* todosSaga() {
    yield takeEvery(Types.FETCH_REQUEST, fetchSaga);
    yield takeEvery(Types.ADD_REQUEST, addSaga);
    yield takeEvery(Types.UPDATE_REQUEST, updateSaga);
    yield takeEvery(Types.DELETE_REQUEST, deleteSaga);
}
