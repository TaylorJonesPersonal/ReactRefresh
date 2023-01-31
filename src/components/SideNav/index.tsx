import { useState, useEffect } from 'react';
import { CustomInputGroup, InputTypes } from '../CustomInputGroup';
import { Contacts } from './types';
import { Link } from 'react-router-dom';
import styles from './index.module.css';
import '../../App.module.css';

const contactLoader = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                id: 1,
                name: 'Natawnee',
                email: 'natawneetjk@gmail.com',
            },
            {
                id: 2,
                name: 'Zachary',
                email: 'oddgnomemc99@gmail.com',
            },
            {
                id: 3,
                name: 'Donna',
                email: 'djoinor1@charter.net',
            },
        ]);
    }, 500);
});

export const SideNav: React.FC<any> = () => {
    const [myContacts, setMyContacts] = useState<Contacts[]>([]);

    const loadContacts: any = async () => {
        await contactLoader.then((value: any) => setMyContacts(value));
    };

    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <>
            <div id="sidebar">
                <h1 className="headings">{`Your contacts`}</h1>
                <div>
                    <CustomInputGroup
                        row={false}
                        inputSet={[
                            {
                                label: 'New contact: ',
                                type: InputTypes.PASSWORD,
                            },
                            {
                                label: 'Submit',
                                type: InputTypes.BUTTON,
                                onClick: () => console.log('PRESSED.'),
                            },
                        ]}
                    />
                </div>
                <nav>
                    <ul className={styles.ContactsList}>
                        {myContacts.map((contact: Contacts, index: number) => (
                            <li key={index}>
                                <Link
                                    to={`contacts/${contact.id}`}
                                    className={styles.ContactsList__items}
                                >
                                    {contact.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};
