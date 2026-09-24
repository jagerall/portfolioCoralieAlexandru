import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import '../style/customCursor.scss';

const MAGNETIC_SELECTOR = 'a:not(.header-logo-link):not(.header-nav-link), button, [role="button"]:not(.card-wrapper), .header-link, .footer-link';
const MAGNETIC_RADIUS = -10;
const SNAP_RADIUS = 15;
const DEFAULT_SIZE = 25;
const DOT_SIZE = 10;
const HEADER_DOT_OFFSET_TOP = 64;
const FOOTER_DOT_OFFSET_TOP = 58;

const getDotCenter = (element) => {
    const rect = element.getBoundingClientRect();
    const isHeaderLink = element.classList.contains('header-link');
    const isFooterLink = element.classList.contains('footer-link');

    let targetX = rect.left + rect.width / 2;
    let targetY = rect.top + rect.height / 2;

    if (isHeaderLink) {
        targetY = rect.top + HEADER_DOT_OFFSET_TOP + DOT_SIZE / 2;
    } else if (isFooterLink) {
        targetY = rect.top + FOOTER_DOT_OFFSET_TOP + DOT_SIZE / 2;
    }

    return { x: targetX, y: targetY };
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
    const [isBreadcrumbHovered, setIsBreadcrumbHovered] = useState(false);

    const cursorRef = useRef(null);
    const activeLinkRef = useRef(null);
    const transitionTimeoutRef = useRef(null);
    const lastMousePos = useRef({ x: -100, y: -100 });

    const location = useLocation();

    // Valeurs Motion dynamiques pour gérer la largeur, la hauteur et le Border-Radius
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const width = useMotionValue(DEFAULT_SIZE);
    const height = useMotionValue(DEFAULT_SIZE);
    const borderRadius = useMotionValue('0');

    // Ressorts Framer Motion avec configurations souples
    const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };

    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);
    const springWidth = useSpring(width, springConfig);
    const springHeight = useSpring(height, springConfig);
    const springBorderRadius = useSpring(borderRadius, springConfig);

    // Réinitialisation du curseur lors des changements de page
    useEffect(() => {
        setIsCardHovered(false);
        setIsBreadcrumbHovered(false);
        setIsMagnetic(false);
        setIsTransitioning(false);
        width.set(DEFAULT_SIZE);
        height.set(DEFAULT_SIZE);
        borderRadius.set('0');
        if (activeLinkRef.current) {
            activeLinkRef.current.classList.remove('magnetic-cursor-active');
            activeLinkRef.current = null;
        }
    }, [location, width, height, borderRadius]);

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

        const updateCursor = (target, clientX, clientY) => {
            const hoveredCard = target?.closest?.('.card, .media-item-editorial, .intro-content');
            const hoveredBreadcrumb = target?.closest?.('.breadcrumb-link, .project-external-link, .header-nav-link, .header-text-logo, .footer-email');

            // --- CAS 1: SURVOL D'UNE CARD ---
            if (hoveredCard) {
                const rect = hoveredCard.getBoundingClientRect();

                x.set(rect.left + rect.width / 2);
                y.set(rect.top + rect.height / 2);

                width.set(rect.width);
                height.set(rect.height);
                borderRadius.set('0');

                setIsCardHovered(true);
                setIsBreadcrumbHovered(false);
                setActiveLink(null);
                return;
            }

            // --- CAS 1.5: SURVOL D'UN BREADCRUMB ---
            if (hoveredBreadcrumb) {
                const rect = hoveredBreadcrumb.getBoundingClientRect();

                x.set(rect.left + rect.width / 2);
                y.set(rect.top + rect.height / 2);

                width.set(rect.width);
                height.set(rect.height);
                borderRadius.set('0');

                setIsBreadcrumbHovered(true);
                setIsCardHovered(false);
                setActiveLink(null);
                return;
            }

            // Réinitialisation des états spécifiques si on en sort
            setIsCardHovered(false);
            setIsBreadcrumbHovered(false);
            borderRadius.set('0');

            // --- CAS 2: ÉLÉMENTS MAGNÉTIQUES (BOUTONS / LIENS) ---
            let targetX = clientX;
            let targetY = clientY;
            let closestLink = null;
            let closestPull = 0;

            document.querySelectorAll(MAGNETIC_SELECTOR).forEach((link) => {
                const rect = link.getBoundingClientRect();
                const isHoveringLink =
                    clientX >= rect.left &&
                    clientX <= rect.right &&
                    clientY >= rect.top &&
                    clientY <= rect.bottom;

                const dot = getDotCenter(link);
                const distance = Math.hypot(clientX - dot.x, clientY - dot.y);
                const pull = getMagneticPull(distance, isHoveringLink);

                if (pull > closestPull) {
                    closestPull = pull;
                    closestLink = link;
                }
            });

            if (closestLink && closestPull > 0) {
                const targetDotSize = DOT_SIZE;

                const dot = getDotCenter(closestLink);

                targetX = clientX + (dot.x - clientX) * closestPull;
                targetY = clientY + (dot.y - clientY) * closestPull;

                const newSize = DEFAULT_SIZE - (DEFAULT_SIZE - targetDotSize) * closestPull;
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

        const handleMouseMove = (event) => {
            setVisible(true);
            lastMousePos.current = { x: event.clientX, y: event.clientY };
            updateCursor(event.target, event.clientX, event.clientY);
        };

        const handleScroll = () => {
            // Update cursor on scroll based on last known mouse position
            const { x, y } = lastMousePos.current;
            if (x === -100 && y === -100) return; // Mouse hasn't moved yet
            
            const target = document.elementFromPoint(x, y);
            if (target) {
                updateCursor(target, x, y);
            }
        };

        const handleMouseLeave = () => {
            setVisible(false);
            setActiveLink(null);
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.documentElement.classList.remove('custom-cursor-active');
            activeLinkRef.current?.classList.remove('magnetic-cursor-active');
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
        };
    }, [height, width, x, y, borderRadius]);

    if (!enabled) return null;

    return (
        <motion.div
            ref={cursorRef}
            className={`custom-cursor ${isCardHovered ? 'is-card-hover' : ''} ${isBreadcrumbHovered ? 'is-breadcrumb-hover' : ''}`}
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