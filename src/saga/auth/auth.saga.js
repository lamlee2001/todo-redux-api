import { takeEvery, put, call } from 'redux-saga/effects';
import * as Types from './auth.type';
import * as Action from './auth.actions';
import API from './auth.api';
import { toast } from 'react-toastify';

function* registerSaga({ params, callback }) {
    try {
        const res = yield call(API.registerUser, params);
        if (res) {
            yield put(Action.registerSuccess(params));
            callback();
        }
    } catch (error) {
        yield put(Action.registerError(error));
        console.log(error);
    }
}

function* signInSaga({ params, callback }) {
    try {
        const res = yield call(API.loginUser, params);
        if (res) {
            localStorage.setItem('token', JSON.stringify(res.data.data.token));
            const me = yield call(API.getMe);
            yield put(Action.signInSuccess({ params, id: me.data.data._id }));
            callback();
        }
    } catch (error) {
        yield put(Action.signInError(error));
        console.log(error);
        toast.error('Email or Password not match');
    }
}

function* logoutSaga() {
    try {
        yield put(Action.logOutSuccess());
        localStorage.removeItem('token');
        toast.success('Log Out success');
    } catch (error) {
        console.log(error);
        yield put(Action.logOutError(error));
    }
}

function* setUserSaga() {
    try {
        const me = yield call(API.getMe);
        yield put(Action.setUserSuccess(me.data.data._id));
    } catch (error) {
        console.log(error);
        yield put(Action.setUserFailure(error));
    }
}

export function* authSaga() {
    yield takeEvery(Types.REGISTER_USER_REQUEST, registerSaga);
    yield takeEvery(Types.SIGNIN_USER_REQUEST, signInSaga);
    yield takeEvery(Types.LOGOUT_USER_REQUEST, logoutSaga);
    yield takeEvery(Types.SET_USER_REQUEST, setUserSaga);
}
