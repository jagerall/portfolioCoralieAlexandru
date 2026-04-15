import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Button from "./button";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import '../style/projectpage.scss';

const projectDetails = {
    booking: {
        category: "UI/UX",
        title: "Booking Refonte",
        description: `J’ai réalisé la refonte de l’interface d’une plateforme de réservation type Booking afin d’améliorer l’expérience utilisateur. L’objectif était de simplifier la navigation, clarifier les informations et fluidifier le parcours de réservation.

Après une analyse des points de friction, j’ai repensé l’architecture de l’information et conçu une interface plus épurée et intuitive, avec une meilleure hiérarchisation des contenus et une optimisation pour mobile.

Ce projet m’a permis de renforcer mes compétences en UX/UI design et en conception d’interfaces centrées utilisateur.`,
        images: [],
        linkFigma:
            "https://www.figma.com/design/mVKZJIssy5jUCxBWxXQ2gs/Boooking---Refonte?node-id=32-11984&t=HV3r2zPZtVBdjBDM-1",
    },

    voiesavenir: {
        category: "UI/UX",
        title: "Les voies de l'avenir",
        description: `J’ai participé à la conception de cette plateforme pédagogique dédiée à l’orientation et à la mixité professionnelle. L’objectif était de valoriser des parcours de femmes inspirantes à travers une interface dynamique et accessible.

Le projet repose sur une architecture de l’information segmentée par filières d’études et sur un dispositif de médiation interactive. J’ai travaillé sur la création d’un parcours utilisateur fluide pour les lycéens, en mettant l’accent sur la hiérarchisation des contenus et l’optimisation de l’expérience de lecture.

Ce projet m’a permis de mobiliser des compétences en UX/UI design, en gestion de projet collaboratif (BUT MMI) et en design inclusif.`,
        images: [
            "/assets/voies-avenir-1.webp",
            "/assets/voies-avenir-2.webp",
            "/assets/voies-avenir-3.webp",
        ],
        linkWebsite: "https://www.lesvoiesdelavenir.org/",
    },

    pasnumerise: {
        category: "UI/UX",
        title: "Nous n'avons pas numérisé",
        description: `Site présentant notre remise en question de la création d'une application web`,
        images: [
            "/assets/pasnumerise-1.webp",
            "/assets/pasnumerise-2.webp",
            "/assets/pasnumerise-3.webp",
        ],
        linkWebsite: "https://nousnavonspasnumerise.mmibordeaux.com/",
        linkGithub: "",
    },

    flop: {
        category: "UI/UX",
        title: "Flop'EDT",
        description: `Au cours d'un projet de deux semaines sur l'UI/UX design, j'ai collaboré avec mon groupe pour repenser le gestionnaire d'emploi du temps Flop!Edt.

La première semaine était dédiée à la recherche utilisateur pour comprendre les besoins et les frustrations des utilisateurs, tandis que la deuxième était consacrée à la conception et à l'itération des solutions.

Nous avons identifié les lacunes du système existant et élaboré des wireframes détaillés, puis des maquettes interactives.

Ce projet m'a permis de maîtriser le processus d'UX/UI design et de développer mes compétences sur Figma.`,
        images: [
            "/assets/flop-1.webp",
            "/assets/flop-2.webp",
            "/assets/flop-3.webp",
        ],
        linkFigma:
            "https://www.figma.com/design/9fY2i3PUefoq9BwAPgPAYa/Refonte-Flop!Edt?node-id=446-73601&t=vd7N5q6ntJLqgEuS-1",
    },

    maria: {
        category: "UI/UX",
        title: "Maria",
        description: `Ce projet est en partenariat avec le MusBa pour la Bacchanight 2024. Nous avons créé une histoire interactive avec les tableaux du musée.

Notre groupe était sur la période du siècle d’or hollandais. Nous avons effectué des recherches approfondies sur ce mouvement pour réaliser une histoire fictive cohérente.

Pendant ce projet, j’ai réalisé des visuels et des illustrations.

Attention, il faut consulter le site en format mobile.`,
        images: [
            "/assets/maria-1.webp",
            "/assets/maria-3.webp",
            "/assets/maria-2.webp",
            "/assets/maria-4.webp",
            "/assets/maria-5.webp",
            "/assets/maria-6.webp",
        ],
        linkWebsite: "https://maria-bacchanight.netlify.app/",
    },

    capc: {
        category: "UI/UX",
        title: "CAPC",
        description: `Modernisation du site du musée pour améliorer l’accessibilité, avec un design responsive et une navigation optimisée.`,
        images: ["/assets/capc-1.webp", "/assets/capc-2.webp"],
        linkWebsite: "https://capc-2022.netlify.app/",
    },

    smash: {
        category: "UI/UX",
        title: "Smash",
        description: `Smash est un média destiné aux 18-25 ans. Il propose de lutter contre la désinformation.

Tous les jours, l'utilisateur a accès à 3 citations de personnes publiques sur des sujets d'actualité et doit déterminer si c'est une info (basée sur des faits) ou une intox (basée sur une opinion ou une interprétation des faits).

Il peut ensuite s'informer de façon plurielle sur cette actualité et en débattre dans un espace commentaire.

Notre application avait plusieurs besoins : comptes utilisateurs, système de sondage, d'amis et de commentaires ainsi que la création et gestion d'articles.

Suite à un premier jet très scolaire, nous avons décidé d'en refaire une version plus libre dans sa création.`,
        images: [
            "/assets/smash-1.webp",
            "/assets/smash-2.webp",
            "/assets/smash-3.webp",
        ],
    },

    reserve: {
        category: "UI/UX",
        title: "La Réserve du Musba",
        description: `La Réserve est un jeu narratif à fins multiples, réalisé en partenariat avec le Musée des Beaux-Arts de Bordeaux (Musba) pour la Nuit au Musée.

Le joueur incarne un assistant du conservateur chargé de préparer une exposition en sélectionnant et disposant des œuvres issues des réserves du musée.

Chaque choix impacte l’ambiance et l’environnement du musée, offrant une expérience immersive et personnalisée.

Pour ce projet, j’ai réalisé l’ensemble des assets et des décors, contribuant à l’atmosphère de notre expérience.

Attention, il faut consulter le site avec le format de la tablette au MusBA : 3840x2160px.`,
        images: [
            "/assets/reserve-1.webp",
            "/assets/reserve-2.webp",
            "/assets/reserve-3.webp",
            "/assets/reserve-4.webp",
            "/assets/reserve-5.webp",
        ],
        linkWebsite:
            "https://nuit-du-musba-2025.netlify.app/experiences/1-hub/index.html",
    },

    argentique: {
        category: "Photographie",
        title: "Argentique",
        description: `Voici quelques photos prises à l'Olympus M1 sur la Côte d'Azur.`,
        images: [
            "/assets/argentique-5.webp",
            "/assets/argentique-2.webp",
            "/assets/argentique-3.webp",
            "/assets/argentique-4.webp",
            "/assets/argentique-1.webp",
            "/assets/argentique-6.webp",
        ],
    },

    auto: {
        category: "Photographie",
        title: "Portraits",
        images: [
            "/assets/auto-1.webp",
            "/assets/auto-2.webp",
            "/assets/auto-3.webp",
            "/assets/auto-4.webp",
            "/assets/auto-5.webp",
        ],
    },

    faune: {
        category: "Photographie",
        title: "Faune et flore",
        images: [
            "/assets/fauneflore-1.webp",
            "/assets/fauneflore-2.webp",
            "/assets/fauneflore-3.webp",
            "/assets/fauneflore-4.webp",
            "/assets/fauneflore-5.webp",
            "/assets/fauneflore-6.webp",
            "/assets/fauneflore-7.webp",
        ],
    },

    bordeaux: {
        category: "Photographie",
        title: "Urbain",
        images: [
            "/assets/bordeaux-1.webp",
            "/assets/bordeaux-2.webp",
            "/assets/bordeaux-3.webp",
            "/assets/bordeaux-4.webp",
            "/assets/bordeaux-5.webp",
            "/assets/bordeaux-6.webp",
            "/assets/bordeaux-7.webp",
            "/assets/bordeaux-8.webp",
            "/assets/bordeaux-9.webp",
        ],
    },

    macro: {
        category: "Photographie",
        title: "Macrophoto",
        images: [
            "/assets/macro-1.webp",
            "/assets/macro-2.webp",
            "/assets/macro-3.webp",
            "/assets/macro-4.webp",
            "/assets/macro-5.webp",
            "/assets/macro-6.webp",
            "/assets/macro-7.webp",
        ],
    },

    allo: {
        category: "Illustration",
        title: "Coques de téléphone",
        images: ["/assets/allo-1.webp", "/assets/allo-2.webp"],
    },

    logommi: {
        category: "Illustration",
        title: "BDE MMI",
        description: `Ce logo a été conçu à la suite du concours annuel du BDE MMI visant à créer une identité visuelle pour la formation de l'année 2024-2025.`,
        images: ["/assets/illu-logommi.webp"],
    },

    miel: {
        category: "Illustration",
        title: "Miel de 4SH",
        description: `Cette étiquette a été créée suite à la demande de 4SH pour ses pots de miel.`,
        images: ["/assets/miel-1.webp", "/assets/miel-2.webp", "/assets/miel-pot.webp"],
    },

    art: {
        category: "Illustration",
        title: "Art",
        description: `Suite à une visite du Musée des Beaux-Arts de Bordeaux, j'ai redessiné les tableaux qui m'ont plu : Madeleine en extase (anonyme), Rolla (Gervex, 1878), L'été ou Cérès (Millet, 1865).`,
        images: ["/assets/art-1.webp", "/assets/art-2.webp", "/assets/art-3.webp"],
    },

    amis: {
        category: "Illustration",
        title: "Amis",
        images: ["/assets/ami-1.webp", "/assets/ami-2.webp"],
    },

    cephalopode: {
        category: "Illustration",
        title: "Céphalopodes",
        images: ["/assets/c-1.webp", "/assets/c-2.webp"],
    },

    cocktails: {
        category: "Illustration",
        title: "Cocktails",
        images: ["/assets/illu-cocktails.webp"],
    },

    nature: {
        category: "Illustration",
        title: "Nature",
        images: [
            "/assets/gouache-5.webp",
            "/assets/gouache-2.webp",
            "/assets/gouache-3.webp",
            "/assets/gouache-4.webp",
            "/assets/gouache-1.webp",
        ],
    },

    livret: {
        category: "DA",
        title: "Guide Cybersécurité PME - Livret",
        description: `Réalisation d’un livret de 16 pages destiné aux chefs d’entreprise, portant sur les enjeux de cybersécurité et les cyberattaques.

Ce projet aborde les bonnes pratiques de prévention, la gestion des situations de crise ainsi que les stratégies de sortie de crise.

Le livret inclut également des fiches pratiques afin de faciliter la compréhension et la mise en œuvre des mesures de sécurité en entreprise.`,
        images: ["/assets/livret-1.webp"],
    },

    gfy: {
        category: "DA",
        title: "Go Fail Yourself",
        description: `Dans un univers outdoor dominé par la sécurité et la performance, la campagne interroge une problématique clé : comment valoriser l’échec comme apprentissage tout en renforçant la confiance dans le matériel de haute montagne ?

Go Fail Yourself transforme les erreurs en données utiles et en preuve de résistance produit.

Print : visuels construits à partir de traces d’échec
App AR/IA : analyse des usages et simulation de scénarios extrêmes
UGC Instagram : partage des échecs comme expériences valorisées
Retail : activation via récompenses débloquées`,
        images: [
            "/assets/gfy-4.webp",
            "/assets/gfy-5.webp",
            "/assets/gfy-3.webp",
            "/assets/gfy-2.webp",
            "/assets/gfy-6.webp",
            "/assets/gfy-1.webp",
        ],
    },

    penmarch: {
        category: "DA",
        title: "Pointe de Penmarc'h - Rebranding",
        description: `Projet de redesign global pour une marque de conserves de poisson fondée en 1920.

L’objectif est de moderniser l’identité tout en conservant un ancrage terroir fort.

Le projet comprend logo, packaging, déclinaisons produits et affiches de campagne.

Une identité qui valorise l’héritage breton tout en affirmant une image premium contemporaine.`,
        images: [
            "/assets/penmarch-1.webp",
            "/assets/penmarch-2.webp",
            "/assets/penmarch-3.webp",
            "/assets/penmarch-4.webp",
            "/assets/penmarch-5.webp",
            "/assets/penmarch-6.webp",
            "/assets/penmarch-7.webp",
            "/assets/penmarch-8.webp",
        ],
    },

    wordbroker: {
        category: "DA",
        title: "WORD_BROKER & SCRIPT_MINER",
        description: `Deux expériences interactives produites pour le Digital Event de l’ESD Bordeaux.

WORD_BROKER : boutique fictive générant des artefacts visuels et textuels.
SCRIPT_MINER : univers autour de la génération algorithmique de langage.

Contribution : design, CSS, Python sur Raspberry Pi, hardware et installation scénographique.`,
        images: [
            "/assets/wordbroker-7.webp",
            "/assets/wordbroker-8.webp",
            "/assets/wordbroker-4.webp",
            "/assets/wordbroker-5.webp",
            "/assets/wordbroker-1.webp",
            "/assets/wordbroker-2.webp",
            "/assets/wordbroker-3.webp",
        ],
        videos: [
            { src: "https://framerusercontent.com/assets/HiPEns9vSjrvfNKK9F9FAWhJpbE.mp4", type: "video/mp4" },
            { src: "https://framerusercontent.com/assets/1AqDt7IyOyPCbj4edidzqHCX4U.mp4", type: "video/mp4" },
        ],
    },

    fanzine: {
        category: "DA",
        title: "What about zebra crossings ?",
        description: `Fanzine réalisé en une matinée autour des passages piétons.

Approche narrative : les passages piétons deviennent des entités fatiguées et sensibles.

Les feux piétons prennent vie et s’échappent temporairement pour respirer.

Projet explorant une relecture poétique et critique de l’espace urbain.`,
        images: [
            "/assets/illu-fanzine.webp",
            "/assets/fanzine-4.webp",
            "/assets/fanzine-2.webp",
            "/assets/fanzine-1.webp",
            "/assets/fanzine-3.webp",
        ],
    },
};

const ProjectPage = () => {
    const iframeEmbeds = {
        booking: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/mVKZJIssy5jUCxBWxXQ2gs/Boooking---Refonte?node-id=2069-66",
        penmarch: "https://www.behance.net/embed/project/247470423?ilo0=1",
        gfy: "https://www.behance.net/embed/project/247600723?ilo0=1",
        livret: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/MWFT7RRzr5dSMiwM64qdlW/Rendu---Design---cybers%C3%A9curit%C3%A9?node-id=419-13284&page-id=0%3A1"
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

    return (<main className="project-page page-content">

        <div className="project-description">
            <h1 className={"project-description-title"}>{project.title}</h1>
            {project.description && (<p>{project.description}</p>)}
            <div className="project-links">
                {project.linkFigma && (<Button to={project.linkFigma} external={true} label="Voir le Figma"/>)}
                {project.linkWebsite && (<Button to={project.linkWebsite} external={true} label="Voir le site"/>)}
                {project.linkGithub && (<Button to={project.linkGithub} external={true} label="Voir le Github"/>)}
            </div>
        </div>

        <div className="project-images">

            {(project.images?.length > 0 || project.videos?.length > 0) && (<Swiper
                slidesPerView="auto"
                spaceBetween={10}
                freeMode={true}
            >
                {[...(project.videos || []).map(video => ({
                    type: "video", src: video.src
                })), ...(project.images || []).map(img => ({
                    type: "image", src: img
                }))

                ].map((item, index) => (<SwiperSlide key={index}>
                    {item.type === "video" ? (<video
                        src={item.src}
                        loop
                        muted
                        playsInline
                        autoPlay
                        style={{
                            width: "100%", height: "100%", objectFit: "cover"
                        }}
                    />) : (<img
                        src={item.src}
                        alt={`${project.title} ${index + 1}`}
                        onClick={() => setSelectedImage(item.src)}
                    />)}
                </SwiperSlide>))}
            </Swiper>)}


            {iframeEmbeds[id] && (<div
                className={`iframe-embed ${id === "livret" || id === "gfy" ? "livret-mode" : iframeEmbeds[id].includes("behance.net") ? "behance-mode" : ""}`}
            >
                <iframe
                    title={"embed-" + id}
                    loading="lazy"
                    src={iframeEmbeds[id]}
                    allow="fullscreen"
                />
            </div>)}


        </div>

        <div
            className={`touch-indicator ${isActive ? "active" : ""}`}
            style={{top: mousePos.y, left: mousePos.x}}
        >
            <div className="indicator-circle"></div>
        </div>

        {selectedImage && (<div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
            <div className="fullscreen-content">
                <img src={selectedImage} alt="Fullscreen preview"/>
                <Button className="close-btn" label={'Fermer'} onClick={() => setSelectedImage(null)}>

                </Button>
            </div>
        </div>)}
        <Button onClick={() => navigate(-1)} label="Retour aux projets"/>
    </main>);
};

export default ProjectPage;