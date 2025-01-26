import React from 'react';
import { Link } from 'react-router-dom';
import '../style/headerlink.scss';

const HeaderLink = ({ to, label }) => {
    return (
        <Link to={to} className="header-link">
            {label}
        </Link>
    );
};

export default HeaderLink;