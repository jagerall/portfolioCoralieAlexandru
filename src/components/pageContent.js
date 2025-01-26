import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './card';
import '../style/pageContent.scss';

const PageContent = ({ category }) => {
    const navigate = useNavigate();

    const categoryData = {
        uiux: [
            { id: 'pasnumerise',    label: 'Nous n\'avons pas numérisé', image: '/assets/pasnumerise.png' },
            { id: 'flop', label: 'FlopEdt', image: '/assets/flop.png' },
            { id: 'maria', label: 'Maria', image: '/assets/maria.png' },
            { id: 'terraium', label: 'Terrarium', image: '/assets/terrarium.png' },
            { id: 'capc', label: 'CAPC', image: '/assets/capc.png' },
        ],
        da: [
            { id: 'art1', label: 'Art1', image: '/assets/test.png' },
            { id: 'art2', label: 'Art2', image: '/assets/test.png' },
        ],
        photo: [
            { id: 'photo1', label: 'Photo1', image: '/assets/test.png' },
            { id: 'photo2', label: 'Photo2', image: '/assets/test.png' },
        ],
        illu: [
            { id: 'photo1', label: 'Photo1', image: '/assets/test.png' },
            { id: 'photo2', label: 'Photo2', image: '/assets/test.png' },
        ],
        moi: [
            { id: 'photo1', label: 'Photo1', image: '/assets/test.png' },
            { id: 'photo2', label: 'Photo2', image: '/assets/test.png' },
        ],
    };

    const projects = categoryData[category] || [];

    return (
        <main className="page-content">
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
