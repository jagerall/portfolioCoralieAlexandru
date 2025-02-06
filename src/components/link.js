import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style/link.scss';

const HeaderLink = ({ to, label }) => {
    const location = useLocation();

    return (
        <Link to={to} className={`link`}>
            <span className={`link-text`}>{label}</span>
        </Link>
    );
};

export default HeaderLink;
