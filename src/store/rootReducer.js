import { combineReducers } from 'redux';

import todoReducer from '../saga/Todo/todo.reducer';
import UserReducer from '../saga/auth/auth.reducer';

const rootReducer = () =>
    combineReducers({
        todo: todoReducer,
        user: UserReducer,
    });

export default rootReducer;
