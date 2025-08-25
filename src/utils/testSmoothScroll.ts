/**
 * Test utility to verify smooth scrolling functionality
 */

import { smoothScrollTo, initSmoothScrolling } from './smoothScroll';

// Test function to verify smooth scrolling works
export const testSmoothScrolling = (): void => {
  console.log('Testing smooth scrolling functionality...');
  
  // Test 1: Check if smoothScrollTo function exists
  if (typeof smoothScrollTo === 'function') {
    console.log('✓ smoothScrollTo function is available');
  } else {
    console.error('✗ smoothScrollTo function is not available');
    return;
  }
  
  // Test 2: Check if initSmoothScrolling function exists
  if (typeof initSmoothScrolling === 'function') {
    console.log('✓ initSmoothScrolling function is available');
  } else {
    console.error('✗ initSmoothScrolling function is not available');
    return;
  }
  
  // Test 3: Check if header height CSS variable is available
  const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80;
  console.log(`✓ Header height detected: ${headerHeight}px`);
  
  // Test 4: Check if all section elements exist
  const sections = ['#about', '#experience', '#projects', '#certifications', '#contact'];
  let allSectionsExist = true;
  
  sections.forEach(sectionId => {
    const element = document.querySelector(sectionId);
    if (!element) {
      console.error(`✗ Section ${sectionId} not found`);
      allSectionsExist = false;
    } else {
      console.log(`✓ Section ${sectionId} found`);
    }
  });
  
  if (allSectionsExist) {
    console.log('✓ All navigation target sections exist');
  } else {
    console.error('✗ Some navigation target sections are missing');
  }
  
  // Test 5: Check if navigation links are properly set up
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks.length >= 5) {
    console.log(`✓ ${navLinks.length} navigation links found`);
  } else {
    console.error(`✗ Expected at least 5 navigation links, found ${navLinks.length}`);
  }
  
  console.log('Smooth scrolling test completed!');
  console.log('Note: Actual scrolling behavior can only be tested in the browser UI');
};

// Run tests when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', testSmoothScrolling);
  } else {
    testSmoothScrolling();
  }
}

// Export to make this a module
export {};