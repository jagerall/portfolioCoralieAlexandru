import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const PageTransitionContext = createContext();

export const usePageTransition = () => useContext(PageTransitionContext);

export const PageTransitionProvider = ({ children }) => {
    const [transitionState, setTransitionState] = useState({
        isAnimating: false,
        rect: null,
        color: '#FA0026',
    });
    const navigate = useNavigate();
    const location = useLocation();

    const startTransition = (event, targetPath, color = '#FA0026') => {
        const cardRect = event.currentTarget.getBoundingClientRect();
        setTransitionState({
            isAnimating: true,
            rect: cardRect,
            color,
        });

        // Delay navigation until the circle scale-up animation is mostly complete
        setTimeout(() => {
            navigate(targetPath);
        }, 600);
    };

    // When the location changes, hide the overlay with an exit transition
    useEffect(() => {
        setTransitionState((prev) => ({ ...prev, isAnimating: false }));
    }, [location]);

    return (
        <PageTransitionContext.Provider value={{ startTransition }}>
            {children}
            <CircleTransitionOverlay state={transitionState} />
        </PageTransitionContext.Provider>
    );
};

const CircleTransitionOverlay = ({ state }) => {
    const { isAnimating, rect, color } = state;

    if (!rect) return null;

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate maximum distance to the furthest screen corner to fully cover it
    const distToTopLeft = Math.hypot(x, y);
    const distToTopRight = Math.hypot(window.innerWidth - x, y);
    const distToBottomLeft = Math.hypot(x, window.innerHeight - y);
    const distToBottomRight = Math.hypot(window.innerWidth - x, window.innerHeight - y);
    const maxDistance = Math.max(distToTopLeft, distToTopRight, distToBottomLeft, distToBottomRight);

    // Diameter factor calculation
    const targetScale = (maxDistance * 2.2) / rect.width;

    return (
        <AnimatePresence>
            {isAnimating && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    overflow: 'hidden'
                }}>
                    <motion.div
                        initial={{
                            position: 'absolute',
                            left: x,
                            top: y,
                            width: rect.width,
                            height: rect.height,
                            borderRadius: '50%',
                            x: '-50%',
                            y: '-50%',
                            scale: 1,
                            backgroundColor: color,
                        }}
                        animate={{
                            scale: targetScale,
                            transition: {
                                duration: 0.6,
                                ease: [0.76, 0, 0, 1]
                            }
                        }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.4, ease: 'easeOut' }
                        }}
                    />
                </div>
            )}
        </AnimatePresence>
    );
};
