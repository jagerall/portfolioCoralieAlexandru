import React from 'react';
import { useParams } from 'react-router-dom';
import '../style/projectpage.scss';

const projectDetails = {
    flip: {
        title: 'Flip',
        description: 'Un projet interactif intéressant.',
        images: ['/assets/flip1.png', '/assets/flip2.png', '/assets/flip3.png'],
        text: 'Voici les détails de Flip.'
    },
    test: {
        title: 'Test',
        description: 'Un test d’interface utilisateur.',
        images: ['/assets/test1.png', '/assets/test2.png', '/assets/test3.png'],
        text: 'Voici les détails de Test.'
    },
    caca: {
        title: 'Caca',
        description: 'Un projet drôle et engageant.',
        images: ['/assets/caca1.png', '/assets/caca2.png', '/assets/caca3.png'],
        text: 'Voici les détails de Caca.'
    }
};

const ProjectPage = () => {
    const { id } = useParams();
    const project = projectDetails[id] || {};

    return (
        <main className="project-page">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className="project-images">
                {project.images && project.images.map((image, index) => (
                    <img key={index} src={image} alt={`${project.title} ${index + 1}`} />
                ))}
            </div>
            <p>{project.text}</p>
        </main>
    );
};

export default ProjectPage;