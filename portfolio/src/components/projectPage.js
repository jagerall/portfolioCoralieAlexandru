import React, {useEffect, useState, useRef} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Button from "./button";
import Link from "./link";
import Tag from "./tag";
import '../style/projectpage.scss';

const projectDetails = {
    liko: {
        category: "DA",
        title: "Liko",
        tags: ["Direction Artistique"],
        description: `le but de liko est d’encourager ses usagers à se déplacer.

Plus l’effort est intense et prolongé, plus le temps d’infusion augmente, donnant naissance à une boisson plus riche en goût et plus alcoolisée. Le produit associe ainsi dépassement de soi, plaisir et récompense.

Liko est une gourde capable de transformer vos aromates, plantes et composants éco-responsables en alcool lors de la descente après un effort en altitude.

la gourde s’adresse aux aventuriers urbains ou de montagne, ceux qui aiment jouer avec les limites et qui ont besoin de réconfort après un gros effort (ou pas).

Elle devient un objet hybride entre une gourde technique, un objet design et une expérience sensorielle. Son design futuriste inspiré des contenants japonais traduit une nouvelle manière de consommer : plus consciente, plus qualitative et davantage liée aux moments vécus.

Les formes organiques, les matériaux durables et une palette inspirée des paysages renforcent l'idée d'un objet compagnon d'aventure.`,
        images: [
            "/assets/liko-1.png",
            "/assets/liko-2.png",
            "/assets/liko-3.png",
            "/assets/liko-4.png",
            "/assets/liko-5.png",
            "/assets/liko-6.png",
            "/assets/liko-7.png",
            "/assets/liko-8.png",
        ],
        videos: [
            {
                src: "/assets/liko-vid-2.mp4",
                type: "video/mp4",
            },
            {
                src: "/assets/liko-vid-1.mp4",
                type: "video/mp4",
            },
        ],
    },
    sliced: {
        category: "DA",
        title: "Sliced",
        tags: ["Direction Artistique"],
        description: `Sliced est un voyage graphique au cœur de la matière. À travers une série de coupes transversales, cette identité visuelle explore l'anatomie comparée du vivant et des objets du quotidien. Une mise à nu esthétique où l'animé et l'inanimé se croisent, révélant la complexité graphique de ce qui nous entoure.`,
        images: [
            "/assets/sliced-1.png",
            "/assets/sliced-2.png",
            "/assets/sliced-3.png",
            "/assets/sliced-4.png",
            "/assets/sliced-5.png",
            "/assets/sliced-6.png",
            "/assets/sliced-7.png",
            "/assets/sliced-8.png",
            "/assets/sliced-9.png",
            "/assets/sliced-10.png",
            "/assets/sliced-11.png",
            "/assets/sliced-12.png",
            "/assets/sliced-13.png",
        ],
        videos: [
            {
                src: "/assets/sliced-15.gif",
                type: "video/gif",
            },
            {
                src: "/assets/sliced-14.gif",
                type: "video/gif",
            },
        ],
    },
    booking: {
        category: "UI/UX",
        title: "Booking",
        tags: ["Refonte de site"],
        description: `J'ai réalisé la refonte de l'interface d'une plateforme de réservation type Booking afin d'améliorer l'expérience utilisateur. L'objectif était de simplifier la navigation, clarifier les informations et fluidifier le parcours de réservation.

Après une analyse des points de friction, j'ai repensé l'architecture de l'information et conçu une interface plus épurée et intuitive, avec une meilleure hiérarchisation des contenus et une optimisation pour mobile.

Ce projet m'a permis de renforcer mes compétences en UX/UI design et en conception d'interfaces centrées utilisateur.`,
        images: [],
        linkFigma: "https://www.figma.com/design/mVKZJIssy5jUCxBWxXQ2gs/Boooking---Refonte?node-id=32-11984&t=HV3r2zPZtVBdjBDM-1",
    },

    voiesavenir: {
        category: "UI/UX",
        title: "Les voies de l'avenir",
        tags: ["Plateforme pédagogique interactive"],
        description: `J'ai participé à la conception de cette plateforme pédagogique dédiée à l'orientation et à la mixité professionnelle. L'objectif était de valoriser des parcours de femmes inspirantes à travers une interface dynamique et accessible.

Le projet repose sur une architecture de l'information segmentée par filières d'études et sur un dispositif de médiation interactive. J'ai travaillé sur la création d'un parcours utilisateur fluide pour les lycéens, en mettant l'accent sur la hiérarchisation des contenus et l'optimisation de l'expérience de lecture.

Ce projet m'a permis de mobiliser des compétences en UX/UI design, en gestion de projet collaboratif (BUT MMI) et en design inclusif.`,
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
        tags: ["Retour d'expérience"],
        description: "Site présentant notre remise en question de la création d'une application web",
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
        tags: ["Audit UX & UI"],
        description: `Au cours d'un projet de deux semaines sur l'UI/UX design, j'ai collaboré avec mon groupe pour repenser le gestionnaire d'emploi du temps Flop!Edt. La première semaine était dédiée à la recherche utilisateur pour comprendre les besoins et les frustrations des utilisateurs, tandis que la deuxième était consacrée à la conception et à l'itération des solutions. Nous avons identifié les lacunes du système existant et élaboré des wireframes détaillés, puis des maquettes interactives. Ce projet m'a permis de maîtriser le processus d'UX/UI design et de développer mes compétences sur Figma.`,
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
        tags: ["Narration interactive"],
        description: `Ce projet, est en partenariat avec le MusBa pour la Bacchanight 2024. Nous avons créé une histoire interactive avec les tableaux du musée. Notre groupe étions sur la période du siècle d'or hollandais. Nous avons effectué des recherches approfondies sur ce mouvement, pour réaliser une histoire fictive cohérente. Pendant ce projet, j'ai réalisé des visuels et des illustrations. Attention, il faut consulter le site en format mobile.`,
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
        tags: ["Refonte de site"],
        description:
            "Modernisation du site du musée pour améliorer l'accessibilité, avec un design responsive et une navigation optimisée.",
        images: ["/assets/capc-1.webp", "/assets/capc-2.webp"],
        linkWebsite: "https://capc-2022.netlify.app/",
    },

    smash: {
        category: "UI/UX",
        title: "Smash",
        tags: ["Application"],
        description: `Smash est un média destiné aux 18-25 ans. Il propose de lutter contre la désinformation.
Tous les jours, l'utilisateur a accès à 3 citations de personnes publiques sur des sujets d'actualité et doit déterminer si c'est une info (basé sur des faits) ou une intox (basé sur une opinion ou une interprétation des faits). Il peut ensuite s'informer de façon plurielle sur cette actualité et en débattre dans un espace commentaire.
Notre application avait plusieurs besoins : des comptes utilisateurs, un système de sondage, d'amis et de commentaires ainsi que la création et gestion d'articles. Suite à un premier jet très scolaire, nous avons décidé d'en refaire une version où nous sommes plus libres dans notre création.`,
        images: [
            "/assets/smash-1.webp",
            "/assets/smash-2.webp",
            "/assets/smash-3.webp",
        ],
    },

    reserve: {
        category: "UI/UX",
        title: "La Réserve du Musba",
        tags: ["Narration interactive"],
        description: `La Réserve est un jeu narratif à fins multiples, réalisé en partenariat avec le Musée des Beaux-Arts de Bordeaux (Musba) pour la Nuit au Musée. Le joueur incarne un assistant du conservateur chargé de préparer une exposition en sélectionnant et disposant des œuvres issues des réserves du musée. Chaque choix impacte l'ambiance et l'environnement du musée, offrant une expérience immersive et personnalisée. Pour ce projet, j'ai réalisé l'ensemble des assets et des décors, contribuant à l'atmosphère de notre expérience. Vous pourrez bientôt tester notre expérience directement au Musba. Attention, il faut consulter le site avec le format de la tablette au MusBA : 3840x2160px.`,
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
        tags: ["Photographie argentique"],
        description:
            "Voici quelques photos prises à l'Olympus M1 sur la Côte d'Azur.",
        images: [
            "/assets/argentique-2.webp",
            "/assets/argentique-5.webp",
            "/assets/argentique-3.webp",
            "/assets/argentique-4.webp",
            "/assets/argentique-1.webp",
            "/assets/argentique-6.webp",
        ],
    },

    auto: {
        category: "Photographie",
        title: "Portraits",
        tags: ["Photographie"],
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
        tags: ["Photographie"],
        images: [
            "/assets/fauneflore-5.webp",
            "/assets/fauneflore-4.webp",
            "/assets/fauneflore-1.webp",
            "/assets/fauneflore-2.webp",
            "/assets/fauneflore-3.webp",
            "/assets/fauneflore-6.webp",
            "/assets/fauneflore-7.webp",
        ],
    },

    bordeaux: {
        category: "Photographie",
        title: "Urbain",
        tags: ["Photographie urbaine"],
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
        tags: ["Macrophoto"],
        images: [
            "/assets/macro-1.webp",
            "/assets/macro-2.webp",
            "/assets/macro-4.webp",
            "/assets/macro-6.webp",
        ],
    },
    gfy: {
        category: "DA",
        title: "Go Fail Yourself",
        tags: ["Campagne 360°"],
        description: `Dans un univers outdoor dominé par la sécurité et la performance, la campagne interroge une problématique clé : comment valoriser l'échec comme apprentissage tout en renforçant la confiance dans le matériel de haute montagne ?

Go Fail Yourself transforme les erreurs en données utiles et en preuve de résistance produit.

Print : visuels construits à partir de traces d'échec, comme preuve de robustesse
App AR/IA : analyse des usages et des "fails", simulation de scénarios extrêmes et check matériel
UGC Instagram : partage des échecs comme expériences valorisées
Activation retail : mousquetons d'or à débloquer après usages répétés de l'app et enregistrement d'échecs

Une campagne qui fait de l'échec un outil de design, de preuve et de narration produit.`,
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
        title: "Pointe de Penmarc'h",
        tags: ["Rebranding"],
        description: `Projet de redesign global pour une marque de conserves de poisson fondée en 1920 au Guilvinec en Bretagne. L'objectif est de moderniser l'identité visuelle tout en renforçant un positionnement premium et un ancrage français fort, lié au terroir et à la pêche artisanale.

La direction artistique s'appuie sur l'authenticité, l'univers maritime et le savoir-faire local afin de repositionner la marque dans un registre plus contemporain sans perdre son héritage.

Le projet comprend la création d'un nouveau logo, la refonte d'un packaging (boîte de sardines ou de thon), des déclinaisons produits (nature, tomate basilic, citron huile d'olive) ainsi que trois affiches de campagne présentant les différentes saveurs.

Une identité qui valorise l'héritage breton tout en affirmant une image plus moderne et premium.`,
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
        title: "THE WORD_BROKER & THE SCRIPT_MINER",
        tags: ["Création interactive", "Expérience immersive"],
        description:
            "Dans le cadre du Digital Event de l’ESD Bordeaux, j’ai participé à la production complète de deux expériences interactives publiées sur Neonova.art : THE WORD_BROKER et THE SCRIPT_MINER.\n\n" +
            "THE WORD_BROKER propose une expérience immersive de boutique fictive où chaque interaction utilisateur génère des artefacts visuels et textuels. THE SCRIPT_MINER explore un univers plus algorithmique autour de la génération de langage et de scripts, en mêlant dispositif physique et système numérique.\n\n" +
            "J’ai participé à la conception visuelle (tickets de caisse, interfaces et éléments graphiques), à l’intégration CSS et au développement en Python sur Raspberry Pi pour les dispositifs interactifs.\n\n" +
            "J’ai également pris part à la fabrication physique via impression 3D des socles, embouchures et inserts d’écran pour téléphones, ainsi qu’à la partie hardware avec la soudure des interphones et la connexion des téléphones aux microphones et haut-parleurs.\n\n" +
            "Enfin, j’ai contribué à l’installation complète de la scénographie sur site, dans une logique de production hybride mêlant design graphique, code, fabrication et expérience immersive.\n\n" +
            "Projet réalisé sous la direction de Kamel Ghabte et Gatien Leclere.\n",

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
            {
                src: "https://framerusercontent.com/assets/HiPEns9vSjrvfNKK9F9FAWhJpbE.mp4",
                type: "video/mp4",
            },
            {
                src: "https://framerusercontent.com/assets/1AqDt7IyOyPCbj4edidzqHCX4U.mp4",
                type: "video/mp4",
            },
        ],
    },

};

const ProjectPage = () => {
    const iframeEmbeds = {
        booking: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/mVKZJIssy5jUCxBWxXQ2gs/Boooking---Refonte?node-id=2069-66",
        penmarch: "https://www.behance.net/embed/project/247470423?ilo0=1",
        livret: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/MWFT7RRzr5dSMiwM64qdlW/Rendu---Design---cybers%C3%A9curit%C3%A9?node-id=419-13284&page-id=0%3A1"
    };

    const {id} = useParams();
    const navigate = useNavigate();
    const project = projectDetails[id] || {};

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (project.title) {
            document.title = `Coralie Alexandru - ${project.title}`;
        } else {
            document.title = "Coralie Alexandru";
        }
    }, [project.title, project.category]);

    return (<main className="project-page">
        <div className="project-page-text">
            <Button className={'back-btn'} onClick={() => navigate(-1)} label="retour"/>
            <div className="project-description">
                <h1 className={"project-description-title bold"}>{project.title}</h1>
                {project.tags && project.tags.length > 0 && (
                    <p className="project-page-tags">
                        {project.tags.join(', ')}
                    </p>
                )}
                {project.description && (<div>
                    <p>{project.description}</p>
                    {project.sources?.length > 0 && (
                        <p>Sources :
                            <ul>{project.sources?.map((s) => (
                                <li key={s.url} className="project-source flex">
                                    <Link key={s.url} href={s.url} label={s.label}/>
                                </li>

                            ))}  </ul></p>
                    )}
                </div>)}
            </div>
            <div className="project-links">
                {project.linkFigma && (<Button to={project.linkFigma} external={true} label="Voir le Figma"/>)}
                {project.linkWebsite && (<Button to={project.linkWebsite} external={true} label="Voir le site"/>)}
                {project.linkGithub && (<Button to={project.linkGithub} external={true} label="Voir le Github"/>)}
            </div>

        </div>
        <div className="project-page-section">
            <div className="project-images">
                {(project.images?.length > 0 || project.videos?.length > 0) &&
                    [...(project.videos || []).map(video => ({
                        type: video.type.includes('gif') ? 'gif' : 'video',
                        src: video.src
                    })), ...(project.images || []).map(img => ({
                        type: "image", src: img
                    }))].map((item, index) => (
                        <div key={index} className="project-image-item">
                            {item.type === "video" || item.type === 'gif' ? (<video
                                src={item.src}
                                loop
                                muted
                                playsInline
                                autoPlay
                            />) : (<img
                                src={item.src}
                                alt={`${project.title} ${index + 1}`}
                                onClick={() => setSelectedImage(item.src)}
                            />)}
                        </div>
                    ))
                }

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

            {selectedImage && (<div className="fullscreen-overlay" onClick={() => setSelectedImage(null)}>
                <div className="fullscreen-content">
                    <img src={selectedImage} alt="Fullscreen preview"/>
                    <Button className="close-btn" label={'Fermer'} onClick={() => setSelectedImage(null)}>

                    </Button>
                </div>
            </div>)}
        </div>
    </main>);
};

export default ProjectPage;