import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Button from "./button";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import '../style/projectpage.scss';

const projectDetails = {
    booking: {
        category: "UI/UX",
        title: 'Booking Refonte',
        description: 'J’ai réalisé la refonte de l’interface d’une plateforme de réservation type Booking afin d’améliorer l’expérience utilisateur. L’objectif était de simplifier la navigation, clarifier les informations et fluidifier le parcours de réservation.\n' +
            '\n' +
            'Après une analyse des points de friction, j’ai repensé l’architecture de l’information et conçu une interface plus épurée et intuitive, avec une meilleure hiérarchisation des contenus et une optimisation pour mobile.\n' +
            '\n' +
            'Ce projet m’a permis de renforcer mes compétences en UX/UI design et en conception d’interfaces centrées utilisateur.',
        images: [],
        linkFigma: 'https://www.figma.com/design/mVKZJIssy5jUCxBWxXQ2gs/Boooking---Refonte?node-id=32-11984&t=HV3r2zPZtVBdjBDM-1',
    },
    pasnumerise: {
        category: "UI/UX",
        title: 'Nous n\'avons pas numérisé',
        description: 'Site présentant notre remise en question de la création d\'une application web',
        images: ['/assets/pasnumerise-1.webp', '/assets/pasnumerise-2.webp', '/assets/pasnumerise-3.webp'],
        linkWebsite: 'https://nousnavonspasnumerise.mmibordeaux.com/',
        linkFigma: 'https://www.figma.com/design/HACsiu3enk1btElSuMuZ24/Maquettes---Nous-n\'avons-pas-num%C3%A9ris%C3%A9?node-id=1-2&t=dS5XYmwAPhlUjcsy-1',
        linkGithub: '',
    },
    flop: {
        category: "UI/UX",
        title: 'Flop\'EDT ',
        description: 'Au cours d\'un projet de deux semaines sur l\'UI/UX design, j\'ai collaboré avec mon groupe pour repenser le gestionnaire d\'emploi du tempsFlop!Edt. La première semaine était dédiée à la recherche utilisateur pour comprendre les besoins et les frustrations des utilisateurs, tandis que la deuxième était consacrée à la conception et à l\'itération des solutions. Nous avons identifié les lacunes du système existant et élaboré des wireframes détaillés, puis des maquettes interactives. Ce projet m\'a permis de maîtriser le processus d\'UX/UI design et de développer mes compétences sur Figma.',
        images: ['/assets/flop-1.webp', '/assets/flop-2.webp', '/assets/flop-3.webp'],
        linkFigma: 'https://www.figma.com/design/9fY2i3PUefoq9BwAPgPAYa/Refonte-Flop!Edt?node-id=446-73601&t=vd7N5q6ntJLqgEuS-1',
    },
    maria: {
        category: "UI/UX",
        title: 'Maria ',
        description: 'Ce projet, est en partenariat avec le MusBa pour la Bacchanight 2024. Nous avons créé une histoire interactive avec les tableaux du musée. Notre groupe étions sur la période du siècle d’or hollandais. Nous avons effectué des recherches approfondies sur ce mouvement, pour réaliser une histoire fictive cohérente. Pendant ce projet, j’ai réalisé des visuels et des illustrations. ' +
            'Attention, il faut consulter le site en format mobile.',
        images: ['/assets/maria-1.webp', '/assets/maria-3.webp', '/assets/maria-2.webp', '/assets/maria-4.webp', '/assets/maria-5.webp', '/assets/maria-6.webp'],
        linkWebsite: 'https://maria-bacchanight.netlify.app/',
        linkFigma: 'https://www.figma.com/design/q7RaOlf5bsd21uZDjzUThW/Bacchanight-Maria?node-id=111-502&t=q0U3LML0noDKXMuX-1',
        linkGithub: 'https://github.com/MatthieuMarchand/Maria',
    },
    capc: {
        category: "UI/UX",
        title: 'CAPC',
        description: 'Modernisation du site du musée pour améliorer l’accessibilité, avec un design responsive et une navigation optimisée.',
        images: ['/assets/capc-1.webp', '/assets/capc-2.webp'],
        linkWebsite: 'https://capc-2022.netlify.app/',
    },
    smash: {
        category: "UI/UX",
        title: 'Smash',
        description: 'Smash est un média destiné aux 18-25 ans. Il propose de lutter contre la désinformation. \n' +
            'Tous les jours, l\'utilisateur a accès à 3 citations de personnes publiques sur des sujets d\'actualité et doit déterminer si c\'est une info (basé sur des faits) ou une intox (basé sur une opinion ou une interprétation des faits). Il peut ensuite s\'informer de façon plurielle sur cette actualité et en débattre dans un espace commentaire.\n' +
            'Notre application avait plusieurs besoins : des comptes utilisateurs, un système de sondage, d\'amis et de commentaires ainsi que la création et gestion d\'articles.' +
            'Suite à un premier jet très scolaire, nous avons décidé d\'en refaire une version où nous sommes plus libres dans notre création.',
        images: ['/assets/smash-1.webp', '/assets/smash-2.webp', '/assets/smash-3.webp'],
        linkFigma: 'https://www.figma.com/design/iuAP57wyrjMOlp2AdZuRLy/SMASH?m=auto&t=6La0QN4LOZ35hia1-6',
        linkGithub: 'https://github.com/Safirl/Flip',
    },
    reserve: {
        category: "UI/UX",
        title: 'La Réserve du Musba',
        description: 'La Réserve est un jeu narratif à fins multiples, réalisé en partenariat avec le Musée des Beaux-Arts de Bordeaux (Musba) pour la Nuit au Musée. Le joueur incarne un assistant du conservateur chargé de préparer une exposition en sélectionnant et disposant des œuvres issues des réserves du musée. Chaque choix impacte l’ambiance et l’environnement du musée, offrant une expérience immersive et personnalisée. Pour ce projet, j’ai réalisé l’ensemble des assets et des décors, contribuant à l’atmosphère de notre expérience. Vous pourrez bientôt tester notre expérience directement au Musba. ' +
            'Attention, il faut consulter le site avec le format de la tablette au MusBA : 3840x2160px.',
        images: ['/assets/reserve-1.webp', '/assets/reserve-2.webp', '/assets/reserve-3.webp', '/assets/reserve-4.webp', '/assets/reserve-5.webp'],
        linkWebsite: 'https://nuit-du-musba-2025.netlify.app/experiences/1-hub/index.html',
        linkFigma: 'https://www.figma.com/design/jCO7N9V7wzwLwvyoesioDr/Nuit-au-Mus%C3%A9e---Reserve?node-id=418-81&t=HdFRjnOd55Z18s2k-1',
        linkGithub: 'https://github.com/nuit-musee-musba/experience-2025',
    },
    argentique: {
        category: "Photographie",
        title: 'Argentique',
        description: 'Voici quelques photos prises à l\'Olympus M1 sur la Côte d\'Azur.',
        images: ['/assets/argentique-5.webp',
            '/assets/argentique-2.webp',
            '/assets/argentique-3.webp',
            '/assets/argentique-4.webp',
            '/assets/argentique-1.webp',
            '/assets/argentique-6.webp'],
    },
    auto: {
        category: "Photographie",
        title: 'Portraits',
        images: ['/assets/auto-1.webp',
            '/assets/auto-2.webp',
            '/assets/auto-3.webp',
            '/assets/auto-4.webp',
            '/assets/auto-5.webp'],
    },
    faune: {
        category: "Photographie",
        title: 'Faune et flore',
        images: ['/assets/fauneflore-1.webp',
            '/assets/fauneflore-2.webp',
            '/assets/fauneflore-3.webp',
            '/assets/fauneflore-4.webp',
            '/assets/fauneflore-5.webp',
            '/assets/fauneflore-6.webp',
            '/assets/fauneflore-7.webp'],
    },
    bordeaux: {
        category: "Photographie",
        title: 'Urbain',
        images: [
            '/assets/bordeaux-1.webp',
            '/assets/bordeaux-2.webp',
            '/assets/bordeaux-3.webp',
            '/assets/bordeaux-4.webp',
            '/assets/bordeaux-5.webp',
            '/assets/bordeaux-6.webp',
            '/assets/bordeaux-7.webp',
            '/assets/bordeaux-8.webp',
            '/assets/bordeaux-9.webp'
        ],
    },
    macro: {
        category: "Photographie",
        title: 'Macrophoto ',
        images: [
            '/assets/macro-1.webp',
            '/assets/macro-2.webp',
            '/assets/macro-3.webp',
            '/assets/macro-4.webp',
            '/assets/macro-5.webp',
            '/assets/macro-6.webp',
            '/assets/macro-7.webp'
        ],
    },
    allo: {
        category: "Illustration",
        title: ' Coques de téléphone',
        description:'',
        images: [
            '/assets/allo-1.webp',
            '/assets/allo-2.webp'
        ],
    },
    logommi: {
        category: "Illustration",
        title: 'BDE MMI',
        description: 'Ce logo a été conçu à la suite du concours annuel du BDE MMI visant à créer une identité visuelle pour la formation de l\'année 2024-2025.',
        images: [
            '/assets/illu-logommi.webp',
        ],
    },
    /*autocollant: {
        category: "Illustration",
        title: ' Autocollant',
        images: [
            '/assets/autocollant.webp',
        ],
    },*/
    miel: {
        category: "Illustration",
        title: 'Miel de 4SH',
        description: 'Cette étiquette a été créée suite à la demande de 4SH pour ses pots de miel.',
        images: [
            '/assets/miel-1.webp',
            '/assets/miel-2.webp',
            '/assets/miel-pot.webp',
        ],
    },
    art: {
        category: "Illustration",
        title: 'Art',
        description: 'Suite à une visite du Musée des Beaux-Art de Bordeaux, j\'ai redessiné les tableaux qui m\'ont plu. Dans l\'ordre :  Madeleine en extase - Copie (Anonyme, XVIIème siècle), Rolla (Herni Gervex, 1878), L\'été ou Cérès (Jean-François Millet, 1865).',
        images: [
            '/assets/art-1.webp',
            '/assets/art-2.webp',
            '/assets/art-3.webp',
        ],
    },
    amis: {
        category: "Illustration",
        title: 'Amis',
        images: [
            '/assets/ami-1.webp',
            '/assets/ami-2.webp'
        ],
    },
    cephalopode: {
        category: "Illustration",
        title: 'Céphalopodes',
        images: [
            '/assets/c-1.webp',
            '/assets/c-2.webp'
        ],
    },
    cocktails: {
        category: "Illustration",
        title: 'Cocktails',
        images: [
            '/assets/illu-cocktails.webp',
        ],
    },
    nature: {
        category: "Illustration",
        title: 'Nature',
        images: [
            '/assets/gouache-5.webp',
            '/assets/gouache-2.webp',
            '/assets/gouache-3.webp',
            '/assets/gouache-4.webp',
            '/assets/gouache-1.webp'
        ],
    },
};

const ProjectPage = () => {
    const figmaEmbeds = {
        booking: "https://embed.figma.com/proto/mVKZJIssy5jUCxBWxXQ2gs/Boooking---Refonte?node-id=2069-66&p=f&viewport=322%2C-209%2C0.43&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2069%3A66&page-id=3%3A181&embed-host=share",

        livretCyber: "https://embed.figma.com/proto/MWFT7RRzr5dSMiwM64qdlW/Rendu---Design---cybers%C3%A9curit%C3%A9?node-id=419-13284&viewport=-3858%2C-179%2C0.07&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&embed-host=share"
    };

    const {id} = useParams();
    const navigate = useNavigate();
    const project = projectDetails[id] || {};

    const [selectedImage, setSelectedImage] = useState(null);
    const [mousePos, setMousePos] = useState({x: 0, y: 0});
    const [isActive, setIsActive] = useState(false);

    const updateMousePos = (x, y) => {
        setMousePos({x, y});
        setIsActive(true);
        setTimeout(() => setIsActive(false), 300);
    };

    useEffect(() => {
        if (project.title) {
            document.title = `Coralie Alexandru - ${project.title}`;
        } else {
            document.title = "Coralie Alexandru";
        }
    }, [project.title, project.category]);

    useEffect(() => {
        const handleMouseMove = (e) => updateMousePos(e.clientX, e.clientY);
        const handleTouchMove = (e) => updateMousePos(e.touches[0].clientX, e.touches[0].clientY);
        const handleClick = (e) => updateMousePos(e.clientX, e.clientY);

        const container = document.querySelector('.project-images');

        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('touchmove', handleTouchMove);
            container.addEventListener('click', handleClick);
        }

        return () => {
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('touchmove', handleTouchMove);
                container.removeEventListener('click', handleClick);
            }
        };
    }, []);

    return (
        <main className="project-page page-content">

            <div className="project-description">
                <h1>{project.title}</h1>
                {project.description && (
                    <p>{project.description}</p>
                )}
                <div className="project-links">
                    {project.linkFigma && (
                        <Button to={project.linkFigma} external={true} label="Voir le Figma"/>
                    )}
                    {project.linkWebsite && (
                        <Button to={project.linkWebsite} external={true} label="Voir le site"/>
                    )}
                    {project.linkGithub && (
                        <Button to={project.linkGithub} external={true} label="Voir le Github"/>
                    )}
                </div>
            </div>

            <div className="project-images">

                {figmaEmbeds[id] ? (
                    <div className="figma-embed">
                        <iframe
                            title={"embed-figma-" + id}
                            loading="lazy"
                            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                            width="800"
                            height="450"
                            src={figmaEmbeds[id]}
                            allowFullScreen
                        ></iframe>
                    </div>
                ) : (
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        preloadImages={true}
                        lazy={false}
                        freeMode={true}
                        speed={500}
                    >
                        {project.images?.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`${project.title} ${index + 1}`}
                                    onClick={() => setSelectedImage(image)}
                                    style={{ cursor: 'pointer' }}
                                    loading="eager"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

            </div>

            <div
                className={`touch-indicator ${isActive ? "active" : ""}`}
                style={{top: mousePos.y, left: mousePos.x}}
            >
                <div className="indicator-circle"></div>
            </div>

            {selectedImage && (
                <div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="fullscreen-content">
                        <img src={selectedImage} alt="Fullscreen preview"/>
                        <Button className="close-btn" label={'Fermer'} onClick={() => setSelectedImage(null)}>

                        </Button>
                    </div>
                </div>
            )}
            <Button onClick={() => navigate(-1)} label="Retour aux projets"/>
        </main>
    );
};

export default ProjectPage;