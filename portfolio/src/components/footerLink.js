import React from 'react';
import { Link } from 'react-router-dom';
import '../style/footerLink.scss';

const FooterLink = ({ to, mailto, label }) => {
    const handleClick = (event) => {
        if (mailto) {
            event.preventDefault();
            navigator.clipboard.writeText(mailto).then(() => {
                alert("E-mail copié !");
            }).catch((err) => {
                console.error("Erreur lors de la copie de l'e-mail :", err);
            });
        }
    };

    return (
        <>
            {mailto ? (
                <a
                    href={`mailto:${mailto}`}
                    className="footer-link"
                    onClick={handleClick}
                >
                    {label}
                </a>
            ) : (
                <Link className="footer-link" to={to} target="_blank" rel="noopener noreferrer">
                    {label}
                </Link>
            )}
        </>
    );
};

export default FooterLink;