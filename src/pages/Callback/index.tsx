import React from 'react';
import { Headline, SideNav } from '../../components';
import styles from './index.module.css';

export const Callback: React.FC<any> = () => (
    <div className={styles.Root}>
        <div className={styles.NavContainer}>
            <div className={styles.NavContainer__SideNav}>
                <SideNav />
            </div>
            <div className={styles.Content}>
                <div className={styles.Content__Headline}>
                    <Headline />
                </div>
            </div>
        </div>
    </div>
);
