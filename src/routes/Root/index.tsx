import React from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav } from '../../components/SideNav';
import styles from './index.module.css';

export const Root: React.FC<any> = () => {
    return (
        <div className={styles.Root}>
            <div className={styles.Root__SideNav}>
                <SideNav />
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};
