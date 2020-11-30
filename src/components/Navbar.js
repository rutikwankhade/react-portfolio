import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/" ><span className="link">Home</span></Link>
            <Link to="/about" ><span className="link">About</span></Link>
            <Link to="/contact" className="link">Contact</Link>

        </div>
    );
}

export default Navbar;