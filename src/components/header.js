import React from 'react';
import {Link} from 'react-router-dom';
import HeaderLink from '../components/headerlink';
import '../style/header.scss';
function Header() {
    return (
        <header className="header">
            <img className="header-image" src='../assets/header-illu.png' alt="Illustration Coralie"></img>
            <nav className="nav">
                <HeaderLink to="/uiux" label="UI/UX"/>
                <HeaderLink to="/da" label="DA"/>
                <HeaderLink to="/photo" label="Photographie"/>
                <HeaderLink to="/illu" label="Illustration"/>
                <HeaderLink to="/about" label="Moi?"/>
            </nav>
        </header>
    );
}

export default Header;