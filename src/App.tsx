import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Avatar, Root } from './routes';

export const App: React.FC<any> = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    path: 'contacts/:contactId',
                    element: <Avatar />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;
