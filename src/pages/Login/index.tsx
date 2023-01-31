import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../App.module.css';
import styles from './index.module.css';
import { CustomInputGroup, InputTypes } from '../../components';

export const Login: React.FC<any> = () => {
    const { user, loginWithRedirect, logout } = useAuth0();

    const handleLogIn = (): void => {
        void loginWithRedirect();
    };

    const handleLogOut = (): void => {
        void logout();
    };

    return (
        <div className={styles.Container}>
            <h1 className="headings">{`College Connect`}</h1>

            <CustomInputGroup
                inputSet={[
                    {
                        label: 'Login',
                        type: InputTypes.BUTTON,
                        onClick: () => handleLogIn(),
                    },
                    {
                        label: 'Logout',
                        type: InputTypes.BUTTON,
                        onClick: () => handleLogOut(),
                    },
                ]}
            />

            <h1>{user?.email}</h1>
        </div>
    );
};
