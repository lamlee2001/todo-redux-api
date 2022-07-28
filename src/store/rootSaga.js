import { all } from 'redux-saga/effects';

import { todosSaga } from '../saga/Todo/todo.saga';
import { authSaga } from '../saga/auth/auth.saga';

export default function* rootSaga() {
    yield all([todosSaga(), authSaga()]);
}
