import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JHA Engineering Solutions",
  description: "Professional engineering and construction solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined' || typeof document === 'undefined') return;
                
                let observer = null;
                const animatedSections = new Set();
                
                function triggerSectionAnimation(section) {
                  if (animatedSections.has(section)) return;
                  animatedSections.add(section);
                  
                  // Find all animated elements within this section
                  const elements = section.querySelectorAll('[data-scroll-animate]');
                  
                  // Animate all elements at once
                  elements.forEach((element, index) => {
                    const animateValue = element.getAttribute('data-scroll-animate');
                    if (!animateValue) return;
                    
                    // Parse animation type
                    const animation = animateValue.split(' ')[0];
                    
                    // Apply animation directly via inline styles
                    const animationClass = 'animate-' + animation;
                    element.classList.add(animationClass);
                    
                    // Parse delay
                    let delay = 0;
                    if (animateValue.includes('delay-200')) {
                      delay = 200;
                      element.classList.add('delay-200');
                    } else if (animateValue.includes('delay-400')) {
                      delay = 400;
                      element.classList.add('delay-400');
                    } else if (animateValue.includes('delay-600')) {
                      delay = 600;
                      element.classList.add('delay-600');
                    } else if (animateValue.includes('delay-800')) {
                      delay = 800;
                      element.classList.add('delay-800');
                    }
                    
                    // Apply animation directly via CSS
                    const animationMap = {
                      'fade-in-up': 'fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                      'fade-in-down': 'fadeInDown 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                      'fade-in-left': 'fadeInLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                      'fade-in-right': 'fadeInRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                      'fade-in': 'fadeIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
                    };
                    
                    if (animationMap[animation]) {
                      element.style.animation = animationMap[animation];
                      if (delay > 0) {
                        element.style.animationDelay = delay + 'ms';
                      }
                      
                      // Ensure element becomes visible after animation (forwards should handle this, but add fallback)
                      const elementText = element.textContent ? element.textContent.substring(0, 30) : 'no text';
                      const isThankYouElement = elementText.includes('THANK YOU');
                      
                      // For Thank You elements, ensure they become visible
                      if (isThankYouElement) {
                        // Set a timeout to ensure opacity is 1 after animation completes
                        setTimeout(() => {
                          element.style.opacity = '1';
                        }, delay + 1100); // animation duration (1000ms) + delay + buffer
                      }
                    }
                  });
                  
                  // Unobserve after animation
                  if (observer) {
                    observer.unobserve(section);
                  }
                }
                
                function triggerElementAnimation(element) {
                  const animateValue = element.getAttribute('data-scroll-animate');
                  if (!animateValue) return;
                  
                  // Parse animation type
                  const animation = animateValue.split(' ')[0];
                  
                  // Add Tailwind animation class
                  const animationClass = 'animate-' + animation;
                  element.classList.add(animationClass);
                  
                  // Parse delay
                  let delay = 0;
                  if (animateValue.includes('delay-200')) {
                    delay = 200;
                    element.classList.add('delay-200');
                  } else if (animateValue.includes('delay-400')) {
                    delay = 400;
                    element.classList.add('delay-400');
                  } else if (animateValue.includes('delay-600')) {
                    delay = 600;
                    element.classList.add('delay-600');
                  } else if (animateValue.includes('delay-800')) {
                    delay = 800;
                    element.classList.add('delay-800');
                  }
                  
                  // Apply animation directly via CSS
                  const animationMap = {
                    'fade-in-up': 'fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                    'fade-in-down': 'fadeInDown 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                    'fade-in-left': 'fadeInLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                    'fade-in-right': 'fadeInRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
                    'fade-in': 'fadeIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards'
                  };
                  
                  if (animationMap[animation]) {
                    element.style.animation = animationMap[animation];
                    if (delay > 0) {
                      element.style.animationDelay = delay + 'ms';
                    }
                  }
                }
                
                function initScrollAnimations() {
                  if (typeof document === 'undefined') return;
                  
                  // Find all sections with data-section-animate attribute
                  const sections = document.querySelectorAll('[data-section-animate]');
                  
                  // Find all individual elements with data-scroll-animate (not inside sections)
                  const individualElements = Array.from(document.querySelectorAll('[data-scroll-animate]')).filter(el => {
                    return !el.closest('[data-section-animate]');
                  });
                  
                  const animatedElements = new Set();
                  
                  // Wait for layout to settle
                  requestAnimationFrame(() => {
                    if (typeof window === 'undefined') return;
                    
                    // Handle sections
                    sections.forEach((section) => {
                      const rect = section.getBoundingClientRect();
                      const viewportHeight = window.innerHeight;
                      // Check if section is in viewport (top is above bottom of viewport, bottom is below top of viewport)
                      const isInViewport = rect.top < viewportHeight && rect.bottom > 0;
                      
                      if (isInViewport) {
                        // Section is in viewport, animate immediately
                        triggerSectionAnimation(section);
                      }
                    });
                    
                    // Handle individual elements (like hero section)
                    individualElements.forEach(element => {
                      if (animatedElements.has(element)) return;
                      
                      const rect = element.getBoundingClientRect();
                      const viewportHeight = window.innerHeight;
                      // Check if element is in viewport
                      const isInViewport = rect.top < viewportHeight && rect.bottom > 0;
                      
                      if (isInViewport) {
                        // Element is in viewport, animate immediately
                        triggerElementAnimation(element);
                        animatedElements.add(element);
                      }
                    });
                    
                    // Set up observer for sections not yet animated
                    if (sections.length > 0) {
                      observer = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                            // Add a small delay so user can see the animation start
                            setTimeout(() => {
                              triggerSectionAnimation(entry.target);
                            }, 100);
                          }
                        });
                      }, {
                        threshold: 0.15,
                        rootMargin: '0px 0px -100px 0px'
                      });
                      
                      // Observe all sections that haven't been animated yet
                      sections.forEach((section) => {
                        if (!animatedSections.has(section)) {
                          observer.observe(section);
                        }
                      });
                    }
                    
                    // Set up observer for individual elements
                    if (individualElements.length > 0) {
                      const elementObserver = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                          if (entry.isIntersecting && !animatedElements.has(entry.target)) {
                            triggerElementAnimation(entry.target);
                            animatedElements.add(entry.target);
                            elementObserver.unobserve(entry.target);
                          }
                        });
                      }, {
                        threshold: 0.1,
                        rootMargin: '0px 0px -50% 0px'
                      });
                      
                      // Observe all individual elements that haven't been animated yet
                      individualElements.forEach(element => {
                        if (!animatedElements.has(element)) {
                          elementObserver.observe(element);
                        }
                      });
                    }
                  });
                }
                
                // Wait for DOM to be ready and React to finish hydrating
                if (typeof document !== 'undefined' && typeof window !== 'undefined') {
                  function waitForHydration() {
                    // Wait for both DOM and React hydration to complete
                    if (document.readyState === 'loading') {
                      document.addEventListener('DOMContentLoaded', () => {
                        // Wait for React hydration to complete
                        window.addEventListener('load', () => {
                          setTimeout(initScrollAnimations, 200);
                        });
                      });
                    } else if (document.readyState === 'interactive') {
                      // DOM is interactive, wait for load event
                      window.addEventListener('load', () => {
                        setTimeout(initScrollAnimations, 200);
                      });
                    } else {
                      // DOM is complete, but still wait for React hydration
                      // Use multiple requestAnimationFrame calls and a delay to ensure React has finished
                      requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                          setTimeout(initScrollAnimations, 200);
                        });
                      });
                    }
                  }
                  waitForHydration();
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
