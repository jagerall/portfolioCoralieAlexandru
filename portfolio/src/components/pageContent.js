import React, {useEffect} from 'react';
import { usePageTransition } from './PageTransitionContext';
import Card from './card';
import '../style/pageContent.scss';
import {Helmet} from 'react-helmet';

    const categoryTitles = {
        uiux: "Coralie Alexandru - UI/UX",
        photographie: "Coralie Alexandru - Photographie",
        da: "Coralie Alexandru - Direction Artistique",
    };

const PageContent = ({category}) => {
    const { startTransition } = usePageTransition();

        const categoryData = {
            uiux: [
                {id: 'booking', label: 'Booking', image: '/assets/ui-booking.svg', category: 'uiux', type: 'Refonte', tags: ['Refonte de site']},
                {
                    id: 'voiesavenir',
                    label: 'Les voies de l\'avenir',
                    image: '/assets/ui-voies.svg',
                    category: 'uiux',
                   type: 'Plateforme pédagogique interactive',
                   tags: ['Plateforme pédagogique interactive']
                },
                {
                   id: 'pasnumerise',
                   label: 'Nous n\'avons pas numérisé',
                   image: '/assets/ui-pasnumerise.svg',
                   category: 'uiux',
                   type: 'Retour d\'expérience',
                   tags: ['Retour d\'expérience']
                },
                {
                   id: 'reserve',
                   label: 'La Réserve du Musba',
                   image: '/assets/ui-reserve.svg',
                   category: 'uiux',
                   type: 'Narration interactive',
                   tags: ['Narration interactive']
                },

                {
                   id: 'maria',
                   label: 'Maria',
                   image: '/assets/ui-maria.svg',
                   category: 'uiux',
                   type: 'Narration interactive',
                   tags: ['Narration interactive']
                },
                {id: 'flop', label: 'FlopEdt', image: '/assets/ui-flop.svg', category: 'uiux', type: 'Audit UX & UI', tags: ['Audit UX & UI']},
            ],
            photographie: [
                {
                    id: 'argentique',
                    label: 'Argentique',
                    image: '/assets/argentique-2.webp',
                    category: 'photographie',
                    type: 'Èze',
                    tags: ['Photographie argentique']
                },
                {
                    id: 'auto',
                    label: 'Portrait',
                    image: '/assets/photo-auto.webp',
                    category: 'photographie',
                    type: 'Coralie',
                    tags: ['Photographie']
                },
                {
                    id: 'faune',
                    label: 'Faune et flore',
                    image: '/assets/fauneflore-5.webp',
                    category: 'photographie',
                    type: 'Zoo de la Palmyre',
                    tags: ['Photographie']
                },
                {id: 'macro', label: 'Macro', image: '/assets/macro-4.webp', category: 'photographie', type: 'Vendée', tags: ['Macrophoto']},
            ],
            da: [
                {
                    id: 'liko',
                    label: 'Liko',
                    image: '/assets/liko-5.png',
                    category: 'da',
                    type: 'Direction Artistique',
                    tags: ['Direction Artistique']
                },
                {
                    id: 'sliced',
                    label: 'Sliced',
                    image: '/assets/sliced-3.png',
                    category: 'da',
                    type: 'Direction Artistique',
                    tags: ['Direction Artistique']
                },
                {
                    id: 'gfy',
                    label: 'Go Fail Yourself',
                    image: '/assets/gfy-4.webp',
                    category: 'da',
                    type: 'Campagne 360°',
                    tags: ['Campagne 360°']
                },
                {
                    id: 'penmarch',
                    label: 'Pointe de Penmarc\'h',
                    image: '/assets/penmarch-3.webp',
                    category: 'da',
                    type: 'Rebranding',
                    tags: ['Rebranding']
                },
                {
                    id: 'wordbroker',
                    label: 'THE WORD_BROKER & THE SCRIPT_MINER',
                    image: '/assets/wordbroker-8.webp',
                    category: 'da',
                    type: 'Création interactive',
                    tags: ['Exposition immersive']
                },
            ],
        };

        const projects = categoryData[category] || [];

        useEffect(() => {
            document.title = categoryTitles[category] || "Coralie Alexandru";
        }, [category]);

        return (
    <>
                <Helmet>
                    {/* Titre dynamique de la page */}
                    <title>{categoryTitles[category] || "Coralie Alexandru"}</title>

                    {/* Description dynamique basée sur la catégorie */}
                    <meta name="description"
                          content={`Découvrez mes projets en ${categoryTitles[category] || 'divers'} : ${categoryTitles[category] || 'portfolio créatif'}.`}/>

                    {/* Meta Open Graph (pour Facebook, LinkedIn, etc.) */}
                    <meta property="og:title" content={categoryTitles[category] || "Coralie Alexandru"}/>
                    <meta property="og:description"
                          content={`Découvrez mes projets en ${categoryTitles[category] || 'divers'} : ${categoryTitles[category] || 'portfolio créatif'}.`}/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:image" content="/assets/header-illu.wepb"/>
                    {/* Image de partage sur les réseaux sociaux */}
                    <meta property="og:url" content={`https://coraliealexandru.fr/${category}`}/>

                    {/* Meta Twitter Card (pour Twitter) */}
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title" content={categoryTitles[category] || "Coralie Alexandru"}/>
                    <meta name="twitter:description"
                          content={`Découvrez mes projets en ${categoryTitles[category] || 'divers'} : ${categoryTitles[category] || 'portfolio créatif'}.`}/>
                    <meta name="twitter:image" content="/assets/header-illu.wepb"/>
                    {/* Image de partage sur Twitter */}

                    {/* Meta Robots pour indiquer l'indexation par les moteurs de recherche */}
                    <meta name="robots" content="index, follow"/>
                </Helmet>

            <div className="cards-container">
                {projects.map(project => (
                    <Card
                        key={project.id}
                        image={project.image}
                        label={project.label}
                        onClick={(e) => startTransition(e, `/${project.category}/${project.id}`, '#FA0026')}
                        type={project.type}
                        tags={project.tags}
                        category={project.category}
                    />
                ))}
            </div>
    </>
    );
};

    export default PageContent;