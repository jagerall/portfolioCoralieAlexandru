import React from 'react';
import { Link } from 'react-router-dom';
import '../style/footerLink.scss';

const FooterLink = ({ to, label }) => {
    return (
        <Link className="footer-link" to={to}>
            {label}
        </Link>
    );
};

export default FooterLink;
