import * as Types from './todo.type';

const initState = {
    todoList: [],
    error: null,
};

const todoReducer = (state = initState, action) => {
    switch (action.type) {
        // FETCH
        case Types.FETCH_REQUEST:
            return {
                ...state,
            };
        case Types.FETCH_SUCCESS:
            return {
                ...state,
                todoList: action.payload,
            };
        case Types.FETCH_FAILURE:
            return {
                ...state,
                error: action.error,
            };

        // ADD;
        case Types.ADD_REQUEST:
            return {
                ...state,
            };
        case Types.ADD_SUCCESS:
            return {
                ...state,
            };
        case Types.ADD_ERROR:
            return {
                ...state,
                error: action.error,
            };

        // UPDATE;
        case Types.UPDATE_REQUEST:
            return {
                ...state,
            };
        case Types.UPDATE_SUCCESS:
            return {
                ...state,
            };
        case Types.UPDATE_ERROR:
            return {
                ...state,
                error: action.error,
            };

        // DELETE;
        case Types.DELETE_REQUEST:
            return {
                ...state,
            };
        case Types.DELETE_SUCCESS:
            return {
                ...state,
            };
        case Types.DELETE_ERROR:
            return {
                ...state,
                error: action.error,
            };

        default:
            return state;
    }
};

export default todoReducer;
