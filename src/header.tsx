import React from 'react';

export function Header() {
    return (
        <header>
            <img src='sun.png' className='logo' />
            <ul className='menu'>
                <li>About</li>
                <li>News</li>
                <li>Contacts</li>
            </ul>
        </header>
    )
}