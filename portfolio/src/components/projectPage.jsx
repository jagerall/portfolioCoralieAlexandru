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
        content: <>AIGLE nous a demandé, pour un projet de M1, de créer un produit qui va dans le sens de la planète. On l'a fait à deux, sans durée imposée. J'ai relié la marque à ce qu'elle est : <strong>la montagne, l'outdoor, l'éco-responsabilité</strong>.</>
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
        content: <>Livrer un produit et sa promo. Pour moi, ça voulait dire <strong>penser Liko de A à Z : l'objet, l'expérience et la communication</strong>.</>
      },
      {
        type: 'text',
        title: "L'action",
        content: <><strong>Liko est une gourde qui infuse pendant l'effort et transforme, à la descente, les fleurs et plantes cueillies sur la montagne qu'on vient de gravir en boisson alcoolisée</strong> : plus l'effort est long, plus elle est riche. Je voulais qu'elle donne un réconfort immédiat, grâce à soi. Elle existe en trois versions de couleur (fruits, plantes, fleurs). La DA s'inspire des <strong>hyōtan</strong>, anciennes bouteilles de sake, avec une gourde chromée gravée de reliefs de topographie. <strong>La forme a été générée par IA</strong>, et j'ai piloté la DA autour. Pour rester dans l'esprit d'AIGLE, j'ai gardé un style éditorial sur les <strong>8 livrables : 2 vidéos pour les réseaux, des affiches et un shooting photo</strong> avec un angle mode, parce que ça reste un objet classe.</>
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
        content: <>Mes profs nous ont fait des retours qui ont fait émerger l'idée d'une <strong>version infusée pour les non-buveurs d'alcool</strong>, ce qui élargit le produit. J'en retiens surtout une <strong>DA cohérente du produit jusqu'aux visuels</strong>, centrée sur l'expérience sensorielle et le storytelling.</>
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
        content: <>Pour mon projet de fin de première année de master, je n'avais aucune contrainte. Alors je m'en suis donné une : <strong>imaginer une expo qu'on n'a jamais vue</strong>. J'ai choisi le <strong>Natural History Museum</strong> parce qu'on y observe déjà l'intérieur des choses, vivantes ou non.</>
      },
      {
        type: 'media',
        images: [
          '/assets/sliced-1.png',
          '/assets/sliced-2.png',
          '/assets/sliced-3.png',
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
        content: <><strong>Faire découvrir au public des objets qu'il n'a jamais vus de l'intérieur.</strong> Sans l'intimider, en l'intriguant, et en gardant toute son attention sur les objets.</>
      },
      {
        type: 'text',
        title: "L'action",
        content: <><strong>J'ai tout fait seule, de la DA à la signalétique.</strong> Une grande salle blanche, épurée, pour laisser la place aux objets. Chacun est <strong>coupé en tranches, présenté dans un cube en plexiglas</strong> et éclairé comme une pièce de collection. Les deux salles ont chacune leur couleur, <strong>rouge et bleu</strong>, deux complémentaires qui ne se confondent jamais : dans un musée tout blanc, on sait toujours où on est. J'ai décliné l'univers en <strong>12 livrables</strong> : affiches, panneaux intérieurs et extérieurs, tickets, tote bag, merch, badge interactif et un court motion.</>
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
        content: <>L'expo n'a jamais été construite, je ne vais pas prétendre le contraire. Mais <strong>j'ai un univers complet</strong>, du panneau devant l'entrée jusqu'au badge qu'on garde en repartant, et je peux défendre chaque choix. J'ai appris qu'<strong>une DA muséale se joue autant dans le parcours que dans le graphisme</strong>.</>
      }
    ],
    linkBehance: 'https://www.behance.net/gallery/250749467/Sliced-Exposition-Conceptuelle'
  },
  booking: {
    category: 'UI/UX',
    title: 'Booking',
    tags: ['Refonte de site'],
    sections: [
      {
        type: 'text',
        title: 'Mise en contexte',
        content: "J'ai réalisé la refonte de l'interface d'une plateforme de réservation type Booking afin d'améliorer l'expérience utilisateur. L'objectif était de simplifier la navigation, clarifier les informations et fluidifier le parcours de réservation.\n" +
          '\n' +
          "Après une analyse des points de friction, j'ai repensé l'architecture de l'information et conçu une interface plus épurée et intuitive, avec une meilleure hiérarchisation des contenus et une optimisation pour mobile.\n" +
          '\n' +
          "Ce projet m'a permis de renforcer mes compétences en UX/UI design et en conception d'interfaces centrées utilisateur."
      },
      {
        type: 'text',
        title: 'La problématique',
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: "L'action",
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: 'Texte à remplir...'
      }
    ],
    linkFigma: 'https://www.figma.com/design/mVKZJIssy5jUCxBWxXQ2gs/Boooking---Refonte?node-id=32-11984&t=HV3r2zPZtVBdjBDM-1'
  },
  voiesavenir: {
    category: 'UI/UX',
    title: "Les voies de l'avenir",
    tags: ['Plateforme pédagogique interactive'],
    sections: [
      {
        type: 'text',
        title: 'Mise en contexte',
        content: "J'ai participé à la conception de cette plateforme pédagogique dédiée à l'orientation et à la mixité professionnelle. L'objectif était de valoriser des parcours de femmes inspirantes à travers une interface dynamique et accessible.\n" +
          '\n' +
          "Le projet repose sur une architecture de l'information segmentée par filières d'études et sur un dispositif de médiation interactive. J'ai travaillé sur la création d'un parcours utilisateur fluide pour les lycéens, en mettant l'accent sur la hiérarchisation des contenus et l'optimisation de l'expérience de lecture.\n" +
          '\n' +
          "Ce projet m'a permis de mobiliser des compétences en UX/UI design, en gestion de projet collaboratif (BUT MMI) et en design inclusif."
      },
      {
        type: 'media',
        images: [
          '/assets/voies-avenir-1.webp',
          '/assets/voies-avenir-2.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'La problématique',
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: "L'action",
        content: 'Texte à remplir...'
      },
      {
        type: 'media',
        images: ['/assets/voies-avenir-3.webp'],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: 'Texte à remplir...'
      }
    ],
    linkWebsite: 'https://www.lesvoiesdelavenir.org/'
  },
  pasnumerise: {
    category: 'UI/UX',
    title: "Nous n'avons pas numérisé",
    tags: ["Retour d'expérience"],
    sections: [
      {
        type: 'text',
        title: 'Mise en contexte',
        content: "Site présentant notre remise en question de la création d'une application web"
      },
      {
        type: 'media',
        images: ['/assets/pasnumerise-1.webp', '/assets/pasnumerise-2.webp'],
        videos: []
      },
      {
        type: 'text',
        title: 'La problématique',
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: "L'action",
        content: 'Texte à remplir...'
      },
      {
        type: 'media',
        images: ['/assets/pasnumerise-3.webp'],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: 'Texte à remplir...'
      }
    ],
    linkWebsite: 'https://nousnavonspasnumerise.mmibordeaux.com/',
    linkGithub: ''
  },
  flop: {
    category: 'UI/UX',
    title: "Flop'EDT",
    tags: ['Audit UX & UI'],
    sections: [
      {
        type: 'text',
        title: 'Mise en contexte',
        content: "Au cours d'un projet de deux semaines sur l'UI/UX design, j'ai collaboré avec mon groupe pour repenser le gestionnaire d'emploi du temps Flop!Edt. La première semaine était dédiée à la recherche utilisateur pour comprendre les besoins et les frustrations des utilisateurs, tandis que la deuxième était consacrée à la conception et à l'itération des solutions. Nous avons identifié les lacunes du système existant et élaboré des wireframes détaillés, puis des maquettes interactives. Ce projet m'a permis de maîtriser le processus d'UX/UI design et de développer mes compétences sur Figma."
      },
      {
        type: 'media',
        images: ['/assets/flop-1.webp', '/assets/flop-2.webp'],
        videos: []
      },
      {
        type: 'text',
        title: 'La problématique',
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: "L'action",
        content: 'Texte à remplir...'
      },
      { type: 'media', images: ['/assets/flop-3.webp'], videos: [] },
      {
        type: 'text',
        title: 'Les résultats',
        content: 'Texte à remplir...'
      }
    ],
    linkFigma: 'https://www.figma.com/design/9fY2i3PUefoq9BwAPgPAYa/Refonte-Flop!Edt?node-id=446-73601&t=vd7N5q6ntJLqgEuS-1'
  },
  maria: {
    category: 'UI/UX',
    title: 'Maria',
    tags: ['Narration interactive'],
    sections: [
      {
        type: 'text',
        title: 'Mise en contexte',
        content: "Ce projet, est en partenariat avec le MusBa pour la Bacchanight 2024. Nous avons créé une histoire interactive avec les tableaux du musée. Notre groupe étions sur la période du siècle d'or hollandais. Nous avons effectué des recherches approfondies sur ce mouvement, pour réaliser une histoire fictive cohérente. Pendant ce projet, j'ai réalisé des visuels et des illustrations. Attention, il faut consulter le site en format mobile."
      },
      {
        type: 'media',
        images: [
          '/assets/maria-1.webp',
          '/assets/maria-3.webp',
          '/assets/maria-2.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'La problématique',
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: "L'action",
        content: 'Texte à remplir...'
      },
      {
        type: 'media',
        images: [
          '/assets/maria-4.webp',
          '/assets/maria-5.webp',
          '/assets/maria-6.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: 'Texte à remplir...'
      }
    ],
    linkWebsite: 'https://maria-bacchanight.netlify.app/'
  },
  capc: {
    category: 'UI/UX',
    title: 'CAPC',
    tags: ['Refonte de site'],
    sections: [
      {
        type: 'text',
        title: 'Mise en contexte',
        content: "Modernisation du site du musée pour améliorer l'accessibilité, avec un design responsive et une navigation optimisée."
      },
      { type: 'media', images: ['/assets/capc-1.webp'], videos: [] },
      {
        type: 'text',
        title: 'La problématique',
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: "L'action",
        content: 'Texte à remplir...'
      },
      { type: 'media', images: ['/assets/capc-2.webp'], videos: [] },
      {
        type: 'text',
        title: 'Les résultats',
        content: 'Texte à remplir...'
      }
    ],
    linkWebsite: 'https://capc-2022.netlify.app/'
  },
  smash: {
    category: 'UI/UX',
    title: 'Smash',
    tags: ['Application'],
    sections: [
      {
        type: 'text',
        title: 'Mise en contexte',
        content: 'Smash est un média destiné aux 18-25 ans. Il propose de lutter contre la désinformation.\n' +
          "Tous les jours, l'utilisateur a accès à 3 citations de personnes publiques sur des sujets d'actualité et doit déterminer si c'est une info (basé sur des faits) ou une intox (basé sur une opinion ou une interprétation des faits). Il peut ensuite s'informer de façon plurielle sur cette actualité et en débattre dans un espace commentaire.\n" +
          "Notre application avait plusieurs besoins : des comptes utilisateurs, un système de sondage, d'amis et de commentaires ainsi que la création et gestion d'articles. Suite à un premier jet très scolaire, nous avons décidé d'en refaire une version où nous sommes plus libres dans notre création."
      },
      {
        type: 'media',
        images: ['/assets/smash-1.webp', '/assets/smash-2.webp'],
        videos: []
      },
      {
        type: 'text',
        title: 'La problématique',
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: "L'action",
        content: 'Texte à remplir...'
      },
      { type: 'media', images: ['/assets/smash-3.webp'], videos: [] },
      {
        type: 'text',
        title: 'Les résultats',
        content: 'Texte à remplir...'
      }
    ]
  },
  reserve: {
    category: 'UI/UX',
    title: 'La Réserve',
    tags: ["jeu narratif pour la Nuit au Musée du MusBA de Bordeaux"],
    sections: [
      {
        type: 'text',
        title: 'La situation',
        content: <>Chaque année, le MusBA collabore avec l'école pour la <strong>Nuit au Musée</strong>. On avait une semaine pour créer le jeu, avec toute la classe et une contact au musée, et on était <strong>7 dans mon équipe</strong>.</>
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
        content: <><strong>Créer un jeu narratif</strong> qui donne envie de <strong>découvrir les réserves d'un musée</strong>, là où le public ne va jamais. Le joueur incarne l'assistant du conservateur et <strong>prépare une expo en choisissant des œuvres</strong>.</>
      },
      {
        type: 'text',
        title: "L'action",
        content: <>J'ai fait de l'<strong>illustration surtout, et du dev</strong>. <strong>Une quarantaine d'assets et de décors dessinés sous Procreate</strong>. Comme personne n'avait accès aux vraies réserves, on a fait de cet <strong>inconnu un lieu magique</strong> : Tristan, le réserviste, est un magicien à capuche et à bâton, façon Gandalf. <strong>Chaque œuvre choisie change le musée</strong> : les murs, la déco de la salle, et même la musique, qu'on n'entend pas toujours mais qui est là. On visait 9 fins, on en a livré 6. On a travaillé avec des œuvres qui tournent réellement au musée, et on est allés sur place tester si tout fonctionnait.</>
      },
      {
        type: 'media',
        images: ['/assets/reserve-4.webp', '/assets/reserve-5.webp'],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: <>Le jeu a <strong>tourné sur la tablette du musée pendant un an</strong>, et le public a bien accroché. Le seul souci venait du tactile vieillissant de la tablette : on a donc <strong>supprimé le glisser-déposer pour ne garder que des clics</strong>.</>
      }
    ],
    linkWebsite: 'https://nuit-du-musba-2025.netlify.app/experiences/1-hub/index.html'
  },
  argentique: {
    category: 'Photographie',
    title: 'Argentique',
    tags: ['Photographie argentique'],
    sections: [
      {
        type: 'text',
        title: 'Mise en contexte',
        content: "Voici quelques photos prises à l'Olympus M1 sur la Côte d'Azur."
      },
      {
        type: 'media',
        images: [
          '/assets/argentique-2.webp',
          '/assets/argentique-5.webp',
          '/assets/argentique-3.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'La problématique',
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: "L'action",
        content: 'Texte à remplir...'
      },
      {
        type: 'media',
        images: [
          '/assets/argentique-4.webp',
          '/assets/argentique-1.webp',
          '/assets/argentique-6.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: 'Texte à remplir...'
      }
    ]
  },
  auto: {
    category: 'Photographie',
    title: 'Portraits',
    tags: ['Photographie'],
    sections: [
      {
        type: 'media',
        images: [
          '/assets/auto-1.webp',
          '/assets/auto-2.webp',
          '/assets/auto-3.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'La problématique',
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: "L'action",
        content: 'Texte à remplir...'
      },
      {
        type: 'media',
        images: ['/assets/auto-4.webp', '/assets/auto-5.webp'],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: 'Texte à remplir...'
      }
    ]
  },
  faune: {
    category: 'Photographie',
    title: 'Faune et flore',
    tags: ['Photographie'],
    sections: [
      {
        type: 'media',
        images: [
          '/assets/fauneflore-5.webp',
          '/assets/fauneflore-4.webp',
          '/assets/fauneflore-1.webp',
          '/assets/fauneflore-2.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'La problématique',
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: "L'action",
        content: 'Texte à remplir...'
      },
      {
        type: 'media',
        images: [
          '/assets/fauneflore-3.webp',
          '/assets/fauneflore-6.webp',
          '/assets/fauneflore-7.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: 'Texte à remplir...'
      }
    ]
  },
  bordeaux: {
    category: 'Photographie',
    title: 'Urbain',
    tags: ['Photographie urbaine'],
    sections: [
      {
        type: 'media',
        images: [
          '/assets/bordeaux-1.webp',
          '/assets/bordeaux-2.webp',
          '/assets/bordeaux-3.webp',
          '/assets/bordeaux-4.webp',
          '/assets/bordeaux-5.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'La problématique',
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: "L'action",
        content: 'Texte à remplir...'
      },
      {
        type: 'media',
        images: [
          '/assets/bordeaux-6.webp',
          '/assets/bordeaux-7.webp',
          '/assets/bordeaux-8.webp',
          '/assets/bordeaux-9.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: 'Texte à remplir...'
      }
    ]
  },
  macro: {
    category: 'Photographie',
    title: 'Macrophoto',
    tags: ['Macrophoto'],
    sections: [
      {
        type: 'media',
        images: ['/assets/macro-1.webp', '/assets/macro-2.webp'],
        videos: []
      },
      {
        type: 'text',
        title: 'La problématique',
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: "L'action",
        content: 'Texte à remplir...'
      },
      {
        type: 'media',
        images: ['/assets/macro-4.webp', '/assets/macro-6.webp'],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: 'Texte à remplir...'
      }
    ]
  },
  gfy: {
    category: 'DA',
    title: 'Go Fail Yourself',
    tags: ["campagne 360° fictive pour Black Diamond"],
    sections: [
      {
        type: 'text',
        title: 'La situation',
        content: <>Pour ce projet de M1, le sujet était clair : imaginer en 18 heures la campagne 360° d'une marque de haute montagne. Tout le reste, c'était à moi de le trouver. J'ai choisi <strong>Black Diamond</strong>, une marque d'escalade et d'alpinisme pour qui la fiabilité du matériel est tout.</>
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
        content: <>Lutter contre la surconsommation en changeant le regard sur l'usure : <strong>un mousqueton rayé n'est pas un mousqueton mort</strong>. On jette des outils qui marchent encore, simplement parce qu'ils ne brillent plus.</>
      },
      {
        type: 'text',
        title: "L'action",
        content: <>J'ai tout imaginé, du constat au concept : pousser les gens à échouer pour qu'ils voient par eux-mêmes que le matériel encaisse. « <strong>Go Fail Yourself</strong> » : si ça tient après 50 chutes, pourquoi en racheter un neuf ? J'ai décliné l'idée en 9 livrables : 3 affiches, 3 posts Instagram qui provoquent la concurrence (« So mad, it broke »), <strong>une appli en réalité augmentée, Ghost Beta, où l'on archive ses chutes</strong>, un packaging et le <strong>Golden Carabiner, un mousqueton plaqué or à trouver qui récompense ceux qui testent leur matériel</strong>. La DA est brute : noir et jaune, une typo qui claque (Druk Wide) contre une typo technique (Roboto Mono). Mes références vont de Dark Souls à la chronophotographie de Marey pour décomposer une chute, en passant par l'Atelier Populaire de Mai 68 pour la provocation.</>
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
        content: <>J'ai eu la deuxième meilleure note de la classe. Et le jour de mon oral, Black Diamond a lancé de son côté un événement très proche de mon Golden Carabiner à trouver. Ce que j'en retiens : <strong>une idée forte tient quand on la décline du poster jusqu'à l'appli</strong>.</>
      }
    ]
  },
  penmarch: {
    category: 'DA',
    title: "Pointe de Penmarc'h",
    tags: ['Rebranding'],
    sections: [
      {
        type: 'text',
        title: 'Mise en contexte',
        content: "Projet de redesign global pour une marque de conserves de poisson fondée en 1920 au Guilvinec en Bretagne. L'objectif est de moderniser l'identité visuelle tout en renforçant un positionnement premium et un ancrage français fort, lié au terroir et à la pêche artisanale.\n" +
          '\n' +
          "La direction artistique s'appuie sur l'authenticité, l'univers maritime et le savoir-faire local afin de repositionner la marque dans un registre plus contemporain sans perdre son héritage.\n" +
          '\n' +
          "Le projet comprend la création d'un nouveau logo, la refonte d'un packaging (boîte de sardines ou de thon), des déclinaisons produits (nature, tomate basilic, citron huile d'olive) ainsi que trois affiches de campagne présentant les différentes saveurs.\n" +
          '\n' +
          "Une identité qui valorise l'héritage breton tout en affirmant une image plus moderne et premium."
      },
      {
        type: 'media',
        images: [
          '/assets/penmarch-1.webp',
          '/assets/penmarch-2.webp',
          '/assets/penmarch-3.webp',
          '/assets/penmarch-4.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'La problématique',
        content: 'Texte à remplir...'
      },
      {
        type: 'text',
        title: "L'action",
        content: 'Texte à remplir...'
      },
      {
        type: 'media',
        images: [
          '/assets/penmarch-5.webp',
          '/assets/penmarch-6.webp',
          '/assets/penmarch-7.webp',
          '/assets/penmarch-8.webp'
        ],
        videos: []
      },
      {
        type: 'text',
        title: 'Les résultats',
        content: 'Texte à remplir...'
      }
    ],
    linkBehance: 'https://www.behance.net/gallery/247470423/Pointe-de-Penmarch'
  },
  wordbroker: {
    category: 'DA',
    title: 'THE WORD_BROKER',
    tags: ["digital event de l'ESD, installation interactive"],
    sections: [
      {
        type: 'text',
        title: 'La situation',
        content: <>Pour le digital event de l'ESD, nos profs nous ont confié un concept : <strong>une installation où la parole devient une marchandise</strong>. On était deux étudiants pour le mettre en place, en 2 semaines, pour 3 jours d'exposition.</>
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
        content: <><strong>Faire réfléchir le public à la valeur de ses mots</strong> : ce que vaut une personne aux yeux d'une société capitaliste, et <strong>ce que ça coûte de confier sa parole à une IA</strong>.</>
      },
      {
        type: 'text',
        title: "L'action",
        content: <>Je me suis occupée de la DA, de la <strong>programmation de l'IA (Gemini, sur Raspberry Pi)</strong> et de l'<strong>intégration web du ticket</strong> pour pouvoir l'imprimer. Côté scénographie, j'ai voulu quelque chose d'austère : un stand, un spot, une salle noire. Le visiteur parle dans un <strong>interphone des années 70, que j'ai chiné et réactivé</strong>, et l'IA l'écoute puis le réduit à une valeur sur un ticket au ton cynique. J'ai construit le stand moi-même et <strong>imprimé en 3D les embouchures</strong> de sortie des tickets. Pendant que l'IA « réfléchit », une musique d'attente joyeuse (« veuillez patienter, votre prix arrive ») est cassée net par le ticket. Le plus pénible, c'était le Raspberry Pi et ses contraintes physiques.</>
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
        content: <><strong>Environ une centaine de personnes l'ont testé.</strong> Les réactions étaient souvent inquiètes ou réticentes à l'idée de parler à une IA, mais ça faisait réagir, et c'était le but. Certains repartaient avec leur ticket, d'autres le laissaient par terre devant le stand. Nos profs étaient contents et veulent <strong>proposer l'installation à des musées à l'international</strong>. Pour moi, c'était ma <strong>première création exposée : j'ai appris à me plonger à 100 % dans le processus physique</strong>, de la scénographie jusqu'au socle.</>
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

          // 2. Extract all text items and reinsert them at specific positions
          const textItems = allElements.filter(el => el.type === 'text');
          const finalElements = allElements.filter(el => el.type !== 'text');

          let offset = 3;
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