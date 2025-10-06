// hooks/useGsapImageAnimation.js
import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
 
const useGsapImageAnimation = ({
  containerRef = null,
  imageRef = null,
  arrowRef = null,
  windowSize = null,
}) => {
  const pathname = usePathname();
 
  useLayoutEffect(() => {
    // Only run on homepage
    if (pathname !== '/') return;
 
    // Responsive guard
    if (!windowSize?.width || windowSize.width <= 700) return;
 
    // Ref existence check
    if (!containerRef?.current || !imageRef?.current || !arrowRef?.current) {
      return;
    }
 
    let ctx = null;
 
    const animate = async () => {
      try {
        const gsap = (await import('gsap')).default;
        const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
        gsap.registerPlugin(ScrollTrigger);
 
        ctx = gsap.context(() => {
          // Initial image state
          gsap.set(imageRef.current, {
            width: '250px',
            height: 'auto',
            borderRadius: '127.22px',
          });
 
          // Animate image on scroll
          gsap.to(imageRef.current, {
            width: '100vw',
            height: '100vh',
            borderRadius: '0px',
            ease: 'power2.inOut',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
              pin: true,
              anticipatePin: 1,
            },
          });
          
 
          // Animate arrow
          gsap.to(arrowRef.current, {
            x: 30,
            y: 30,
            rotate: 10,
            duration: 1.5,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut',
          });
        }, containerRef);
      } catch (err) {
        console.error('GSAP animation error:', err);
      }
    };
 
    animate();
 
    return () => {
      // Cleanup safely
      try {
        ctx?.revert();
        const ScrollTrigger = require('gsap/ScrollTrigger').default;
        ScrollTrigger?.getAll().forEach((trigger) => trigger.kill());
      } catch (e) {
        console.warn('GSAP cleanup failed:', e.message);
      }
    };
  }, [pathname, containerRef, imageRef, arrowRef, windowSize]);
};
 
export default useGsapImageAnimation;