/**
 * Custom smooth scroll utility with enhanced easing and timing
 */

interface ScrollOptions {
  duration: number;
  easing: (t: number) => number;
  offset: number;
}

const defaultOptions: ScrollOptions = {
  duration: 800,
  easing: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t, // quadratic easing
  offset: 0
};

/**
 * Smoothly scroll to a target element
 */
export const smoothScrollTo = (
  target: HTMLElement | string,
  options: Partial<ScrollOptions> = {}
): void => {
  const { duration, easing, offset } = { ...defaultOptions, ...options };
  
  const targetElement = typeof target === 'string' 
    ? document.querySelector(target) as HTMLElement
    : target;
  
  if (!targetElement) {
    console.warn('Smooth scroll target not found:', target);
    return;
  }

  const startPosition = window.pageYOffset;
  const targetPosition = targetElement.getBoundingClientRect().top + startPosition - offset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const easeProgress = easing(progress);
    window.scrollTo(0, startPosition + distance * easeProgress);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Initialize smooth scrolling for navigation links
 */
export const initSmoothScrolling = (): void => {
  // Remove the native smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'auto';
  
  // Add click event listeners to all navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href && href !== '#') {
        e.preventDefault();
        
        // Add a small delay for a more polished feel
        setTimeout(() => {
          smoothScrollTo(href, {
            duration: 1000, // Slightly longer duration for smoother feel
            easing: (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1, // cubic easing
            offset: parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80
          });
        }, 50);
      }
    });
  });
};

/**
 * Scroll to top with smooth animation
 */
export const scrollToTop = (options: Partial<ScrollOptions> = {}): void => {
  const { duration, easing } = { ...defaultOptions, ...options };
  
  const startPosition = window.pageYOffset;
  const distance = -startPosition;
  let startTime: number | null = null;

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const easeProgress = easing(progress);
    window.scrollTo(0, startPosition + distance * easeProgress);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

// Export an empty object to make this a module
export {};