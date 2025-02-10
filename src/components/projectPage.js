import React, {useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from "./button";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '../style/projectpage.scss';
import {Pagination} from 'swiper/modules';

const projectDetails = {
    smash: {
        title: 'Smash',
        description: 'Smash est un média destiné aux 18-25 ans. Il propose de lutter contre la désinformation. \n' +
            'Tous les jours, l\'utilisateur a accès à 3 citations de personnes publiques sur des sujets d\'actualité et doit déterminer si c\'est une info (basé sur des faits) ou une intox (basé sur une opinion ou une interprétation des faits). Il peut ensuite s\'informer de façon plurielle sur cette actualité et en débattre dans un espace commentaire.\n' +
            'Notre application avait plusieurs besoins : des comptes utilisateurs, un système de sondage, d\'amis et de commentaires ainsi que la création et gestion d\'articles.',
        images: ['/assets/smash-1.png', '/assets/smash-2.png', '/assets/smash-3.png'],
        linkFigma: 'https://www.figma.com/design/iuAP57wyrjMOlp2AdZuRLy/SMASH?m=auto&t=6La0QN4LOZ35hia1-6',
    },
    flop: {
        title: 'Flop\'EDT',
        description: 'Audit ergonomique & refonte du système de gestion de planning',
        images: ['/assets/flop-1.png', '/assets/flop-2.png', '/assets/flop-3.png'],
        linkFigma: 'https://www.figma.com/design/9fY2i3PUefoq9BwAPgPAYa/Refonte-Flop!Edt',
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
                <div className="project-description-head">
                    <h1>{project.title}</h1>
                    <div className="project-links">
                        {project.linkFigma && (
                            <Button to={project.linkFigma} external={true} label="Voir le Figma" />
                        )}
                    </div>
                </div>
                <p>{project.description}</p>
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
