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

        // Delay navigation until the blur animation is complete
        setTimeout(() => {
            navigate(targetPath);
        }, 500);
    };

    // When the location changes, hide the overlay with an exit transition
    useEffect(() => {
        setTransitionState((prev) => ({ ...prev, isAnimating: false }));
    }, [location]);

    return (
        <PageTransitionContext.Provider value={{ startTransition }}>
            {children}
            <BlurTransitionOverlay state={transitionState} />
        </PageTransitionContext.Provider>
    );
};

const BlurTransitionOverlay = ({ state }) => {
    const { isAnimating, color } = state;

    return (
        <AnimatePresence>
            {isAnimating && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    overflow: 'hidden'
                }}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            backdropFilter: 'blur(0px)',
                            WebkitBackdropFilter: 'blur(0px)',
                        }}
                        animate={{
                            opacity: 1,
                            backdropFilter: 'blur(30px)',
                            WebkitBackdropFilter: 'blur(30px)',
                            backgroundColor: color,
                            transition: {
                                duration: 0.5,
                                ease: 'easeInOut'
                            }
                        }}
                        exit={{
                            opacity: 0,
                            backdropFilter: 'blur(0px)',
                            WebkitBackdropFilter: 'blur(0px)',
                            transition: { duration: 0.5, ease: 'easeOut' }
                        }}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
            )}
        </AnimatePresence>
    );
};
