import React from 'react';
import FooterLink from './footerLink';
import '../style/footer.scss';
import Link from './link';

const Footer = () => {
    return (
        <footer className="footer">
            <span className="footer-text bold">Contact</span>
            <div className="footer-links bold">
                <FooterLink
                    to="https://www.linkedin.com/in/coralie-alexandru-0a57391b9/"
                    label="Linkedin"
                />
                <FooterLink
                    to="https://www.behance.net/coraliealexand1"
                    label="Behance"
                />
                <FooterLink
                    mailto="coralie.alexandru@gmail.com"
                    label="Email"
                />
            </div>
        </footer>
    );
};

export default Footer;