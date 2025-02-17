import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './card';
import '../style/pageContent.scss';

const categoryTitles = {
    uiux: "UI/UX",
    photo: "Photographie",
    illu: "Illustrations",
    autre: "Autres",
    about: "À propos",
};

const PageContent = ({ category }) => {
    const navigate = useNavigate();

    const categoryData = {
        uiux: [
            { id: 'pasnumerise', label: 'Nous n\'avons pas numérisé', image: '/assets/ui-pasnumerise.svg', category: 'uiux', type: 'Retour d\'expérience' },
            { id: 'flop', label: 'FlopEdt', image: '/assets/ui-flop.svg', category: 'uiux', type: 'Audit UX & UI' },
            { id: 'maria', label: 'Maria', image: '/assets/ui-maria.svg', category: 'uiux', type: 'Narration interactive' },
            { id: 'capc', label: 'CAPC', image: '/assets/ui-capc.webp', category: 'uiux', type: 'Refonte de site' },
            { id: 'smash', label: 'Smash', image: '/assets/ui-smash.svg', category: 'uiux', type: 'Application' },
            { id: 'reserve', label: 'La Réserve du Musba', image: '/assets/ui-reserve.svg', category: 'uiux', type: 'Narration interactive' },
        ],
        photo: [
            { id: 'argentique', label: 'Argentique', image: '/assets/photo-argentique.webp', category: 'photo', type: 'Èze' },
            { id: 'auto', label: 'Portrait', image: '/assets/photo-auto.webp', category: 'photo', type: 'Coralie' },
            { id: 'faune', label: 'Faune et flore', image: '/assets/photo-animaux.webp', category: 'photo', type: 'Zoo de la Palmyre' },
            { id: 'bordeaux', label: 'Urbain', image: '/assets/photo-bordeaux.webp', category: 'photo', type: 'Bordeaux' },
            { id: 'macro', label: 'Macro', image: '/assets/photo-macro.webp', category: 'photo', type: 'Vendée' },
        ],
        illu: [
            { id: 'allo', label: 'Coques de téléphone', image: '/assets/illu-allo.webp', category: 'illu', type: 'Design' },
            { id: 'logommi', label: 'BDE MMI', image: '/assets/illu-logommi.webp', category: 'illu', type: 'Logo' },
            { id: 'miel', label: 'Miel de 4SH', image: '/assets/illu-miel.webp', category: 'illu', type: 'Étiquette ' },
            { id: 'art', label: 'Art', image: '/assets/illu-art.webp', category: 'illu', type: 'Essais tableaux' },
            { id: 'amis', label: 'Amis', image: '/assets/illu-ami.webp', category: 'illu', type: 'Dessin numérique' },
            { id: 'cephalopode', label: 'Céphalopodes', image: '/assets/illu-pieuvre.webp', category: 'illu', type: 'Dessin numérique' },
            { id: 'autocollant', label: 'Autocollant', image: '/assets/autocollant.webp', category: 'illu', type: 'Dessin numérique' },
            { id: 'cocktails', label: 'Cocktails', image: '/assets/illu-cocktails.webp', category: 'illu', type: 'Dessin numérique' },
        ],
        /*autre: [
            { id: 'mainslibres', label: 'Les Mains Libres', image: '/assets/mainslibres.webp', category: 'autre', type: 'Direction Artistique' },
            { id: 'motion', label: 'Distortions cognitives', image: '/assets/motion.webp', category: 'autre', type: 'Motion Design' },
        ],*/
    };

    const projects = categoryData[category] || [];

    useEffect(() => {
        document.title = categoryTitles[category] || "Coralie Alexandru";
    }, [category]);

    return (
        <main className="page-content">
            <div className="cards-container">
                {projects.map(project => (
                    <Card
                        key={project.id}
                        image={project.image}
                        label={project.label}
                        onClick={() => navigate(`/${project.category}/${project.id}`)}
                        type={project.type}
                    />
                ))}
            </div>
        </main>
    );
};

export default PageContent;
