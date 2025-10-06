'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './homeSection.module.css';
import { icons } from '@/utility/image';
import BigArrow from '../icons/bigArrow';
import useGsapImageAnimation from '@/hooks/animationHooks/useGsapImageAnimation';
import useAos from '@/hooks/useAos';
import Aos from 'aos';

const HomeSection = () => {
  // useAos();
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const arrowRef = useRef(null);
  useEffect(() => {
    Aos.init({ duration: 2100 });
  }, []);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // Set initially
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useGsapImageAnimation({ containerRef, imageRef, arrowRef, windowSize });

  return (
    <section className={styles.banner} ref={containerRef}>
      <div className='max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8'>
        <div className="flex flex-col justify-center items-center gap-10 w-full">
          <div className="flex flex-wrap md:flex-nowrap justify-center  md:justify-start items-center  gap-6 w-full">
            <h1 data-aos="fade-right" className={styles.maintext}>
              WE CREATE
            </h1>
            <div className='hidden md:block' ref={arrowRef}>
              <BigArrow className={styles.imagestyle} />
            </div>
          </div>

          {/* Animated image wrapper */}
          <div className="flex flex-wrap  justify-center  items-center  gap-6 sm:gap-10 ">
            <div ref={imageRef} className={styles.videoWrapper}>
              <video
                autoPlay
                muted
                loop
                playsInline
                width="310"
                height="97"
                className={styles.imagestyle}
              >
                <source
                  src="/video/Website_intro.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <h2 data-aos="fade-left" className={styles.maintext}>
              BRAIN OF AI
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
