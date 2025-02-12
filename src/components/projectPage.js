import React, {useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from "./button";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../style/projectpage.scss';
import {Pagination} from 'swiper/modules';

const projectDetails = {
    pasnumerise: {
        title: 'Nous n\'avons pas numérisé',
        description: 'Site présentant notre remise en question de la création d\'une application web',
        images: ['/assets/pasnumerise-1.png', '/assets/pasnumerise-2.png', '/assets/pasnumerise-3.png'],
        linkWebsite: 'https://nousnavonspasnumerise.mmibordeaux.com/',
        linkFigma: 'https://www.figma.com/design/HACsiu3enk1btElSuMuZ24/Maquettes---Nous-n\'avons-pas-num%C3%A9ris%C3%A9?node-id=1-2&t=dS5XYmwAPhlUjcsy-1',
        linkGithub: '',
    },
    flop: {
        title: 'Flop\'EDT',
        description: 'Au cours d\'un projet de deux semaines sur l\'UX/UI design, j\'ai collaboré avec mon groupe pour repenser le gestionnaire d\'emploi du tempsFlop!Edt. La première semaine était dédiée à la recherche utilisateur pour comprendre les besoins et les frustrations des utilisateurs, tandis que la deuxième était consacrée à la conception et à l\'itération des solutions. Nous avons identifié les lacunes du système existant et élaboré des wireframes détaillés, puis des maquettes interactives. Ce projet m\'a permis de maîtriser le processus d\'UX/UI design et de développer mes compétences sur Figma.',
        images: ['/assets/flop-1.png', '/assets/flop-2.png', '/assets/flop-3.png'],
        linkFigma: 'https://www.figma.com/design/9fY2i3PUefoq9BwAPgPAYa/Refonte-Flop!Edt',
    },
    maria: {
        title: 'Bacchanight Musba - Maria',
        description: 'Ce projet, est en partenariat avec le MusBa pour la Bacchanight 2024. Nous avons créé une histoire interactive avec les tableaux du musée. Notre groupe étions sur la période du siècle d’or hollandais. Nous avons effectué des recherches approfondies sur ce mouvement, pour réaliser une histoire fictive cohérente. Pendant ce projet, j’ai réalisé des visuels et des illustrations.' +
            'Attention, il faut consulter le site en format mobile.',
        images: ['/assets/maria-1.png', '/assets/maria-2.png', '/assets/maria-3.png'],
        linkWebsite: 'https://maria-bacchanight.netlify.app/',
        linkFigma: 'https://www.figma.com/design/q7RaOlf5bsd21uZDjzUThW/Bacchanight-Maria?node-id=33-2&t=Z45xrEGRw3GVUuAw-1',
        linkGithub: 'https://github.com/MatthieuMarchand/Maria',
    },
    capc: {
        title: 'Refonte CAPC',
        description: 'Modernisation du site du musée pour améliorer l’accessibilité, avec un design responsive et une navigation optimisée.',
        images: ['/assets/maria-1.png', '/assets/maria-2.png', '/assets/maria-3.png'],
        linkWebsite: 'https://capc-2022.netlify.app/',
    },
    smash: {
        title: 'Smash',
        description: 'Smash est un média destiné aux 18-25 ans. Il propose de lutter contre la désinformation. \n' +
            'Tous les jours, l\'utilisateur a accès à 3 citations de personnes publiques sur des sujets d\'actualité et doit déterminer si c\'est une info (basé sur des faits) ou une intox (basé sur une opinion ou une interprétation des faits). Il peut ensuite s\'informer de façon plurielle sur cette actualité et en débattre dans un espace commentaire.\n' +
            'Notre application avait plusieurs besoins : des comptes utilisateurs, un système de sondage, d\'amis et de commentaires ainsi que la création et gestion d\'articles.' +
            'Suite à un premier jet très scolaire, nous avons décidé d\'en refaire une version où nous sommes plus libres dans notre création.',
        images: ['/assets/smash-1.png', '/assets/smash-2.png', '/assets/smash-3.png'],
        linkFigma: 'https://www.figma.com/design/iuAP57wyrjMOlp2AdZuRLy/SMASH?m=auto&t=6La0QN4LOZ35hia1-6',
        linkGithub: 'https://github.com/Safirl/Flip',
    },
    reserve: {
        title: 'Nuit Européenne du Musée - La Réserve',
        description: 'Nuit au Musée est un jeu narratif à fins multiples, réalisé en partenariat avec le Musée des Beaux-Arts de Bordeaux (Musba). Le joueur incarne un assistant du conservateur chargé de préparer une exposition en sélectionnant et disposant des œuvres issues des réserves du musée. Chaque choix impacte l’ambiance et l’environnement du musée, offrant une expérience immersive et personnalisée. Pour ce projet, j’ai réalisé l’ensemble des assets et des décors, contribuant à l’atmosphère de notre expérience. Vous pourrez bientôt tester notre expérience directement au Musba.' +
            'Attention, il faut consulter le site avec le format de la tablette au MusBA : 3840x2160px.',
        images: ['/assets/reserve-1.png', '/assets/reserve-2.png', '/assets/reserve-3.png', '/assets/reserve-4.png', '/assets/reserve-5.jpg'],
        linkWebsite: 'https://nuit-du-musba-2025.netlify.app/experiences/1-hub/index.html',
        linkFigma: 'https://www.figma.com/design/jCO7N9V7wzwLwvyoesioDr/Nuit-au-Mus%C3%A9e---Reserve?node-id=418-81&t=HdFRjnOd55Z18s2k-1',
        linkGithub: 'https://github.com/nuit-musee-musba/experience-2025',
    },
    argentique: {
        title: 'Photographie argentique',
        description: 'Voici quelques photos prises à l\'Olympus M1 sur la Côte d\'Azur.',
        images: ['/assets/argentique-5.jpg', '/assets/argentique-2.jpg', '/assets/argentique-3.jpg', '/assets/argentique-4.jpg', '/assets/argentique-1.jpg', '/assets/argentique-6.jpg'],
    },
};

const ProjectPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projectDetails[id] || {};


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);



    return (
        <main className="project-page">
            <div className="project-description">

                    <h1>{project.title}</h1>

                <p>{project.description}</p>
                <div className="project-links">
                    {project.linkFigma && (
                        <Button to={project.linkFigma} external={true} label="Voir le Figma" />
                    )}
                    {project.linkWebsite && (
                        <Button to={project.linkWebsite} external={true} label="Voir le site" />
                    )}
                    {project.linkGithub && (
                        <Button to={project.linkGithub} external={true} label="Voir le Github" />
                    )}
                </div>
            </div>

            <div className="project-images">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {project.images && project.images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`${project.title} ${index + 1}`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Button onClick={() => navigate(-1)} label={"Retour aux projets"}></Button>
        </main>
    );
};

export default ProjectPage;
