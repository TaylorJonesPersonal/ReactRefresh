import React from 'react';
import styles from './index.module.css';

export const Anchor: React.FC<any> = () => (
    <footer className={styles.Anchor}>
        <p
            className={styles.Anchor__Text}
        >{`This content made for the proprietary use of colleges. Created by Taylor Jones.`}</p>
    </footer>
);
