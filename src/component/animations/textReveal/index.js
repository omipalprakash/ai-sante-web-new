'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from './TextReveal.module.css';

const TextReveal = ({ children }) => {
  const textRef = useRef(null);
  const splitInstance = useRef(null);
  const resizeDelay = useRef(null);
  const ctx = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    let gsap, ScrollTrigger, SplitText;

    const handleResize = () => {
      if (resizeDelay.current) resizeDelay.current.kill();
      resizeDelay.current = gsap.delayedCall(0.2, () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        splitInstance.current?.revert();
        splitInstance.current?.split();
        animateLines();
      });
    };

    const animateLines = () => {
      if (splitInstance.current) {
        splitInstance.current.lines.forEach((line) => {
          gsap.to(line, {
            backgroundPositionX: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: line,
              start: 'top center',
              end: 'bottom center',
              scrub: 1,
            },
          });
        });
      }
    };

    const init = async () => {
      gsap = (await import('gsap')).default;
      ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
      SplitText = (await import('gsap/SplitText')).default;

      gsap.registerPlugin(ScrollTrigger, SplitText);

      ctx.current = gsap.context(() => {
        splitInstance.current = new SplitText(textRef.current, { type: 'lines' });
        animateLines();
      }, textRef);

      window.addEventListener('resize', handleResize);
    };

    init();

    return () => {
      if (resizeDelay.current) resizeDelay.current.kill();
      ctx.current?.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, [pathname]);

  return (
    <p ref={textRef} className={styles.textReveal}>
      {children}
    </p>
  );
};

export default TextReveal;
