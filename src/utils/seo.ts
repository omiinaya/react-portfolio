/**
 * SEO utility functions for generating structured data and meta tags
 */

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  locale?: string;
  siteName?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterCreator?: string;
  twitterSite?: string;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

/**
 * Generates Person structured data for the portfolio
 */
export const generatePersonStructuredData = (profile: any): StructuredData => {
  const { basics, sections } = profile;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: basics.name,
    description: sections.summary?.content || `${basics.headline} based in ${basics.location}`,
    jobTitle: basics.headline,
    email: basics.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: basics.location
    },
    sameAs: sections.profiles?.items?.map((profile: any) => profile.url?.href)?.filter(Boolean) || [],
    knowsAbout: sections.skills?.items?.map((skill: any) => skill.name) || []
  };
};

/**
 * Generates Portfolio structured data
 */
export const generatePortfolioStructuredData = (profile: any): StructuredData => {
  const { basics, sections } = profile;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${basics.name} - ${basics.headline} Portfolio`,
    description: sections.summary?.content || `Portfolio of ${basics.name}, ${basics.headline}`,
    author: {
      '@type': 'Person',
      name: basics.name
    },
    datePublished: new Date().toISOString().split('T')[0],
    inLanguage: 'en'
  };
};

/**
 * Generates Project structured data
 */
export const generateProjectStructuredData = (project: any, author: string): StructuredData => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    author: {
      '@type': 'Person',
      name: author
    },
    technologies: project.technologies,
    url: project.liveUrl || project.githubUrl,
    dateCreated: new Date().toISOString().split('T')[0]
  };
};

/**
 * Generates Certification structured data
 */
export const generateCertificationStructuredData = (certification: any): StructuredData => {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    name: certification.name,
    description: certification.summary,
    recognizedBy: {
      '@type': 'Organization',
      name: certification.issuer
    },
    credentialCategory: certification.issuer?.includes('Comptia') ? ' Certification' : 'Educational',
    validFrom: certification.date
  };
};

/**
 * Generates meta tags configuration for Helmet
 */
export const generateMetaTags = (seoData: SEOData): any[] => {
  const {
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    locale = 'en_US',
    siteName = 'Omar Minaya Portfolio',
    twitterCard = 'summary_large_image',
    twitterCreator = '@omiinaya',
    twitterSite = '@omiinaya'
  } = seoData;

  const metaTags = [
    // Basic meta tags
    { name: 'description', content: description },
    { name: 'keywords', content: keywords?.join(', ') || 'portfolio, developer, full stack, react, javascript, typescript' },
    
    // Open Graph
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: type },
    { property: 'og:locale', content: locale },
    { property: 'og:site_name', content: siteName },
    
    // Twitter Card
    { name: 'twitter:card', content: twitterCard },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:creator', content: twitterCreator },
    { name: 'twitter:site', content: twitterSite }
  ];

  // Add image meta tags if provided
  if (image) {
    metaTags.push(
      { property: 'og:image', content: image },
      { name: 'twitter:image', content: image }
    );
  }

  // Add URL meta tags if provided
  if (url) {
    metaTags.push(
      { property: 'og:url', content: url },
      { name: 'canonical', content: url }
    );
  }

  return metaTags;
};

/**
 * Generates default SEO data for the portfolio
 */
export const getDefaultSEOData = (profile: any): SEOData => {
  const { basics } = profile;
  
  return {
    title: `${basics.name} - ${basics.headline}`,
    description: `Portfolio of ${basics.name}, ${basics.headline} based in ${basics.location}. Specializing in React, TypeScript, and full-stack development.`,
    keywords: ['portfolio', 'developer', 'full stack', 'react', 'typescript', 'javascript', basics.location.toLowerCase()],
    type: 'profile',
    locale: 'en_US',
    siteName: 'Omar Minaya Portfolio',
    twitterCard: 'summary_large_image',
    twitterCreator: '@omiinaya',
    twitterSite: '@omiinaya'
  };
};

/**
 * Sanitizes string for use in meta tags
 */
export const sanitizeForMeta = (text: string, maxLength: number = 160): string => {
  // Remove HTML tags
  let sanitized = text.replace(/<[^>]*>/g, '');
  
  // Trim and limit length
  sanitized = sanitized.trim();
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength - 3) + '...';
  }
  
  return sanitized;
};