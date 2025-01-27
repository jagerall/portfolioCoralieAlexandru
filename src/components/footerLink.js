import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/footerLink.scss';

const FooterLink = ({ to, mailto, label, icon, iconAlt }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = (event) => {
        if (mailto) {
            event.preventDefault();
            navigator.clipboard.writeText(mailto).then(() => {
                setIsClicked(true);

                setTimeout(() => {
                    setIsClicked(false);
                }, 1500);
            }).catch((err) => {
                console.error("Erreur lors de la copie de l'e-mail :", err);
            });
        }
    };

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <>
            {mailto ? (
                <a
                    href={`mailto:${mailto}`}
                    className="footer-link"
                    onClick={handleClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {label}
                    <img src={icon} alt={iconAlt} />

                    {showTooltip && (
                        <div className="tooltip">
                            {isClicked ? "E-mail copié !" : "Cliquez pour copier l'e-mail"}
                        </div>
                    )}
                </a>
            ) : (
                <Link className="footer-link" to={to}>
                    {label}
                    <img src={icon} alt={iconAlt} />
                </Link>
            )}
        </>
    );
};

export default FooterLink;
