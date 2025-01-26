import React, {useState} from 'react';
import HeaderLink from '../components/headerlink';
import '../style/header.scss';

function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [tooltip, setTooltip] = useState(null);

    const handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        setTooltip({x: clientX, y: clientY});
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTooltip(null);
    };

    return (
        <header className="header">
            <div className="image-container"
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 onMouseMove={handleMouseMove}>
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
                <div
                    className="tooltip"
                    style={{
                        top: tooltip.y + 10,
                        left: tooltip.x + 10,
                    }}
                >
                  personne très cool
                </div>
            )}
            <nav className="header-nav">
                <HeaderLink to="/uiux" label="UI/UX"/>
                <HeaderLink to="/da" label="DA"/>
                <HeaderLink to="/photo" label="Photographie"/>
                <HeaderLink to="/illu" label="Illustration"/>
                <HeaderLink to="/about" label="À propos"/>
            </nav>
        </header>
    );
}

export default Header;
