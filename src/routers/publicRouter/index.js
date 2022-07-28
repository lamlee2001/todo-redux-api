import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../page/notFound/notFound';
import Register from '../../page/register/register';
import SignIn from '../../page/signIn/signIn';

function PublicRouter() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />}>
                <Route path="home" element={<SignIn />} />
                <Route path="signIn" element={<SignIn />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default PublicRouter;
