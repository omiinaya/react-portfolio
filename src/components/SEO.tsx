import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useData } from '../contexts/DataContext';
import {
  SEOData,
  generateMetaTags,
  generatePersonStructuredData,
  generatePortfolioStructuredData,
  getDefaultSEOData,
  sanitizeForMeta
} from '../utils/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  structuredData?: any[];
  excludeDefaultStructuredData?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type,
  structuredData = [],
  excludeDefaultStructuredData = false
}) => {
  const { profile } = useData();
  
  // Get default SEO data
  const defaultSEOData = getDefaultSEOData(profile);
  
  // Merge with provided props
  const seoData: SEOData = {
    title: title || defaultSEOData.title,
    description: sanitizeForMeta(description || defaultSEOData.description),
    keywords: keywords || defaultSEOData.keywords,
    image: image || defaultSEOData.image,
    url: url || window.location.href,
    type: type || defaultSEOData.type,
    locale: defaultSEOData.locale,
    siteName: defaultSEOData.siteName,
    twitterCard: defaultSEOData.twitterCard,
    twitterCreator: defaultSEOData.twitterCreator,
    twitterSite: defaultSEOData.twitterSite
  };

  // Generate meta tags
  const metaTags = generateMetaTags(seoData);

  // Generate default structured data if not excluded
  const defaultStructuredData = excludeDefaultStructuredData ? [] : [
    generatePersonStructuredData(profile),
    generatePortfolioStructuredData(profile)
  ];

  // Combine all structured data
  const allStructuredData = [...defaultStructuredData, ...structuredData];

  return (
    <Helmet>
      {/* Title */}
      <title>{seoData.title}</title>
      
      {/* Meta tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Structured data */}
      {allStructuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoData.url} />
      
      {/* Language */}
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;

// Re-export for convenience
export type { SEOProps };