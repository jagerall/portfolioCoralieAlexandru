import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.scss';
function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="#section1">Section 1</Link></li>
                    <li><Link to="#section2">Section 2</Link></li>
                    <li><Link to="#section3">Section 3</Link></li>
                    <li><Link to="#section4">Section 4</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;