import { Link } from 'react-router-dom';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
function Nav(){
    return (
        <Navbar className='nav-bar'>
          {/* <Link to="../relationship">Hamburger icon</Link> */}
            <Link to="/">Home</Link>
            <Link to="../create_post">Upload</Link>
            <Link to="../message">Message</Link>
            <Link to="../profile">Profie</Link>
            <Link to="../setting">Setting</Link>
            <Link to="../login">Login</Link>
        

        </Navbar>
    );
}
export default Nav;