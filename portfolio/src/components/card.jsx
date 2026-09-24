import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import '../style/card.scss';
import Tag from './tag';

const Card = ({ image, label, onClick, type, tags, category, variants, initial, whileInView, viewport }) => {
    const tagsText = tags && tags.length > 0 ? tags.join(' • ') : '';
    const typeText = type ? type : '';
    const curvedTextContent = [label, typeText].filter(Boolean).join(' • ');
    const uniqueId = `curve-${label.replace(/\s+/g, '-').toLowerCase()}-${Math.random().toString(36).substr(2, 9)}`;

    const ref = useRef(null);
    const scaleSpring = useSpring(1, { stiffness: 300, damping: 20 });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const titleY = useTransform(scrollYProgress, [0, 1], [-50, 250]);

    // Parallax logic
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);
    const springConfig = { stiffness: 300, damping: 30 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const imgX = useTransform(springX, [0, 1], ["-2%", "2%"]);
    const imgY = useTransform(springY, [0, 1], ["-2%", "2%"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPos = (e.clientX - rect.left) / rect.width;
        const yPos = (e.clientY - rect.top) / rect.height;
        mouseX.set(xPos);
        mouseY.set(yPos);
    };

    const handleMouseEnter = () => {
        // Only parallax, no zoom
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    return (
        <motion.div
            className="card-wrapper"
            onClick={onClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick()}
            variants={variants}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`card ${category ? `card-${category}` : ''}`}
                style={{
                    zIndex: 10,
                    overflow: 'hidden'
                }}
            >
                <motion.img
                    src={image}
                    alt={label}
                    className="card-image"
                    style={{
                        x: imgX,
                        y: imgY,
                        width: '120%',
                        height: '120%',
                        position: 'relative',
                        objectFit: 'cover'
                    }}
                />
                <div className="overlay bold">
                </div>
            </div>

            <motion.div className="card-title-bottom bold" style={{ y: titleY }}>
                {label}
            </motion.div>
        </motion.div>
    );
};

export default Card;