/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React from 'react';
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

export const Auth0ProviderWithNavigate: React.FC<any> = ({ children }) => {
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const redirectUri = process.env.REACT_APP_AUTH0_REDIRECT_URI;

    console.log(domain, clientId, redirectUri);

    const navigate = useNavigate();

    const onRedirectCallback = (appState?: AppState): void => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    if (!(clientId && domain)) {
        return null;
    }

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: process.env.REACT_APP_AUTH0_REDIRECT_URI,
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};
