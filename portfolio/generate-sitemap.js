const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap'); // Installer la dépendance 'sitemap'

const baseUrl = 'https://www.coraliealexandru.fr'; // Remplace par l'URL de ton site
const outputFile = path.resolve(__dirname, 'public', 'sitemap.xml'); // Le fichier sitemap sera généré ici

// Liste de toutes les routes de ton site (adaptée avec les informations fournies)
    '/',
    '/uiux',
    '/illustration',
   /* '/about',*/
    '/uiux/booking',
    '/uiux/pasnumerise',
    '/uiux/flop',
    '/uiux/maria',
    '/uiux/capc',
    '/uiux/smash',
    '/uiux/reserve',
    '/illustration/allo',
    '/illustration/ami',
    '/illustration/logommi',
    '/illustration/autocollant',
    '/illustration/miel',
    '/illustration/cephalopode',
    '/illustration/art',
    '/illustration/cocktails',
    '/illustration/nature'
];

// Crée le flux pour générer le sitemap
const sitemap = new SitemapStream({ hostname: baseUrl });

// Ajouter chaque route au sitemap avec une fréquence et priorité par défaut
routes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'weekly', priority: 0.8 });
});

// Fin du flux et création du fichier sitemap.xml
sitemap.end();
streamToPromise(sitemap)
    .then(data => {
        // Créer le fichier sitemap.xml dans le dossier public
        fs.writeFileSync(outputFile, data);
        console.log('Sitemap généré avec succès!');
    })
    .catch(err => {
        console.error('Erreur lors de la génération du sitemap:', err);
    });
