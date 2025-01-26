import React from 'react';
import FooterLink from './footerLink';
import '../style/footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                <FooterLink to="/mentions-legales" label="Mentions légales" />
                <FooterLink to="/CV" label="CV" />
            </div>
            <p>&copy; 2025 Coralie Alexandru. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;
