import React from 'react';
import { Link } from 'react-router-dom';
import '../style/link.scss';

const HeaderLink = ({ to, label }) => {
    const isExternal = to.endsWith('.pdf') || to.startsWith('http');

    return isExternal ? (
        <a href={to} className="link" target="_blank" rel="noopener noreferrer">
            <span className="link-text">{label}</span>
        </a>
    ) : (
        <Link to={to} className="link">
            <span className="link-text">{label}</span>
        </Link>
    );
};

export default HeaderLink;
