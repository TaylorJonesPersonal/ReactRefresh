import React from 'react';
import { Images } from '../../assets/images';
import styles from './index.module.css';
import '../../App.module.css';
import { Link } from 'react-router-dom';

export const Headline: React.FC<any> = () => (
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
            <Link
                to={'/logout'}
                className={styles.Tools__Links}
            >{`Log Out`}</Link>
        </div>
    </div>
);
