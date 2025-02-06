import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './card';
import '../style/pageContent.scss';

const PageContent = ({ category }) => {
    const navigate = useNavigate();

    const categoryData = {
        uiux: [
            { id: 'pasnumerise',    label: 'Nous n\'avons pas numérisé', image: '/assets/ui-pasnumerise.png' },
            { id: 'flop', label: 'FlopEdt', image: '/assets/ui-flop.png' },
            { id: 'maria', label: 'Maria', image: '/assets/ui-maria.png' },
            { id: 'capc', label: 'CAPC', image: '/assets/ui-capc.png' },
            { id: 'smash', label: 'Smash', image: '/assets/ui-smash.png' },
            { id: 'reserve', label: 'La réserve - Musba', image: '/assets/ui-reserve.png' },
        ],
        photo: [
            { id: 'argentique', label: 'Argentique', image: '/assets/photo-argentique.png' },
            { id: 'auto', label: 'Autoportrait', image: '/assets/photo-auto.png' },
            { id: 'animaux', label: 'Animaux', image: '/assets/photo-animaux.png' },
            { id: 'bordeaux', label: 'Bordeaux', image: '/assets/photo-bordeaux.png' },
            { id: 'macro', label: 'Macro', image: '/assets/photo-macro.png' },
        ],
        illu: [
            { id: 'allo', label: 'Allô à l\'huile', image: '/assets/illu-allo.png' },
            { id: 'logommi', label: 'Logo MMI', image: '/assets/illu-logommi.png' },
            { id: 'miel', label: 'Miel de 4SH', image: '/assets/illu-miel.png' },
            { id: 'art', label: 'Art', image: '/assets/illu-art.png' },
            { id: 'Amis', label: 'Amis', image: '/assets/illu-ami.png' },
            { id: 'Pieuvre', label: 'Pieuvre', image: '/assets/illu-pieuvre.png' },
            { id: 'cocktails', label: 'Cocktails', image: '/assets/illu-cocktails.png' },
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
