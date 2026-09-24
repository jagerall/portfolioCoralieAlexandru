import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FooterLink from './footerLink';
import '../style/footer.scss';
import Link from './link';

const Footer = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    });

    // Parallax values based on footer scroll progress
    const bgY1 = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const bgY2 = useTransform(scrollYProgress, [0, 1], [-200, 0]);
    const bgY3 = useTransform(scrollYProgress, [0, 1], [-250, 0]);
    const fgY = useTransform(scrollYProgress, [0, 1], [-200, 0]);

    return (
        <footer ref={ref} id="contact" className="footer-container">
            <div className="footer-bg-text-container">
                <motion.div className="footer-bg-text bold" style={{ y: bgY1 }}>encore</motion.div>
                <motion.div className="footer-bg-text bold" style={{ fontSize: '18vw', marginTop: '10vw', y: bgY2 }}>un autre</motion.div>
                <motion.div className="footer-bg-text bold" style={{ fontSize: '30vw', marginTop: '14vw', y: bgY3 }}>contact</motion.div>
            </div>
            <motion.div id="contact" style={{ y: fgY, position: 'absolute', bottom: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', zIndex: 10 }}>
                <a href="mailto:coralie.alexandru@gmail.com" className="footer-email bold" style={{ fontSize: '6vw' }}>
                    coralie.alexandru@gmail.com
                </a>
                <a href="tel:+33637076286" className="footer-email bold" style={{ fontSize: '3vw' }}>
                    06 37 07 62 86
                </a>
            </motion.div>
        </footer>
    );
};

export default Footer;