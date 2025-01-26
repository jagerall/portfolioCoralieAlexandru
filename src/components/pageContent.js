import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './card';
import '../style/pageContent.scss';

const PageContent = ({ category }) => {
    const navigate = useNavigate();

    // Données des projets par catégorie
    const categoryData = {
        uiux: [
            { id: 'flip', label: 'Flip', description: 'Un projet interactif.', image: '/assets/test.png' },
            { id: 'test', label: 'Test', description: 'Un test d’interface.', image: '/assets/test.png' },
            { id: 'caca', label: 'Caca', description: 'Un projet drôle.', image: '/assets/test.png' },
        ],
        da: [
            { id: 'art1', label: 'Art1', description: 'Un projet artistique.', image: '/assets/test.png' },
            { id: 'art2', label: 'Art2', description: 'Un autre projet artistique.', image: '/assets/test.png' },
        ],
        photo: [
            { id: 'photo1', label: 'Photo1', description: 'Une belle photo.', image: '/assets/test.png' },
            { id: 'photo2', label: 'Photo2', description: 'Une autre belle photo.', image: '/assets/test.png' },
        ],
        illu: [
            { id: 'photo1', label: 'Photo1', description: 'Une belle photo.', image: '/assets/test.png' },
            { id: 'photo2', label: 'Photo2', description: 'Une autre belle photo.', image: '/assets/test.png' },
        ],
        moi: [
            { id: 'photo1', label: 'Photo1', description: 'Une belle photo.', image: '/assets/test.png' },
            { id: 'photo2', label: 'Photo2', description: 'Une autre belle photo.', image: '/assets/test.png' },
        ],
    };

    // Récupérer les projets de la catégorie demandée
    const projects = categoryData[category] || [];

    return (
        <main className="page-content">
            <h1>{category.toUpperCase()} Projects</h1>
            <div className="cards-container">
                {projects.map(project => (
                    <Card
                        key={project.id}
                        image={project.image}
                        label={project.label}
                        onClick={() => navigate(`/projet/${project.id}`)}
                    />
                ))}
            </div>
        </main>
    );
};

export default PageContent;
