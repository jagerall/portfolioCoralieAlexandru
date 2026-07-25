import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import '../style/customCursor.scss';

const MAGNETIC_SELECTOR = 'a, button, [role="button"], .header-link, .footer-link';
const MAGNETIC_RADIUS = -20;
const SNAP_RADIUS = 15;
const DEFAULT_SIZE = 25;
const DOT_SIZE = 10;
const HEADER_DOT_OFFSET_TOP = 64;
const FOOTER_DOT_OFFSET_TOP = 58;

const getDotCenter = (element) => {
    const rect = element.getBoundingClientRect();
    const isHeaderLink = element.classList.contains('header-link');
    const isFooterLink = element.classList.contains('footer-link');

    let offsetTop = DOT_SIZE / 2;
    if (isHeaderLink) {
        offsetTop = HEADER_DOT_OFFSET_TOP + DOT_SIZE / 2;
    } else if (isFooterLink) {
        offsetTop = FOOTER_DOT_OFFSET_TOP + DOT_SIZE / 2;
    }

    return {
        x: rect.left + rect.width / 2,
        y: isHeaderLink || isFooterLink ? rect.top + offsetTop : rect.top + rect.height / 2,
    };
};

const getMagneticPull = (distance, isHoveringLink) => {
    if (isHoveringLink) return 1;
    if (distance >= MAGNETIC_RADIUS) return 0;
    if (distance <= SNAP_RADIUS) return 1;

    const t = 1 - (distance - SNAP_RADIUS) / (MAGNETIC_RADIUS - SNAP_RADIUS);
    return t * t * t * t;
};

const CustomCursor = () => {
    const [enabled, setEnabled] = useState(false);
    const [visible, setVisible] = useState(false);
    const [isMagnetic, setIsMagnetic] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isCardHovered, setIsCardHovered] = useState(false);
    const [isPulsing, setIsPulsing] = useState(false);

    const cursorRef = useRef(null);
    const activeLinkRef = useRef(null);
    const transitionTimeoutRef = useRef(null);

    // Valeurs Motion dynamiques pour gérer la largeur, la hauteur et le Border-Radius
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const width = useMotionValue(DEFAULT_SIZE);
    const height = useMotionValue(DEFAULT_SIZE);
    const borderRadius = useMotionValue('50%');

    // Ressorts Framer Motion avec configurations souples
    const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };

    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);
    const springWidth = useSpring(width, springConfig);
    const springHeight = useSpring(height, springConfig);
    const springBorderRadius = useSpring(borderRadius, springConfig);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const hasFinePointer = window.matchMedia('(pointer: fine)').matches;

        if (prefersReducedMotion || !hasFinePointer) return;

        setEnabled(true);
        document.documentElement.classList.add('custom-cursor-active');

        const setActiveLink = (link) => {
            if (activeLinkRef.current === link) return;

            if (activeLinkRef.current !== null) {
                setIsTransitioning(true);
                if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
                transitionTimeoutRef.current = setTimeout(() => setIsTransitioning(false), 300);
            }

            activeLinkRef.current?.classList.remove('magnetic-cursor-active');
            activeLinkRef.current = link;
            link?.classList.add('magnetic-cursor-active');
        };

        const handleMouseMove = (event) => {
            setVisible(true);

            const target = event.target;
            const hoveredCard = target?.closest?.('.card');
            const isProjectImage = target?.closest?.('.project-image-item');
            setIsPulsing(!!isProjectImage);

            // --- CAS 1: SURVOL D'UNE CARD ---
            if (hoveredCard) {
                const rect = hoveredCard.getBoundingClientRect();
                const computedStyle = window.getComputedStyle(hoveredCard);

                // On verrouille le curseur exactement au centre de la carte
                x.set(rect.left + rect.width / 2);
                y.set(rect.top + rect.height / 2);

                // Le curseur prend la taille de la carte (avec un léger padding de 8px pour bien l'entourer)
                width.set(rect.width + 8);
                height.set(rect.height + 8);

                // On recopie le border-radius de la carte (ex: 50% pour un cercle)
                borderRadius.set(computedStyle.borderRadius || '50%');

                setIsCardHovered(true);
                setActiveLink(null);
                return;
            }

            // Réinitialisation de l'état Card si on en sort
            setIsCardHovered(false);
            borderRadius.set('50%');

            // --- CAS 2: ÉLÉMENTS MAGNÉTIQUES (BOUTONS / LIENS) ---
            let targetX = event.clientX;
            let targetY = event.clientY;
            let closestLink = null;
            let closestPull = 0;

            document.querySelectorAll(MAGNETIC_SELECTOR).forEach((link) => {
                const rect = link.getBoundingClientRect();
                const isHoveringLink =
                    event.clientX >= rect.left &&
                    event.clientX <= rect.right &&
                    event.clientY >= rect.top &&
                    event.clientY <= rect.bottom;

                const dot = getDotCenter(link);
                const distance = Math.hypot(event.clientX - dot.x, event.clientY - dot.y);
                const pull = getMagneticPull(distance, isHoveringLink);

                if (pull > closestPull) {
                    closestPull = pull;
                    closestLink = link;
                }
            });

            if (closestLink && closestPull > 0) {
                const dot = getDotCenter(closestLink);

                targetX = event.clientX + (dot.x - event.clientX) * closestPull;
                targetY = event.clientY + (dot.y - event.clientY) * closestPull;

                const newSize = DEFAULT_SIZE - (DEFAULT_SIZE - DOT_SIZE) * closestPull;
                width.set(newSize);
                height.set(newSize);

                setActiveLink(closestLink);
                const isButton = closestLink.tagName === 'BUTTON' || closestLink.classList.contains('button');
                setIsMagnetic(isButton);
            } else {
                // --- CAS 3: CURSEUR PAR DÉFAUT ---
                width.set(DEFAULT_SIZE);
                height.set(DEFAULT_SIZE);
                setActiveLink(null);
                setIsMagnetic(false);
            }

            x.set(targetX);
            y.set(targetY);
        };

        const handleMouseLeave = () => {
            setVisible(false);
            setActiveLink(null);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.documentElement.classList.remove('custom-cursor-active');
            activeLinkRef.current?.classList.remove('magnetic-cursor-active');
            window.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
        };
    }, [height, width, x, y, borderRadius]);

    if (!enabled) return null;

    return (
        <motion.div
            ref={cursorRef}
            className={`custom-cursor ${isCardHovered ? 'is-card-hover' : ''} ${isPulsing ? 'is-pulsing' : ''}`}
            style={{
                left: springX,
                top: springY,
                x: '-50%',
                y: '-50%',
                width: springWidth,
                height: springHeight,
                borderRadius: springBorderRadius,
                opacity: visible && !isMagnetic ? 1 : 0,
            }}
            aria-hidden="true"
        />
    );
};

export default CustomCursor;