import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/headerlink.scss';

const HeaderLink = ({ to, label }) => {
    const location = useLocation();
    const isActive = location.pathname.startsWith(to);

    return (
        <Link to={to} className={`header-link ${isActive ? 'active' : ''}`}>
            {label}
        </Link>
    );
};

export default HeaderLink;
