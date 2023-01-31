import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet } from 'react-router-dom';
import { Callback } from '../../pages/Callback';

export const ProtectedRoute: React.FC<any> = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    useEffect(() => {
        const interval = setInterval(() => {
            console.log(isAuthenticated);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    if (isLoading) {
        return <Callback />;
    }
    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />;
};
