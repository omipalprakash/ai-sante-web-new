import { icons } from '@/utility/image';
import Aos from 'aos';
import Image from 'next/image';
import React from 'react';
import { AWARD_SECTION_DATA } from './constants';
import styles from './awardSection.module.css';

export const AwardSection = () => {
  return (

    <section className={`${styles.awardSection} bg-[#F5F5F5]`}>
      <div className='max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8'>
        <div className={styles.awardSection__content}>
          <div
            className="section-topTitle mb-3 md:mb-[22px] lg:mb-[31px]"
            data-aos={'fade-down'}
          >
            Awards & RECOGNITION
          </div>
          <h2
            className="tracking-wide font-['Erstoria',_sans-serif] text-[#453030]"
            data-aos={'fade-down'}
          >
            OUR AWARDS & ACHIEVEMENTS
          </h2>
        </div>

        <div className="">
          {AWARD_SECTION_DATA?.map((award, idx) => (
            <div key={idx} className='w-full mb-2.5 lg:pb-[17px] md:mb-3.5  lg:mb-5 last:mb-0'>
              <div
                className="flex justify-between items-center py-2.5 md:pt-4 md:pb-3 lg:pt-6"
              // data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <span className={`${styles.awardSection__title} flex-2 text-black`}>
                  {award.title}
                </span>
                <div className="flex-1 flex justify-between items-center space-x-4">
                  <span className={`${styles.awardSection__title} text-[#8B0000] font-normal`}>
                    {award.year}
                  </span>
                  <Image
                    src={icons.shareImgBlack}
                    alt="share_image_black"
                    width={16} height={16}
                    className="w-[16px] h-[16px] text-[#000000]"
                  />
                </div>
              </div>
              <div className="border border-[#B7B7B7]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};
