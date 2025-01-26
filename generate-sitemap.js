const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://yourdomain.com' });

  // Add your routes here
  const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    // Add other routes as needed
  ];

  routes.forEach(route => sitemap.write(route));
  sitemap.end();

  const sitemapOutput = await streamToPromise(sitemap);
  fs.writeFileSync('./public/sitemap.xml', sitemapOutput.toString());
}

generateSitemap().catch(console.error);

