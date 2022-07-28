import * as Types from './auth.type';

export const registerRequest = (params, callback) => ({ type: Types.REGISTER_USER_REQUEST, params, callback });
export const registerSuccess = (payload) => ({ type: Types.REGISTER_USER_SUCCESS, payload: payload });
export const registerError = (error) => ({ type: Types.REGISTER_USER_ERROR, error });

export const signInRequest = (params, callback) => ({ type: Types.SIGNIN_USER_REQUEST, params, callback });
export const signInSuccess = (payload) => ({ type: Types.SIGNIN_USER_SUCCESS, payload: payload });
export const signInError = (error) => ({ type: Types.SIGNIN_USER_ERROR, error });

export const logOutRequest = (params, callback) => ({ type: Types.LOGOUT_USER_REQUEST, params, callback });
export const logOutSuccess = (payload) => ({ type: Types.LOGOUT_USER_SUCCESS, payload: payload });
export const logOutError = (error) => ({ type: Types.LOGOUT_USER_ERROR, error });

export const setUserRequest = () => ({ type: Types.SET_USER_REQUEST });
export const setUserSuccess = (payload) => ({
    type: Types.SET_USER_SUCCESS,
    payload: payload,
});
export const setUserFailure = (error) => ({
    type: Types.SET_USER_ERROR,
    error,
});
