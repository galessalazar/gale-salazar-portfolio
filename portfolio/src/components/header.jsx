import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Gale Salazar</h1>
            <nav>
                <ul>
                    <li><Link to='/about'>About me</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/resume'>Resume</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;