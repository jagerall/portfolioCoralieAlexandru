import React from 'react';
import FooterLink from './footerLink';
import '../style/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-links">
                <div className="footer-links-list">
                    <span>&copy; 2025 Coralie Alexandru</span>
                    <div className="separator"></div>
                    <span>Tous droits réservés.</span>
                    <div className="separator"></div>
                    <FooterLink to="/mentions-legales" label="Mentions légales"/>
                    <div className="separator"></div>
                    <FooterLink to="/CV" label="CV"/>
                </div>
                <div className="footer-links-list">
                    <FooterLink to="/mentions-legales" icon={"../assets/icon-linkedin.svg"} iconAlt={"Linkedin"}/>
                    <FooterLink to="/mentions-legales" icon={"../assets/icon-behance.svg"} iconAlt={"Behance"}/>
                    <FooterLink to="/mentions-legales" icon={"../assets/icon-mail.svg"} iconAlt={"Email"}/>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
