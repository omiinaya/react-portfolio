#!/usr/bin/env node

/**
 * Sitemap generator for React Portfolio
 * Run this script during build process: npm run build && node scripts/generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');
const { XMLBuilder } = require('fast-xml-parser');

// Configuration
const SITE_URL = 'https://omar.mrxlab.net';
const BUILD_DIR = path.join(__dirname, '..', 'build');
const SITEMAP_PATH = path.join(BUILD_DIR, 'sitemap.xml');

// Pages to include in sitemap
const PAGES = [
  {
    url: '/',
    changefreq: 'monthly',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/#projects',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/#certifications',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/#contact',
    changefreq: 'monthly',
    priority: '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Read profile data to get project URLs
const PROFILE_PATH = path.join(__dirname, '..', 'src', 'data', 'profile.json');

try {
  const profileData = JSON.parse(fs.readFileSync(PROFILE_PATH, 'utf8'));
  
  // Add project pages
  if (profileData.sections.projects && profileData.sections.projects.items) {
    profileData.sections.projects.items.forEach(project => {
      if (project.liveUrl) {
        PAGES.push({
          url: project.liveUrl,
          changefreq: 'yearly',
          priority: '0.7',
          lastmod: new Date().toISOString().split('T')[0]
        });
      }
    });
  }
} catch (error) {
  console.warn('Could not read profile data for sitemap generation:', error.message);
}

// Generate sitemap XML
function generateSitemap() {
  const builder = new XMLBuilder({
    ignoreAttributes: false,
    format: true,
    suppressEmptyNode: true
  });

  const urlset = {
    '?xml': {
      '@_version': '1.0',
      '@_encoding': 'UTF-8'
    },
    urlset: {
      '@_xmlns': 'http://www.sitemaps.org/schemas/sitemap/0.9',
      '@_xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
      '@_xsi:schemaLocation': 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd',
      url: PAGES.map(page => ({
        loc: `${SITE_URL}${page.url}`,
        lastmod: page.lastmod,
        changefreq: page.changefreq,
        priority: page.priority
      }))
    }
  };

  const xml = builder.build(urlset);
  
  // Ensure build directory exists
  if (!fs.existsSync(BUILD_DIR)) {
    fs.mkdirSync(BUILD_DIR, { recursive: true });
  }
  
  // Write sitemap
  fs.writeFileSync(SITEMAP_PATH, xml);
  console.log('Sitemap generated successfully at:', SITEMAP_PATH);
  console.log('Total URLs:', PAGES.length);
}

// Run if this script is executed directly
if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap, PAGES, SITE_URL };