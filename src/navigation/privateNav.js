import React from 'react';
import HeaderPrivate from '../layout/headerPrivate/headerPrivate';
import PrivateRouter from '../routers/privateRouter';

function PrivateNav() {
    return (
        <>
            <HeaderPrivate />
            <PrivateRouter />
        </>
    );
}

export default PrivateNav;
