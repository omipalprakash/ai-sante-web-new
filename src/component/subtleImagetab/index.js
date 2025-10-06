"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './subtleImagetab.module.css';
import { TIMEOUT_DURATION } from './constants';

const SubtleImageTab = ({ features = [] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startAutoSwitch = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);

      setProgress(0);

      const updateFrequency = 50; // Interval speed in ms
      const steps = TIMEOUT_DURATION / updateFrequency;

      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 100 / steps;

          if (newProgress >= 100) {
            const nextTab = (activeTab + 1) % features.length;
            setActiveTab(nextTab);
            return 0;
          }

          return newProgress;
        });
      }, updateFrequency);
    };

    startAutoSwitch();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeTab, features.length]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setProgress(0);
  };

  // Framer Motion Variants
  const imageVariants = {
    initial: { opacity: 0, y: -50 }, // Moves out from the top
    animate: { opacity: 1, y: 0 }, // Fully visible and centered
    exit: { opacity: 0, y: 50 }, // Exits to the bottom
  };

  return (
    <section className={`${styles.main_container} my-[31px] md:my-[25px] lg:my-[86px]`}>
      <div className='container'>
        <div className="flex flex-col md:flex-row gap-12 md:gap-[100px] lg:gap-[161px] justify-between">
          {/* Left Section: Image */}
          <div className={`${styles.subtlecontainer} w-full md:w-1/2 lg:w-1/3`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={styles.dashboard_preview}
              >
                <div className={`${styles.dashboard_container} relative`}>
                  <Image
                    src={features[activeTab].image}
                    alt={`${features[activeTab].title} Preview`}
                    width={1226}
                    height={1593}
                    className="rounded-xl object-cover w-full h-auto"
                    priority // Ensures smoother image loading
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Section: Tabs */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <p className="section-topTitle mb-[12px] md:mb-[40px] lg:mb-[50px]">
              Features
            </p>
            <div className={`${styles.feature_tabs} space-y-4`}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${styles.tab_wrapper} w-full transition-all hover:bg-[#ffff] rounded-2xl`}
                >
                  <button
                    className={`${styles.feature_tab} rounded-lg w-full text-left`}
                    onClick={() => handleTabClick(index)}
                  >

                    <p className="text-[#453030] text-[18px] md:text-[20px] lg:text-[24px] font-medium mb-1.5">
                      {feature.title}
                    </p>
                    <p className="leading-[1.8] lg:mb-[30px]">{feature.description}</p>
                    {activeTab === index ? (
                      <div className={styles.progress_container}>
                        <div
                          className={styles.progress_bar}
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    ) : (
                      <div className={styles.inactive_progress_container}>
                        <div className={styles.inactive_progress_bar}></div>
                      </div>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubtleImageTab;
