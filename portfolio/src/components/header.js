import React, {useState, useEffect} from 'react';
import {useLocation, Link} from 'react-router-dom';
import HeaderLink from '../components/headerlink';
import '../style/header.scss';
import Button from "./button";

const category = {
    "/uiux": "uiux",
    "/da": "da",
    "/uiux/booking": "uiux",
    "/uiux/voiesavenir": "uiux",
    "/uiux/pasnumerise": "uiux",
    "/uiux/flop": "uiux",
    "/uiux/maria": "uiux",
    "/uiux/capc": "uiux",
    "/uiux/smash": "uiux",
    "/uiux/reserve": "uiux",
    "/da/gfy": "da",
    "/da/penmarch": "da",
    "/da/wordbroker": "da",
};

function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();


    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const activeCategory = category[
        Object.keys(category).find((path) => location.pathname.startsWith(path))
        ] || null;

    const handleMenuToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header className="header">
            <Link to="/">
                <img
                    className={`header-image`}
                    src='../assets/ca-logo-header.svg'
                    alt="Logo"
                />
            </Link>
            {/* Navigation (Desktop & Mobile) */}
            <nav className="main-nav">
                <HeaderLink to="/da" label="Direction Artistique" isActive={activeCategory === "da"}/>
                <HeaderLink to="/uiux" label="UI/UX" isActive={activeCategory === "uiux"}/>
            </nav>
        </header>
    );
}

export default Header;