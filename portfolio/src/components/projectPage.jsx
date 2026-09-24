import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from "./button";
import Link from "./link";
import Tag from "./tag";
import { motion, AnimatePresence } from 'framer-motion';
import '../style/projectpage.scss';
import { useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';

const ParallaxMedia = ({ item, idx, mIdx, projectTitle, onClick, aspectRatios }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springConfig = { stiffness: 300, damping: 30 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  const scaleSpring = useSpring(1, { stiffness: 300, damping: 20 });

  const imgX = useTransform(springX, [0, 1], ["-2%", "2%"]);
  const imgY = useTransform(springY, [0, 1], ["-2%", "2%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    mouseX.set(xPos);
    mouseY.set(yPos);
  };

  const handleMouseEnter = () => {
    // Only parallax, no zoom
  };
  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`media-item-editorial ${aspectRatios[item.src] && aspectRatios[item.src] < 1 ? 'portrait' : 'landscape'}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ overflow: 'hidden' }}
    >
      <motion.div style={{ width: '110%', height: '110%', x: imgX, y: imgY, position: 'relative', left: '-5%', top: '-5%' }}>
        {item.type === 'video' ? (
          <video src={item.src} loop muted playsInline autoPlay style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <img src={item.src} alt={`${projectTitle} media ${idx} - ${mIdx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        )}
      </motion.div>
    </motion.div>
  );
};

const projectDetails = {
 
  liko: {
    category: 'DA',
    title: 'Liko',
    tags: ['produit fictif pour AIGLE'],
    sections: [
      {
        type: 'text',
        title: 'La situation',
        content: <>Dans le cadre d'un projet de M1, AIGLE nous a confié la création d'un produit allant dans le sens de la planète. Travaillant en binôme, sans durée imposée, j'ai ancré la marque dans ses territoires : <strong>la montagne, l'outdoor et l'éco-responsabilité</strong>.</>
      },
      {
        type: 'media',
        images: [
          '/assets/liko-1.png',
          '/assets/liko-2.png',
          '/assets/liko-3.png',
          '/assets/liko-4.png'
        ],
        videos: [
          { src: '/assets/liko-vid-2.mp4', type: 'video/mp4' },
          { src: '/assets/liko-vid-1.mp4', type: 'video/mp4' }
        ]
      },
      {
        type: 'text',
        title: 'La tâche',
        content: <>Concevoir un produit et sa promotion. J'ai choisi de <strong>penser Liko de bout en bout : l'objet, l'expérience et la communication</strong>.</>
      },
      {
        type: 'text',
        title: "L'action",
        content: <><strong>Liko est une gourde qui infuse pendant l'effort et transforme, lors de la descente, les fleurs et plantes cueillies sur la montagne gravie en boisson alcoolisée</strong> : plus l'effort est long, plus la boisson est riche. L'objet offre un réconfort immédiat, obtenu par soi-même. Il se décline en trois versions colorées (fruits, plantes, fleurs). La direction artistique s'inspire des <strong>hyōtan</strong>, gourdes traditionnelles japonaises utilisées pour transporter le saké ; la gourde est chromée et gravée de reliefs topographiques. <strong>La forme a été générée par IA</strong>, et j'ai piloté la direction artistique autour. Pour rester fidèle à l'esprit d'AIGLE, j'ai adopté un style éditorial sur l'ensemble des <strong>8 livrables : 2 vidéos pour les réseaux, des affiches et un shooting photo</strong> à l'angle mode, afin de préserver l'allure premium de l'objet.</>
      },
      {
        type: 'media',
        images: [
          '/assets/liko-5.png',
          '/assets/liko-6.png',
          '/assets/liko-7.png',
          '/assets/liko-8.png'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: <>Les retours de nos enseignants ont fait émerger l'idée d'une <strong>version infusée sans alcool</strong>, qui élargit la cible du produit. J'en retiens une <strong>direction artistique cohérente de l'objet jusqu'aux visuels</strong>, centrée sur l'expérience sensorielle et le storytelling.</>
      }
    ]
  },
  sliced: {
    category: 'DA',
    title: 'Sliced',
    tags: ["exposition temporaire pour le Natural History Museum"],
    sections: [
      {
        type: 'text',
        title: 'La situation',
        content: <>Pour mon projet de fin de première année de master, aucune contrainte n'était imposée. J'ai donc choisi de <strong>concevoir une exposition inédite</strong>. Mon choix s'est porté sur le <strong>Natural History Museum</strong>, dont la vocation est déjà d'observer l'intérieur des choses, vivantes ou non.</>
      },
      {
        type: 'media',
        images: [
          '/assets/sliced-3.png',
          '/assets/sliced-1.png',
          '/assets/sliced-2.png',
          '/assets/sliced-4.png',
          '/assets/sliced-5.png',
          '/assets/sliced-6.png',
          '/assets/sliced-7.png',
          '/assets/sliced-8.png'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'La tâche',
        content: <><strong>Faire découvrir au public des objets qu'il n'a jamais vus de l'intérieur</strong>, sans l'intimider, en suscitant sa curiosité et en concentrant toute son attention sur les objets.</>
      },
      {
        type: 'text',
        title: "L'action",
        content: <><strong>J'ai réalisé l'ensemble du projet seule, de la direction artistique à la signalétique.</strong> Les salles sont blanches et épurées, pour laisser toute la place aux objets. Chacun est <strong>découpé en tranches, présenté dans un cube en plexiglas</strong> et éclairé comme une pièce de collection. Chaque salle a sa propre couleur, <strong>rouge et bleu</strong> : deux complémentaires qui ne se confondent jamais, pour se repérer facilement dans un musée entièrement blanc. J'ai décliné l'univers en <strong>12 livrables</strong> : affiches, panneaux intérieurs et extérieurs, tickets, tote bag, merchandising, badge interactif et court motion.</>
      },
      {
        type: 'media',
        images: [
          '/assets/sliced-9.png',
          '/assets/sliced-10.png',
          '/assets/sliced-11.png',
          '/assets/sliced-12.png',
          '/assets/sliced-13.png',
          '/assets/sliced-14.gif',
          '/assets/sliced-15.gif'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: <>L'exposition n'a pas été réalisée : elle reste un projet conceptuel. Elle a toutefois abouti à <strong>un univers complet et cohérent</strong>, du panneau d'entrée au badge que le visiteur emporte, dont je peux justifier chaque choix. J'en retiens qu'<strong>une direction artistique muséale se joue autant dans le parcours que dans le graphisme</strong>.</>
      }
    ],
    linkBehance: 'https://www.behance.net/gallery/250749467/Sliced-Exposition-Conceptuelle'
  },
  reserve: {
    category: 'UI/UX',
    title: 'La Réserve',
    tags: ["jeu narratif pour la Nuit au Musée du MusBA de Bordeaux"],
    sections: [
      {
        type: 'text',
        title: 'La situation',
        content: <>Chaque année, le MusBA s'associe à l'école pour la <strong>Nuit au Musée</strong>. Nous disposions d'une semaine pour concevoir ce jeu, avec l'ensemble de la classe et une référente au sein du musée. Mon équipe comptait <strong>7 personnes</strong>.</>
      },
      {
        type: 'media',
        images: [
          '/assets/reserve-1.webp',
          '/assets/reserve-2.webp',
          '/assets/reserve-3.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'La tâche',
        content: <><strong>Concevoir un jeu narratif</strong> qui donne envie de <strong>découvrir les réserves d'un musée</strong>, espace habituellement fermé au public. Le joueur incarne l'assistant du conservateur et <strong>prépare une exposition en sélectionnant des œuvres</strong>.</>
      },
      {
        type: 'text',
        title: "L'action",
        content: <>J'ai principalement réalisé l'<strong>illustration</strong>, en plus d'une partie du <strong>développement</strong>, soit <strong>une quarantaine d'assets et de décors dessinés sous Procreate</strong>. Les réserves nous étant inaccessibles, nous avons fait de cet <strong>inconnu un lieu magique</strong> : Tristan, le réserviste, est un magicien à capuche et à bâton, dans l'esprit de Gandalf. <strong>Chaque œuvre choisie transforme le musée</strong> : les murs, la décoration de la salle et la musique, qui n'est pas toujours audible mais fait partie de l'expérience. Le scénario prévoyait 9 fins, dont 6 ont été développées. Nous avons travaillé à partir d'œuvres réellement exposées au musée et testé le jeu sur place pour valider son fonctionnement.</>
      },
      {
        type: 'media',
        images: ['/assets/reserve-4.webp', '/assets/reserve-5.webp'],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: <>Le jeu a été <strong>proposé au public sur la tablette du musée pendant un an</strong> et a été bien accueilli. Le tactile vieillissant de la tablette nous a conduits à <strong>supprimer le glisser-déposer au profit de simples clics</strong>.</>
      }
    ],
    linkWebsite: 'https://nuit-du-musba-2025.netlify.app/experiences/1-hub/index.html'
  },
  gfy: {
    category: 'DA',
    title: 'Go Fail Yourself',
    tags: ["campagne 360° fictive pour Black Diamond"],
    sections: [
      {
        type: 'text',
        title: 'La situation',
        content: <>Dans le cadre de ce projet de M1, le sujet consistait à imaginer en 18 heures la campagne 360° d'une marque de haute montagne. Le choix de la marque et de la problématique m'appartenait. J'ai retenu <strong>Black Diamond</strong>, marque d'escalade et d'alpinisme pour laquelle la fiabilité du matériel est essentielle.</>
      },
      {
        type: 'media',
        images: [
          '/assets/gfy-4.webp',
          '/assets/gfy-5.webp',
          '/assets/gfy-3.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'La tâche',
        content: <>Lutter contre la surconsommation en changeant le regard porté sur l'usure : <strong>un mousqueton rayé n'est pas un mousqueton hors d'usage</strong>. Des équipements encore fiables sont remplacés simplement parce qu'ils ont perdu leur éclat.</>
      },
      {
        type: 'text',
        title: "L'action",
        content: <>J'ai conçu l'ensemble du projet, du constat au concept : inciter les grimpeurs à échouer pour constater par eux-mêmes que le matériel résiste. « <strong>Go Fail Yourself</strong> » : si un équipement tient après 50 chutes, pourquoi le remplacer ? J'ai décliné l'idée en 9 livrables : 3 affiches, 3 posts Instagram provoquant la concurrence (« So mad, it broke »), <strong>une application en réalité augmentée, Ghost Beta, permettant d'archiver ses chutes</strong>, un packaging et le <strong>Golden Carabiner, un mousqueton plaqué or à retrouver qui récompense ceux qui testent leur matériel</strong>. La direction artistique est brute : noir et jaune, associant une typographie d'impact (Druk Wide) à une typographie technique (Roboto Mono). Mes références vont de Dark Souls à la chronophotographie de Marey, pour décomposer une chute, jusqu'à l'Atelier Populaire de Mai 68 pour la provocation.</>
      },
      {
        type: 'media',
        images: [
          '/assets/gfy-2.webp',
          '/assets/gfy-6.webp',
          '/assets/gfy-1.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: <>Ce projet m'a valu la deuxième meilleure note de la classe. Le jour de ma soutenance, Black Diamond a lancé un événement très proche de mon Golden Carabiner à retrouver. J'en retiens qu'<strong>une idée forte tient lorsqu'on la décline de l'affiche jusqu'à l'application</strong>.</>
      }
    ]
  },
  wordbroker: {
    category: 'DA',
    title: 'THE WORD_BROKER',
    tags: ["digital event de l'ESD, installation interactive"],
    sections: [
      {
        type: 'text',
        title: 'La situation',
        content: <>Pour le digital event de l'ESD, nos enseignants nous ont confié un concept : <strong>une installation où la parole devient une marchandise</strong>. Nous étions deux étudiants chargés de sa mise en œuvre, en 2 semaines, pour 3 jours d'exposition.</>
      },
      {
        type: 'media',
        images: [
          '/assets/wordbroker-8.webp',
          '/assets/wordbroker-4.webp',
          '/assets/wordbroker-5.webp'
        ],
        videos: [
          {
            src: 'https://framerusercontent.com/assets/1AqDt7IyOyPCbj4edidzqHCX4U.mp4',
            type: 'video/mp4'
          }
        ]
      },
      {
        type: 'text',
        title: 'La tâche',
        content: <><strong>Amener le public à s'interroger sur la valeur de ses mots</strong> : ce que vaut une personne aux yeux d'une société capitaliste, et <strong>ce que représente le fait de confier sa parole à une IA</strong>.</>
      },
      {
        type: 'text',
        title: "L'action",
        content: <>J'ai assuré la direction artistique, la <strong>programmation de l'IA (Gemini, sur Raspberry Pi)</strong> et l'<strong>intégration web du ticket</strong> pour son impression. La scénographie est volontairement austère : un stand, un spot, une salle noire. Le visiteur s'exprime dans un <strong>interphone des années 70, chiné puis réactivé</strong>. L'IA analyse sa parole et la réduit à une valeur, imprimée sur un ticket au ton cynique. J'ai construit le stand et <strong>imprimé en 3D les embouchures</strong> de sortie des tickets. Pendant le temps d'analyse, une musique d'attente enjouée (« veuillez patienter, votre prix arrive ») est brutalement contredite par le ticket. Les contraintes physiques du Raspberry Pi ont représenté la principale difficulté technique.</>
      },
      {
        type: 'media',
        images: [
          '/assets/wordbroker-1.webp',
          '/assets/wordbroker-2.webp',
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: <><strong>Environ une centaine de personnes ont testé l'installation.</strong> Les réactions, souvent inquiètes ou réticentes à l'idée de parler à une IA, ont atteint l'objectif : susciter la réflexion. Certains visiteurs repartaient avec leur ticket, d'autres l'abandonnaient devant le stand. Nos enseignants ont été satisfaits et envisagent de <strong>proposer l'installation à des musées à l'international</strong>. Il s'agit de ma <strong>première création exposée : j'ai appris à m'investir pleinement dans le processus physique</strong>, de la scénographie jusqu'au socle.</>
      }
    ]
  }
}

const ProjectPage = () => {
  const iframeEmbeds = {
    booking: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/mVKZJIssy5jUCxBWxXQ2gs/Boooking---Refonte?node-id=2069-66",
    livret: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/MWFT7RRzr5dSMiwM64qdlW/Rendu---Design---cybers%C3%A9curit%C3%A9?node-id=419-13284&page-id=0%3A1"
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectDetails[id] || {};
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [aspectRatios, setAspectRatios] = useState({});

  const allMedia = (project.sections || []).reduce((acc, section) => {
    if (section.type === 'media') {
      const vids = (section.videos || []).map(video => ({ type: 'video', src: video.src }));
      const imgs = (section.images || []).map(img => ({ type: img.endsWith('.gif') ? 'gif' : 'image', src: img }));
      return [...acc, ...vids, ...imgs];
    }
    return acc;
  }, []);

  useEffect(() => {
    allMedia.forEach((media) => {
      if (media.type === 'image' || media.type === 'gif') {
        const img = new Image();
        img.src = media.src;
        img.onload = () => {
          setAspectRatios(prev => ({
            ...prev,
            [media.src]: img.width / img.height
          }));
        };
      }
    });
  }, [project.title]); // Refetch if project changes

  const openImage = (index) => {
    if (index >= 0 && index < allMedia.length) {
      setCurrentIndex(index);
      setSelectedImage(allMedia[index]);
      document.body.classList.add('overlay-active');
    }
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.classList.remove('overlay-active');
  };

  const nextImage = () => {
    if (allMedia.length === 0) return;
    const nextIndex = (currentIndex + 1) % allMedia.length;
    openImage(nextIndex);
  };

  const prevImage = () => {
    if (allMedia.length === 0) return;
    const prevIndex = (currentIndex - 1 + allMedia.length) % allMedia.length;
    openImage(prevIndex);
  };

  useEffect(() => {
    document.body.classList.add('project-page-active');
    if (project.title) {
      document.title = `Coralie Alexandru - ${project.title}`;
    } else {
      document.title = "Coralie Alexandru";
    }
    return () => {
      document.body.classList.remove('project-page-active');
    };
  }, [project.title, project.category]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage) {
        if (event.key === 'ArrowLeft') {
          prevImage();
        } else if (event.key === 'ArrowRight') {
          nextImage();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, currentIndex]);

  const introSection = project.sections && project.sections.length > 0 && project.sections[0].type === 'text' ? project.sections[0] : null;
  const remainingSections = project.sections ? (introSection ? project.sections.slice(1) : project.sections) : [];

  return (<main className="project-page-editorial">
    <div className="project-top-section">
      <h1 className="project-hero-title bold">{project.title}</h1>
      {project.tags && project.tags.length > 0 && (
        <div className="project-tags-container">
          <p className="project-page-tags bold">
            {project.tags.join(', ')}
          </p>
        </div>
      )}
      <div className="project-intro-container">
        {introSection && (
          <div className="intro-content">
            <div className="section-title-wrapper">
              <motion.div className="section-title" style={{ y: bgY }}>{introSection.title}</motion.div>
            </div>
            <h3 className="section-subtitle">{introSection.title}</h3>
            <p>{introSection.content}</p>
          </div>
        )}
      </div>
    </div>

    <div className="project-sections-linear">
      <div className="project-section-media">
        {(() => {
          // 1. Flatten all text and media items
          const allElements = [];
          remainingSections.forEach((section) => {
            if (section.type === 'text') {
              allElements.push({ type: 'text', title: section.title, content: section.content });
            } else if (section.type === 'media') {
              const sectionMedia = [
                ...(section.videos || []).map(video => ({ type: 'video', src: video.src })),
                ...(section.images || []).map(img => ({ type: img.endsWith('.gif') ? 'gif' : 'image', src: img }))
              ];
              allElements.push(...sectionMedia);
            }
          });

          // 2. Extract all text, video, and image items
          const textItems = allElements.filter(el => el.type === 'text');
          const videoItems = allElements.filter(el => el.type === 'video' || el.type === 'gif');
          const imageItems = allElements.filter(el => el.type === 'image');

          const finalElements = [...videoItems, ...imageItems];

          let offset = 0;
          textItems.forEach((textItem) => {
            const insertIndex = Math.min(offset, finalElements.length);
            finalElements.splice(insertIndex, 0, textItem);
            offset += 4;
          });

          // 3. Render items
          let globalMediaCount = 0;
          return finalElements.map((item, idx) => {
            if (item.type === 'text') {
              return (
                <div key={`elem-${idx}`} className="media-item-editorial text-item-editorial">
                  <div className="section-title-wrapper">
                    <motion.div className="section-title" style={{ y: bgY }}>{item.title}</motion.div>
                  </div>
                  <h3 className="section-subtitle">{item.title}</h3>
                  <p className="section-content">{item.content}</p>
                </div>
              );
            } else {
              const currentGlobalIndex = globalMediaCount++;
              return (
                <ParallaxMedia
                  key={`elem-${idx}`}
                  item={item}
                  idx={0}
                  mIdx={idx}
                  projectTitle={project.title}
                  onClick={() => openImage(currentGlobalIndex)}
                  aspectRatios={aspectRatios}
                />
              );
            }
          });
        })()}
      </div>

      {/* Legacy sources links, if still relevant */}
      {project.sources && project.sources.length > 0 && (
        <div className="project-section-text sources-section">
          <p>Sources :
            <ul>{project.sources.map((s) => (
              <li key={s.url} className="project-source flex">
                <Link key={s.url} href={s.url} label={s.label} />
              </li>
            ))}</ul>
          </p>
        </div>
      )}
    </div>

    {iframeEmbeds[id] && (
      <div className={`iframe-embed ${id === "livret" || id === "gfy" ? "livret-mode" : iframeEmbeds[id].includes("behance.net") ? "behance-mode" : ""}`}>
        <iframe title={"embed-" + id} loading="lazy" src={iframeEmbeds[id]} allow="fullscreen" />
      </div>
    )}

    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="fullscreen-overlay"
          onClick={closeImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="fullscreen-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="fullscreen-media-container"
              >
                {selectedImage.type === 'video' ? (
                  <video src={selectedImage.src} loop muted playsInline autoPlay />
                ) : (
                  <img src={selectedImage.src} alt="Fullscreen preview" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="fullscreen-nav-prev">
            <Button className="nav-btn" onClick={(e) => { e.stopPropagation(); prevImage(); }} label="Précédent" />
          </div>
          <div className="fullscreen-nav-next">
            <Button className="nav-btn" onClick={(e) => { e.stopPropagation(); nextImage(); }} label="Suivant" />
          </div>
          <Button className="close-btn" label={'Fermer'} onClick={closeImage} />
        </motion.div>
      )}
    </AnimatePresence>
  </main>);
};

export default ProjectPage;