import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserRequest } from '../saga/auth/auth.actions';

function ResolveNav({ setHasUser }) {
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setUserRequest());
            setHasUser(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    return (
        <>
            <h1>LOADING</h1>
        </>
    );
}

export default ResolveNav;
