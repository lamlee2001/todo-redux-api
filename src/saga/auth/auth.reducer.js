import * as Types from './auth.type';

const initState = {
    userList: [],
    userId: '',
    hasUser: false,
    isSignIn: false,
    error: null,
};

const UserReducer = (state = initState, action) => {
    switch (action.type) {
        // REGISTER
        case Types.REGISTER_USER_REQUEST:
            return {
                ...state,
            };
        case Types.REGISTER_USER_SUCCESS:
            return {
                ...state,
            };
        case Types.REGISTER_USER_ERROR:
            return {
                ...state,
                error: action.error,
            };

        // LOGIN
        case Types.SIGNIN_USER_REQUEST:
            return {
                ...state,
            };
        case Types.SIGNIN_USER_SUCCESS:
            return {
                ...state,
                userId: action.payload.id,
                hasUser: true,
                isSignIn: true,
            };
        case Types.SIGNIN_USER_ERROR:
            return {
                ...state,
                isSignIn: false,
                error: action.error,
            };

        // LOG OUT
        case Types.LOGOUT_USER_REQUEST:
            return {
                ...state,
            };
        case Types.LOGOUT_USER_SUCCESS:
            return {
                ...state,
                isLogin: false,
            };
        case Types.LOGOUT_USER_ERROR:
            return {
                ...state,
                error: action.error,
            };

        // SET USER
        case Types.SET_USER_REQUEST:
            return {
                ...state,
            };
        case Types.SET_USER_SUCCESS:
            return {
                ...state,
                userId: action.payload,
                hasUser: true,
            };
        case Types.SET_USER_ERROR:
            return {
                ...state,
                hasUser: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default UserReducer;
