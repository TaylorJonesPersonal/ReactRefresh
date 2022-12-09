import React from 'react';
import { Outlet } from 'react-router-dom';
import { Anchor } from '../../components/Anchor';
import { Headline } from '../../components/Headline';
import { SideNav } from '../../components/SideNav';
import styles from './index.module.css';

export const Root: React.FC<any> = () => {
    return (
        <div className={styles.Root}>
            <div className={styles.NavContainer}>
                <div className={styles.NavContainer__SideNav}>
                    <SideNav />
                </div>
                <div className={styles.Content}>
                    <div className={styles.Content__Headline}>
                        <Headline />
                    </div>
                    <div className={styles.Content__Material}>
                        <Outlet />
                        <Anchor />
                    </div>
                </div>
            </div>
        </div>
    );
};
