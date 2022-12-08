import { useState, useEffect } from 'react';
import { Contacts } from './types';

const contactLoader = new Promise(resolve => {
    setTimeout(() => {
        resolve([
            {
                name: 'Natawnee',
                email: 'natawneetjk@gmail.com',
            },
            {
                name: 'Zachary',
                email: 'oddgnomemc99@gmail.com',
            },
            {
                name: 'Donna',
                email: 'djoinor1@charter.net',
            },
        ]);
    });
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
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div id="search-spinner" aria-hidden hidden={true} />
                        <div className="sr-only" aria-live="polite"></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        {myContacts.map((contact: Contacts, index) => (
                            <li key={index}>{contact.name}</li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    );
};
