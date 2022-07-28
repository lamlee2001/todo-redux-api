/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { hasUserSelector } from '../saga/auth/auth.selector';
import PrivateNav from './privateNav';
import PublicNav from './publicNav';
import ResolveNav from './resolveNav';
const RootNavigator = () => {
    const [hasUser, setHasUser] = useState(useSelector(hasUserSelector));
    const location = useLocation();
    const renderUI = useMemo(() => {
        const isLogin = localStorage.getItem('token');
        if (hasUser) {
            return <PrivateNav setHasUser={setHasUser} />;
        } else if (isLogin) {
            return <ResolveNav setHasUser={setHasUser} />;
        }
        return <PublicNav />;
    }, [hasUser, location]);

    return <>{renderUI}</>;
};

export default RootNavigator;
