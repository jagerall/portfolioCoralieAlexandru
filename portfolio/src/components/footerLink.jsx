import React from 'react';
import { Link } from 'react-router-dom';
import '../style/footerLink.scss';

const FooterLink = ({ to, icon, label }) => {
    return (
        <Link className="footer-link" to={to} target="_blank" rel="noopener noreferrer">
            <img src={icon} alt={label} />
        </Link>
    );
};

export default FooterLink;