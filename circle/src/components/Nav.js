import { Link } from 'react-router-dom';
import React from 'react';

function Nav(){
    return (
        <nav className='nav-page'>
            <Link to="../relationship">Hamburger icon</Link>
            <Link to="/">Home</Link>
            <input>Search</input>
            <Link to="../create_post">Upload</Link>
            <Link to="../message">Message</Link>
            <Link to="../profile">Profie</Link>
            <Link to="../setting">Setting</Link>

        </nav>
    );
}
export default Nav;