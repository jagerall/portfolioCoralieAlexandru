import React from 'react';
import { Link } from 'react-router-dom';
import '../style/footerLink.scss';

const FooterLink = ({ to, label,icon, iconAlt }) => {
    return (
        <Link className="footer-link" to={to}>
            {label}
            <img src={icon} alt={iconAlt}/>
        </Link>
    );
};

export default FooterLink;
