import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderLink from '../components/headerlink';
import '../style/header.scss';
import Button from "./button";

function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [tooltip, setTooltip] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Ferme le menu lorsqu'on change de page
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Gère le tooltip en desktop (suivi de la souris)
    const handleMouseMove = (e) => {
        setTooltip({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
        setTooltip(null); // Cache le tooltip quand la souris quitte l’image
        setIsHovered(false);
    };

    // Gère l'affichage temporaire du tooltip en mobile
    const handleImageClick = () => {
        setTooltip({ x: "50%", y: "30%" });
        setTimeout(() => {
            setTooltip(null);
        }, 2000);
    };

    const handleMenuToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header className="header">
            <div className="image-container"
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={handleMouseLeave}
                 onMouseMove={handleMouseMove}
                 onClick={handleImageClick}
            >
                <img
                    className={`header-image ${isHovered ? 'fade-out' : 'fade-in'}`}
                    src='../assets/header-illu.png'
                    alt="Illustration"
                />
                <img
                    className={`header-image ${isHovered ? 'fade-in' : 'fade-out'}`}
                    src='../assets/header-illu-eye.png'
                    alt="Illustration Eye"
                />
            </div>

            {tooltip && (
                <div className="tooltip" style={{ top: tooltip.y, left: tooltip.x }}>
                    personne très cool
                </div>
            )}

            {/* Bouton Menu Mobile */}
            <Button className="menu-button mobile-only" onClick={handleMenuToggle} label={menuOpen ? "Menu" : "Menu"} />

            {/* Navigation Desktop */}
            <nav className="desktop-nav">
                <HeaderLink to="/uiux" label="UI/UX" />
                <HeaderLink to="/photo" label="Photographie" />
                <HeaderLink to="/illu" label="Illustration" />
                <HeaderLink to="/autres" label="Autres" />
                <HeaderLink to="/about" label="À propos" />
            </nav>

            {/* Menu Mobile */}
            <div className={`mobile-menu ${menuOpen ? 'open' : 'closed'}`}>
                <Button className="close-menu" onClick={handleMenuToggle} label={"✕"} />
                <nav className="menu-nav">
                    <HeaderLink to="/uiux" label="UI/UX" />
                    <HeaderLink to="/photo" label="Photographie" />
                    <HeaderLink to="/illu" label="Illustration" />
                    <HeaderLink to="/autres" label="Autres" />
                    <HeaderLink to="/about" label="À propos" />
                </nav>
            </div>
        </header>
    );
}

export default Header;
