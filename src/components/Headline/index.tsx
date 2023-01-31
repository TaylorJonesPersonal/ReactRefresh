import React from 'react';
import { Images } from '../../assets/images';
import styles from './index.module.css';
import '../../App.module.css';
import { useAuth0 } from '@auth0/auth0-react';

export const Headline: React.FC<any> = () => {
    const { logout } = useAuth0();

    const handleLogOut = (): void => {
        void logout({
            logoutParams: { returnTo: process.env.REACT_APP_AUTH0_RETURN_TO },
        });
    };
    return (
        <div className={styles.Headline}>
            <header className={styles.Headline__Logo}>
                <img
                    src={Images.delta}
                    height={100}
                    width={72.5}
                    style={{ display: 'inline' }}
                />
                <h1 className="headings">{`Your College Connection`}</h1>
            </header>
            <div className={styles.Tools}>
                <span
                    className={styles.Headline__Link}
                    onClick={handleLogOut}
                >{`Logout`}</span>
            </div>
        </div>
    );
};
