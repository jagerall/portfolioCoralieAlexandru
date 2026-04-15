import React from 'react';
import { Link } from 'react-router-dom';
import '../style/link.scss';

const HeaderLink = ({ to, href, label }) => {
    const url = to || href;
    const isExternal = url.startsWith('http') || url.endsWith('.pdf');

    return isExternal ? (
        <a href={url} className="link bold" target="_blank" rel="noopener noreferrer">
            <div className="link-container">
            <div className="link-text">{label}</div>
                {/*<span className="link-icon"><img src={"/assets/icons/icon-external-link.svg"} alt={"Icone lien externe"}/></span>*/}
            </div>
        </a>
    ) : (
        <Link to={url} className="link">
            <span className="link-text">{label}</span>
        </Link>
    );
};

export default HeaderLink;
