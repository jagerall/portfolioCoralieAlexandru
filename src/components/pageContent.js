import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './card';
import '../style/pageContent.scss';
import { Helmet } from 'react-helmet';

const categoryTitles = {
    uiux: "Coralie Alexandru - UI/UX",
    photographie: "Coralie Alexandru - Photographie",
    illustration: "Coralie Alexandru - Illustrations",
  /*  autre: "Coralie Alexandru - Autres",*/
/*    about: "Coralie Alexandru - À propos",*/
};

const PageContent = ({ category }) => {
    const navigate = useNavigate();

    const categoryData = {
        uiux: [
            { id: 'booking', label: 'Booking', image: '/assets/ui-booking.svg', category: 'uiux', type: 'Refonte' },
            { id: 'pasnumerise', label: 'Nous n\'avons pas numérisé', image: '/assets/ui-pasnumerise.svg', category: 'uiux', type: 'Retour d\'expérience' },
            { id: 'flop', label: 'FlopEdt', image: '/assets/ui-flop.svg', category: 'uiux', type: 'Audit UX & UI' },
            { id: 'maria', label: 'Maria', image: '/assets/ui-maria.svg', category: 'uiux', type: 'Narration interactive' },
            { id: 'capc', label: 'CAPC', image: '/assets/ui-capc.webp', category: 'uiux', type: 'Refonte de site' },
            { id: 'smash', label: 'Smash', image: '/assets/ui-smash.svg', category: 'uiux', type: 'Application' },
            { id: 'reserve', label: 'La Réserve du Musba', image: '/assets/ui-reserve.svg', category: 'uiux', type: 'Narration interactive' },
        ],
        photographie: [
            { id: 'argentique', label: 'Argentique', image: '/assets/photo-argentique.webp', category: 'photographie', type: 'Èze' },
            { id: 'auto', label: 'Portrait', image: '/assets/photo-auto.webp', category: 'photographie', type: 'Coralie' },
            { id: 'faune', label: 'Faune et flore', image: '/assets/photo-animaux.webp', category: 'photographie', type: 'Zoo de la Palmyre' },
            { id: 'bordeaux', label: 'Urbain', image: '/assets/photo-bordeaux.webp', category: 'photographie', type: 'Bordeaux' },
            { id: 'macro', label: 'Macro', image: '/assets/photo-macro.webp', category: 'photographie', type: 'Vendée' },
        ],
        illustration: [
            { id: 'allo', label: 'Coques de téléphone', image: '/assets/illu-allo.webp', category: 'illustration', type: 'Design' },
            { id: 'logommi', label: 'BDE MMI', image: '/assets/illu-logommi.webp', category: 'illustration', type: 'Logo' },
            { id: 'miel', label: 'Miel de 4SH', image: '/assets/illu-miel.webp', category: 'illustration', type: 'Étiquette ' },
            { id: 'art', label: 'Art', image: '/assets/illu-art.webp', category: 'illustration', type: 'Essais tableaux' },
            { id: 'amis', label: 'Amis', image: '/assets/illu-ami.webp', category: 'illustration', type: 'Dessin numérique' },
            { id: 'cephalopode', label: 'Céphalopodes', image: '/assets/illu-pieuvre.webp', category: 'illustration', type: 'Dessin numérique' },
           /* { id: 'autocollant', label: 'Autocollant', image: '/assets/autocollant.webp', category: 'illustration', type: 'Dessin numérique' },*/
            { id: 'cocktails', label: 'Cocktails', image: '/assets/illu-cocktails.webp', category: 'illustration', type: 'Dessin numérique' },
            { id: 'nature', label: 'Nature', image: '/assets/gouache-5.webp', category: 'illustration', type: 'Gouache' },
        ],
    };

    const projects = categoryData[category] || [];

    useEffect(() => {
        document.title = categoryTitles[category] || "Coralie Alexandru";
    }, [category]);

    return (

        <main className="page-content">
            <Helmet>
                {/* Titre dynamique de la page */}
                <title>{categoryTitles[category] || "Coralie Alexandru"}</title>

                {/* Description dynamique basée sur la catégorie */}
                <meta name="description" content={`Découvrez mes projets en ${categoryTitles[category] || 'divers'} : ${categoryTitles[category] || 'portfolio créatif'}.`} />

                {/* Meta Open Graph (pour Facebook, LinkedIn, etc.) */}
                <meta property="og:title" content={categoryTitles[category] || "Coralie Alexandru"} />
                <meta property="og:description" content={`Découvrez mes projets en ${categoryTitles[category] || 'divers'} : ${categoryTitles[category] || 'portfolio créatif'}.`} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/assets/header-illu.wepb" />  {/* Image de partage sur les réseaux sociaux */}
                <meta property="og:url" content={`https://coraliealexandru.fr/${category}`} />

                {/* Meta Twitter Card (pour Twitter) */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={categoryTitles[category] || "Coralie Alexandru"} />
                <meta name="twitter:description" content={`Découvrez mes projets en ${categoryTitles[category] || 'divers'} : ${categoryTitles[category] || 'portfolio créatif'}.`} />
                <meta name="twitter:image" content="/assets/header-illu.wepb" />  {/* Image de partage sur Twitter */}

                {/* Meta Robots pour indiquer l'indexation par les moteurs de recherche */}
                <meta name="robots" content="index, follow" />
            </Helmet>

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
