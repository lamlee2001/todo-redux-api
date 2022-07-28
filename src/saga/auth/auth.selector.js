export const addUserSelector = (state) => {
    return state.user.userList;
};

export const isSignInSelector = (state) => {
    return state.user.isSignIn;
};

export const userIdSelector = (state) => {
    return state.user.userId;
};

export const hasUserSelector = (state) => {
    return state.user.hasUser;
};
