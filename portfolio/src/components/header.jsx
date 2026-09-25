import React from 'react';
import { Link } from 'react-router-dom';
import FooterLink from './footerLink';
import '../style/header.scss';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="header-logo-link">
                <span className="header-text-logo bold" style={{ fontSize: '1.4vw'}}>
                    coralie
                    alexandru
                </span>
            </Link>
            {/* Navigation (Desktop & Mobile) */}
            <nav className="main-nav">
                <a 
                    href="#contact" 
                    className="header-nav-link bold"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({
                            top: document.documentElement.scrollHeight,
                            behavior: 'smooth'
                        });
                    }}
                >
                    contact
                </a>
                <a href="https://www.linkedin.com/in/coralie-alexandru-0a57391b9/" target="_blank" rel="noopener noreferrer" className="header-nav-link bold">
                    linkedin
                </a>
                <a href="https://www.behance.net/coraliealexand1" target="_blank" rel="noopener noreferrer" className="header-nav-link bold">
                    behance
                </a>
            </nav>
        </header>
    );
}

export default Header;