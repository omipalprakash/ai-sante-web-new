'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Header_text from '../header_text';
import style from './tablist.module.css';
import Button from '../button';
import { features, TIMEOUT_DURATION } from './constants';

const Tablist = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const startAutoSwitch = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      setProgress(0);
      const updateFrequency = 50;
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

  useEffect(() => {
    const checkWidth = () => setIsLargeScreen(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setProgress(0);
  };

  return (
    <section className={`${style.features_section} bg-[#F5F5F5]`}>
      <div className="container">
        <div className={style.features_wrap} style={{
          backgroundColor: !isLargeScreen ? '' : '#fffffe'
        }}>

          {/* Header and Image section */}
          <div className={style.features_content}>
            {
              isLargeScreen && (
                <div className={style.section_header}>
                  <div className={`${style.section_tag} section_btn`}>
                    <Header_text text="Product" animateOn="view" sequential={true} />
                  </div>
                  <div className={`flex flex-wrap justify-between gap-3 ${style.section_box}`}>
                    <h2 className={`${style.headertext} font-['Erstoria',_sans-serif] text-[#453030]`}>{features[activeTab].title}</h2>
                    <Button url="/tablist" />
                  </div>
                </div>
              )
            }

            {/* Animated image preview for large screens */}
            {isLargeScreen && (
              <div className={style.image_section}>
                <AnimatePresence mode="wait">
                  <motion.div
                    // key={activeTab}
                    initial={{ opacity: 0, scale: 0.95, x: -100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95, x: 100 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className={style.dashboard_preview}
                  >
                    <div className={style.dashboard_container}>
                      <Image
                        src={features[activeTab].image}
                        alt={`${features[activeTab].title} Preview`}
                        width={1200}
                        height={675}
                        className={style.dashboard_image}
                        priority
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* MOBILE VIEW — show all features vertically */}
          {!isLargeScreen && (
            <div className="flex flex-col gap-2.5">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col bg-white rounded-[4px] p-2">
                  <div className={style.section_header}>
                    <div className={style.section_tag}>
                      <Header_text text="Product" animateOn="view" sequential={true} />
                    </div>
                    <div className="flex flex-wrap justify-between gap-3 mt-2.5 mb-4">
                      <h2 className={style.headertext}>{feature.title}</h2>
                      <Button url="/tablist" />
                    </div>
                  </div>

                  <p className="text-black mb-2.5">{feature.description}</p>
                  <Image
                    src={feature.image}
                    alt={`${feature.title} Preview`}
                    width={1200}
                    height={675}
                    className={style.dashboard_image}
                    priority
                  />
                </div>
              ))}
            </div>
          )}

          {/* Desktop Tabs */}
          {isLargeScreen && (
            <div className={style.tabs_container}>
              <div className={style.feature_tabs}>
                {features.map((feature, index) => (
                  <div key={index} className={`${style.tab_wrapper} w-70`}>
                    <button
                      className={`${style.feature_tab} ${activeTab === index ? 'active' : 'inactive'
                        }`}
                      onClick={() => handleTabClick(index)}
                    >
                      {activeTab === index ? (
                        <div className={style.progress_container}>
                          <div
                            className={style.progress_bar}
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      ) : (
                        <div className={style.inactive_progress_container}>
                          <div className={style.inactive_progress_bar}></div>
                        </div>
                      )}
                      <p className={style.tabs_title}>{feature.title}</p>
                      <p className={style.tabs_description}>{feature.description}</p>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tablist;
