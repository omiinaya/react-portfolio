import { useCallback } from 'react';
import { 
  trackEvent, 
  trackFormSubmission, 
  trackProjectView, 
  trackProjectClick, 
  trackCertificationView, 
  trackThemeToggle, 
  trackLanguageChange, 
  trackSocialMediaClick,
  trackPerformance,
  trackError,
  EventParams,
  isDevelopmentMode
} from '../utils/analytics';

// Hook for tracking custom events
export const useTrackEvent = () => {
  return useCallback((params: EventParams) => {
    if (!isDevelopmentMode()) {
      trackEvent(params);
    }
  }, []);
};

// Hook for tracking form submissions
export const useTrackFormSubmission = () => {
  return useCallback((formName: string, success: boolean = true) => {
    if (!isDevelopmentMode()) {
      trackFormSubmission(formName, success);
    }
  }, []);
};

// Hook for tracking project interactions
export const useTrackProjectInteraction = () => {
  const trackProjectViewEvent = useCallback((projectId: string, projectTitle: string) => {
    if (!isDevelopmentMode()) {
      trackProjectView(projectId, projectTitle);
    }
  }, []);

  const trackProjectClickEvent = useCallback((projectId: string, projectTitle: string, actionType: 'github' | 'live') => {
    if (!isDevelopmentMode()) {
      trackProjectClick(projectId, projectTitle, actionType);
    }
  }, []);

  return { trackProjectView: trackProjectViewEvent, trackProjectClick: trackProjectClickEvent };
};

// Hook for tracking certification views
export const useTrackCertificationView = () => {
  return useCallback((certificationId: string, certificationTitle: string) => {
    if (!isDevelopmentMode()) {
      trackCertificationView(certificationId, certificationTitle);
    }
  }, []);
};

// Hook for tracking theme toggles
export const useTrackThemeToggle = () => {
  return useCallback((theme: 'light' | 'dark') => {
    if (!isDevelopmentMode()) {
      trackThemeToggle(theme);
    }
  }, []);
};

// Hook for tracking language changes
export const useTrackLanguageChange = () => {
  return useCallback((language: string) => {
    if (!isDevelopmentMode()) {
      trackLanguageChange(language);
    }
  }, []);
};

// Hook for tracking social media clicks
export const useTrackSocialMediaClick = () => {
  return useCallback((platform: string, url: string) => {
    if (!isDevelopmentMode()) {
      trackSocialMediaClick(platform, url);
    }
  }, []);
};

// Hook for tracking performance metrics
export const useTrackPerformance = () => {
  return useCallback((metricName: string, value: number) => {
    if (!isDevelopmentMode()) {
      trackPerformance(metricName, value);
    }
  }, []);
};

// Hook for tracking errors
export const useTrackError = () => {
  return useCallback((errorType: string, errorMessage: string) => {
    if (!isDevelopmentMode()) {
      trackError(errorType, errorMessage);
    }
  }, []);
};

// Comprehensive hook that provides all tracking functions
export const useAnalytics = () => {
  const trackEvent = useTrackEvent();
  const trackForm = useTrackFormSubmission();
  const projectTracking = useTrackProjectInteraction();
  const trackCertification = useTrackCertificationView();
  const trackTheme = useTrackThemeToggle();
  const trackLanguage = useTrackLanguageChange();
  const trackSocial = useTrackSocialMediaClick();
  const trackPerf = useTrackPerformance();
  const trackErr = useTrackError();

  return {
    trackEvent,
    trackFormSubmission: trackForm,
    trackProjectView: projectTracking.trackProjectView,
    trackProjectClick: projectTracking.trackProjectClick,
    trackCertificationView: trackCertification,
    trackThemeToggle: trackTheme,
    trackLanguageChange: trackLanguage,
    trackSocialMediaClick: trackSocial,
    trackPerformance: trackPerf,
    trackError: trackErr,
    isDevelopment: isDevelopmentMode()
  };
};