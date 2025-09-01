import { ReportHandler } from 'web-vitals';
import { trackPerformance, isDevelopmentMode } from './utils/analytics';

// Enhanced performance reporter that sends metrics to Google Analytics
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Core Web Vitals tracking with analytics integration
      getCLS((metric) => {
        onPerfEntry(metric);
        if (!isDevelopmentMode()) {
          trackPerformance('CLS', metric.value);
        }
      });
      
      getFID((metric) => {
        onPerfEntry(metric);
        if (!isDevelopmentMode()) {
          trackPerformance('FID', metric.value);
        }
      });
      
      getFCP((metric) => {
        onPerfEntry(metric);
        if (!isDevelopmentMode()) {
          trackPerformance('FCP', metric.value);
        }
      });
      
      getLCP((metric) => {
        onPerfEntry(metric);
        if (!isDevelopmentMode()) {
          trackPerformance('LCP', metric.value);
        }
      });
      
      getTTFB((metric) => {
        onPerfEntry(metric);
        if (!isDevelopmentMode()) {
          trackPerformance('TTFB', metric.value);
        }
      });
    });
  }
};

// Additional performance monitoring utilities
const monitorPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Monitor long tasks (blocking main thread for >50ms)
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (!isDevelopmentMode() && entry.duration > 50) {
              trackPerformance('Long Task', entry.duration);
            }
          });
        });
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        console.warn('Long task monitoring not supported:', e);
      }
    }

    // Monitor memory usage (if supported)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory && typeof memory.usedJSHeapSize === 'number') {
        const trackMemoryUsage = () => {
          if (!isDevelopmentMode()) {
            trackPerformance('Memory Usage', memory.usedJSHeapSize / 1024 / 1024); // Convert to MB
          }
        };
        
        // Track memory usage periodically and on visibility change
        setInterval(trackMemoryUsage, 30000);
        document.addEventListener('visibilitychange', trackMemoryUsage);
      }
    }
  }
};

export default reportWebVitals;
export { monitorPerformance };