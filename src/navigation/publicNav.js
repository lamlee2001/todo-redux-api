import React from 'react';
import HeaderPublic from '../layout/headerPublic/headerPublic';
import PublicRouter from '../routers/publicRouter';

function PublicNav() {
    return (
        <>
            <HeaderPublic />
            <PublicRouter />
        </>
    );
}

export default PublicNav;
