import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
} from 'react-router-dom';

import { Auth0ProviderWithNavigate } from './components/Auth/Auth0ProviderWithNavigate';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import { Callback } from './pages/Callback';
import { Home } from './pages/Home';
import { Login } from './pages/Login';

export const Routes: React.FC<any> = () => {
    const Auth0ProviderLayout = (): JSX.Element => (
        <Auth0ProviderWithNavigate>
            <Outlet />
        </Auth0ProviderWithNavigate>
    );

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Auth0ProviderLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/callback" element={<Callback />} />
                <Route path="/home" element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home />} />
                </Route>
            </Route>,
        ),
    );

    return <RouterProvider router={router} />;
};
