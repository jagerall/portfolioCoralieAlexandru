import React, {useEffect} from 'react';
import { usePageTransition } from './PageTransitionContext';
import {Helmet} from 'react-helmet';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Card from './card';
import '../style/pageContent.scss';
import '../style/home.scss';

const HomePage = () => {
    const { startTransition } = usePageTransition();
    const { scrollY } = useScroll(); // Track window scroll

    const bgY1 = useTransform(scrollY, [0, 1000], [0, 200]); 
    const bgY2 = useTransform(scrollY, [0, 1000], [0, 300]); 
    const bgY3 = useTransform(scrollY, [0, 1000], [0, 200]);
    const fgY = useTransform(scrollY, [0, 1000], [0, -200]); 
    const fgY2 = useTransform(scrollY, [0, 1000], [0, -100]);

    const pY1 = useTransform(scrollY, [0, 1000], [-100, 200]); 
    const pY2 = useTransform(scrollY, [0, 1000], [-50, -200]); 
    const pY3 = useTransform(scrollY, [0, 1000], [-100, 200]); 

    const homeProjects = [
        {
            id: 'reserve',
            label: 'La Réserve',
            image: '/assets/reserve-5.webp',
            category: 'uiux',
            type: 'Narration interactive',
            tags: ['Narration interactive'],
            description: "un jeu narratif créé avec le MusBA, où l'on monte sa propre salle d'expo à partir des réserves du musée"
        },
        {
            id: 'wordbroker',
            label: 'THE WORD_BROKER',
            image: '/assets/wordbroker-8.webp',
            category: 'da',
            type: 'Création interactive',
            tags: ['Exposition immersive'],
            description: "une installation interactive où l'on parle à une IA qui nous met un prix, pour montrer comment la société nous voit"
        },

        {
            id: 'sliced',
            label: 'Sliced',
            image: '/assets/sliced-2.png',
            category: 'da',
            type: 'Direction Artistique',
            tags: ['Direction Artistique'],
            description: "une exposition temporaire qui permet de voir les entrailles d'une multitude d'objets"
        },
        {
            id: 'liko',
            label: 'Liko',
            image: '/assets/liko-5.png',
            category: 'da',
            type: 'Direction Artistique',
            tags: ['Direction Artistique'],
            description: "une gourde qui infuse pendant l'effort et récompense à la descente, avec sa campagne pour AIGLE"
        },
        {
            id: 'gfy',
            label: 'Go Fail Yourself',
            image: '/assets/gfy-7.png',
            category: 'da',
            type: 'Campagne 360°',
            tags: ['Campagne 360°'],
            description: "une campagne 360° imaginée pour Black Diamond : pousser les grimpeurs à échouer pour prouver que leur matériel tient"
        },
        
    
    
    ];

    useEffect(() => {
        document.title = "Coralie Alexandru - Portfolio";
    }, []);

    return (
        <>
            <Helmet>
                <title>Coralie Alexandru - Portfolio</title>
                <meta name="description" content="Portfolio de Coralie Alexandru."/>
                <meta property="og:title" content="Coralie Alexandru - Portfolio"/>
                <meta property="og:description" content="Portfolio de Coralie Alexandru."/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="/assets/header-illu.wepb"/>
                <meta property="og:url" content="https://coraliealexandru.fr/"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Coralie Alexandru - Portfolio"/>
                <meta name="twitter:description" content="Portfolio de Coralie Alexandru."/>
                <meta name="twitter:image" content="/assets/header-illu.wepb"/>
                <meta name="robots" content="index, follow"/>
            </Helmet>

            <motion.main 
                className="home-page"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Hero Section */}
                <section className="home-hero">
                    <div className="hero-sub-text-container">
                        <h2 className="hero-sub-text bold">
                             <motion.div style={{ fontSize: '14vw', y: bgY1, marginBottom: '-2vw' }}>encore</motion.div>
                              <motion.div style={{ fontSize: '14vw', y: bgY1, marginBottom: '-1vw' }}>une autre</motion.div>
                            <motion.div style={{ fontSize: '14vw', y: bgY3 }}>
                               directrice artistique
                            </motion.div>
                        </h2>
                    </div>
                     <motion.h2 className="hero-main-subtext bold" style={{ fontSize: '2vw', letterSpacing:'10px !important', y: fgY2 }}>directrice artistique</motion.h2>
                    <motion.h1 className="hero-main-text bold" style={{ fontSize: '12vw', y: fgY }}>coralie alexandru</motion.h1>
                

                </section>

                {/* Presentation Section */}
                <section className="presentation-section">
                    <div className="presentation-bg-text-container">
                        <h2 className="presentation-bg-text bold">
                             <motion.div style={{ y: bgY2 }}>je m'explique</motion.div>
                        </h2>
                    </div>
                    <div className="home-presentation bold">
                        <motion.p style={{ y: pY1 }}>
                           je suis une créative obsessionnelle qui bloque sur chaque détail
                        </motion.p>
                        <br></br>
                        <motion.p style={{ y: pY2 }}>
                          qui aboutit toujours à un projet adapté à vos besoins
                        </motion.p>
                        <br></br>
                        <motion.p style={{ y: pY3 }}>
                          et qui ne fonctionne pas sans musique
                        </motion.p>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="home-projects-section" style={{ position: 'relative' }}>

                    <AnimatePresence mode="wait">
                        <div className="home-cards-container">
                            {homeProjects.map(project => (
                                <div key={project.id} className="home-project-row">
                                    <Card
                                        image={project.image}
                                        label={project.label}
                                        onClick={(e) => startTransition(e, `/${project.category}/${project.id}`, '#FA0026')}
                                        type={project.type}
                                        tags={project.tags}
                                        category={project.category}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.1 }}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { 
                                                opacity: 1, 
                                                scale: 1, 
                                                y: 0, 
                                                transition: { type: 'spring', stiffness: 200, damping: 20 } 
                                            }
                                        }}
                                    />
                                    <div className="home-project-description bold">
                                        <h3 className="home-project-card-title">{project.label}</h3>
                                        <p>
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatePresence>
                </section>
            </motion.main>
        </>
    );
};

export default HomePage;
