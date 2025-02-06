import React from 'react';
import {useParams} from 'react-router-dom';
import '../style/projectpage.scss';
import Button from "./button";
import { useNavigate } from 'react-router-dom';

const projectDetails = {
    smash: {
        title: 'Smash',
        description: 'Smash est un média destiné aux 18-25 ans. Il propose de lutter contre la désinformation. Tous les jours, l\'utilisateur a accès à 3 citations de personnes publiques sur des sujets d\'actualité et doit déterminer si c\'est une info (basé sur des faits) ou une intox (basé sur une opinion ou une interprétation des faits). Il peut ensuite s\'informer de façon plurielle sur cette actualité et en débattre dans un espace commentaire.\n' +
            'Notre application avait plusieurs besoins : des comptes utilisateurs, un système de sondage, d\'amis et de commentaires ainsi que la création et gestion d\'articles.\n' +
            'Pour répondre à ces besoins, nous avons réalisé un benchmark des différentes technologies, notamment pour la partie back.\n' +
            'Nous avons hésité entre Ruby on Rails, Symfony et Laravel.\n' +
            'Finalement, nous avons retenu Laravel et mySql pour le back-end ainsi que blade, vite et ess pour le front end. Nous avons choisi ces solutions plutôt que d\'autres pour leur rapidité de mise en production, leur compatibilité et la qualité des ressources associées.\n',
        images: ['/assets/smash-logo.png', '/assets/smash-1.png'],
        linkFigma: 'https://www.figma.com/design/hneZzm9KTmHoLdvwnD4j16/REMAKE-SMASH?node-id=98-1323&t=UGbvju0oGMl5cIRD-4',
        linkWebsite: 'https://flip-app.osc-fr1.scalingo.io/'
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

    return (
        <main className="project-page">
            <div className="project-description">
                <h1>{project.title}</h1>
                <p>{project.description}</p>
                <div className="project-links">
                    {project.linkFigma && (
                        <Button to={project.linkFigma} external={true} label="Voir le Figma"/>
                    )}
                    {project.linkWebsite && (
                        <Button to={project.linkWebsite} external={true} label="Voir le site"/>
                    )}
                </div>
            </div>

            <div className="project-images">
                {project.images && project.images.map((image, index) => (
                    <img key={index} src={image} alt={`${project.title} ${index + 1}`}/>
                ))}
            </div>

            <button onClick={() => navigate(-1)} className="button">Retour aux projets</button>
        </main>
    );
};
export default ProjectPage;