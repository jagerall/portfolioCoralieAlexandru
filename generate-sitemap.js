const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/uiux', changefreq: 'weekly', priority: 0.8 },
    { url: '/photographie', changefreq: 'weekly', priority: 0.8 },
    { url: '/illustration', changefreq: 'weekly', priority: 0.8 },
    { url: '/mentions-legales', changefreq: 'yearly', priority: 0.5 },
    { url: '/about', changefreq: 'yearly', priority: 0.5 },
];

async function generateSitemap() {
    const stream = new SitemapStream({ hostname: 'https://coraliealexandru.fr' });

    links.forEach(link => stream.write(link));
    stream.end();

    const sitemap = await streamToPromise(stream);
    fs.writeFileSync('./public/sitemap.xml', sitemap.toString());
}

generateSitemap();