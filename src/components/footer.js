import React from 'react';
import FooterLink from './footerLink';
import '../style/footer.scss';
import Link from './link';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <div className="footer-links-list">
                    <span>&copy; 2025 Coralie Alexandru</span>

                    <div className="separator hide-for-tablet-down"></div>
                    <Link to="/mentions-legales" label="Mentions légales"/>
                </div>
                <div className="footer-links-icons">
                    <FooterLink
                        to="https://www.linkedin.com/in/coralie-alexandru-0a57391b9/"
                        icon={"/assets/icon-linkedin.svg"}
                        iconAlt="Linkedin"
                    />
                    <FooterLink
                        to="https://www.behance.net/coraliealexand1"
                        icon={"/assets/icon-behance.svg"}
                        iconAlt="Behance"
                    />
                    <FooterLink
                        mailto="coralie.alexandru@gmail.com"
                        icon={"/assets/icon-mail.svg"}
                        iconAlt="Email"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
