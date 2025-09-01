import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initializeAnalytics = (): boolean => {
  const measurementId = process.env.REACT_APP_GA4_MEASUREMENT_ID;
  
  if (!measurementId || measurementId === 'your_ga4_measurement_id_here') {
    console.warn('Google Analytics measurement ID not configured');
    return false;
  }

  try {
    ReactGA.initialize(measurementId, {
      testMode: process.env.NODE_ENV === 'test',
    });
    return true;
  } catch (error) {
    console.error('Failed to initialize Google Analytics:', error);
    return false;
  }
};

// Track page views
export const trackPageView = (path: string, title?: string): void => {
  try {
    ReactGA.send({ 
      hitType: 'pageview', 
      page: path,
      title: title || document.title
    });
  } catch (error) {
    console.error('Failed to track page view:', error);
  }
};

// Track custom events
export interface EventParams {
  category: string;
  action: string;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
}

export const trackEvent = (params: EventParams): void => {
  try {
    ReactGA.event(params);
  } catch (error) {
    console.error('Failed to track event:', error);
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true): void => {
  trackEvent({
    category: 'Form',
    action: 'Submit',
    label: `${formName} - ${success ? 'Success' : 'Error'}`,
    value: success ? 1 : 0
  });
};

// Track project interactions
export const trackProjectView = (projectId: string, projectTitle: string): void => {
  trackEvent({
    category: 'Project',
    action: 'View',
    label: projectTitle,
    value: 1
  });
};

export const trackProjectClick = (projectId: string, projectTitle: string, actionType: 'github' | 'live'): void => {
  trackEvent({
    category: 'Project',
    action: `Click - ${actionType}`,
    label: projectTitle,
    value: 1
  });
};

// Track certification views
export const trackCertificationView = (certificationId: string, certificationTitle: string): void => {
  trackEvent({
    category: 'Certification',
    action: 'View',
    label: certificationTitle,
    value: 1
  });
};

// Track theme changes
export const trackThemeToggle = (theme: 'light' | 'dark'): void => {
  trackEvent({
    category: 'Theme',
    action: 'Toggle',
    label: theme,
    value: 1
  });
};

// Track language changes
export const trackLanguageChange = (language: string): void => {
  trackEvent({
    category: 'Language',
    action: 'Change',
    label: language,
    value: 1
  });
};

// Track social media clicks
export const trackSocialMediaClick = (platform: string, url: string): void => {
  trackEvent({
    category: 'Social Media',
    action: 'Click',
    label: platform,
    value: 1
  });
};

// Performance tracking
export const trackPerformance = (metricName: string, value: number): void => {
  trackEvent({
    category: 'Performance',
    action: metricName,
    value: Math.round(value),
    nonInteraction: true
  });
};

// Error tracking
export const trackError = (errorType: string, errorMessage: string): void => {
  trackEvent({
    category: 'Error',
    action: errorType,
    label: errorMessage,
    value: 1
  });
};

// Check if analytics is initialized
export const isAnalyticsInitialized = (): boolean => {
  return ReactGA.isInitialized;
};

// Development mode check
export const isDevelopmentMode = (): boolean => {
  return process.env.NODE_ENV === 'development';
};