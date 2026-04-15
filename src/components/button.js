import React from 'react';
import { Link } from 'react-router-dom';
import '../style/button.scss';

const Button = ({ to, onClick, label, className = '', type = 'button', external = false }) => {
    // Si c'est un lien externe (http, https), on utilise <a>
    if (external) {
        return (
            <a href={to} className={`button ${className}`} target="_blank" rel="noopener noreferrer">
                <div className="button-text">{label}</div>
                <span className="button-icon"><img src={"/assets/icons/icon-external-link.svg"} alt={"Icone lien externe"}/></span>
            </a>
        );
    }

    // Si c'est un lien interne (react-router-dom)
    if (to) {
        return (
            <Link to={to} className={`button ${className}`}>
                <span className="button-text">{label}</span>
            </Link>
        );
    }

    // Si c'est un bouton classique
    return (
        <button type={type} onClick={onClick} className={`button ${className}`}>
            <span className="button-text">{label}</span>
        </button>
    );
};

export default Button;
