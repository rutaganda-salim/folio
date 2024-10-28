const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

// Define the URL of your single-page application
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  // You can include additional static pages if you have any
];

// Create a writable stream to write the sitemap to a file
const sitemapStream = new SitemapStream({ hostname: 'https://rsalim.vercel.app' });

// Write URLs to the stream
urls.forEach(url => sitemapStream.write(url));

// End the stream
sitemapStream.end();

// Convert the stream to a string and write to a file
streamToPromise(sitemapStream).then(data => {
  fs.writeFileSync('./public/sitemap.xml', data.toString());
  console.log('Sitemap generated: public/sitemap.xml');
}).catch(err => {
  console.error('Error generating sitemap:', err);
});
