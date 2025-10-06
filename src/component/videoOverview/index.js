'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './videooverview.module.css';
import { icons } from '@/utility/image';
// const InfoCard = ({ HeaderText = '', content1 = '', content2 = '' }) => {

const VideoOverview = ({ title = 'Lorem ipsum dolor sit amet', video1 = '' }) => {
  return (
    <section className="relative overflow-hidden my-[30px] md:my-[23px] lg:my-[49px]">
      <div className='container'>
        <div className={`flex flex-col items-center justify-between md:flex-row relative gap-[15px] md:gap-[20px] lg:gap-[24px]`}>
          <div className="max-w-full md:block lg:block md:max-w-1/2 lg:max-w-[544px]">
            <p className="section-topTitle mb-[13px] md:mb-[15px] lg:mb-[19px]">Video Overview</p>
            <h2 className="common-title font-['Erstoria',_sans-serif] text-[#453030]">{title}</h2>
          </div>
          <div className="max-w-full md:max-w-1/2 lg:max-w-[773px]">
            <video width={773} height={439} autoPlay
              muted
              loop
              playsInline src={video1}></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoOverview;
