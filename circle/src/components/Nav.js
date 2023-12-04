import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Nav(props){
    const { loggedIn, email } = props
    const navigate = useNavigate();
    
    const onButtonClick = () => {
        // You'll update this function later
    }
    return (
        <nav className='nav-bar'>
            <Link to="../relationship">Hamburger icon</Link>
            <Link to="/">Home</Link>
            <Link to="../create_post">Upload</Link>
            <Link to="../message">Message</Link>
            <Link to="../profile">Profie</Link>
            <Link to="../setting">Setting</Link>
            <Link to="../login">
                <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={loggedIn ? "Log out" : "Log in"} />
            {(loggedIn ? <div>
                Your email address is {email}
            </div> : <div/>)}

            </Link>

        </nav>
    );
}
export default Nav;