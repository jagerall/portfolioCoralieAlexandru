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
                    icon="/assets/linkedin-logo.svg"
                    label="Linkedin"
                />
                <FooterLink
                    to="https://www.behance.net/coraliealexand1"
                    icon="/assets/behance-logo.svg"
                    label="Behance"
                />
            </div>
        </footer>
    );
};

export default Footer;