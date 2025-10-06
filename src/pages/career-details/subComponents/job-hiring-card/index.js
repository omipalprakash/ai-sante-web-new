'use client';

import React from 'react';
// import { FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import { icons } from '@/utility/image';
import jobData from '@/lib/career_details_jobHiring';
import Link from 'next/link';

const JobOpeningCard = () => {
  return (
    <div className="py-8 md:py-[50px]">
      <div className="max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h1
            className="text-3xl font-normal text-[#89A884] text-[24px] md:text-[38px] lg:text-[52px]"

          >
            {jobData.title}
          </h1>
          <button
            className="mt-4 md:mt-0 max-w-[113px] min-h-[41px] rounded-[10px] px-[24px] py-[7px] bg-sage hover:bg-sageDark text-white font-erstoria cursor-pointer"

          >
            Apply
          </button>
        </div>
        <div className="flex flex-wrap gap-6 text-normal mt-2 mb-4">
          <div className="flex items-center gap-2">
            <Image
              src={icons.location}
              alt="Location Icon"
              width={20}
              height={20}
              className="w-6 h-6 object-contain"
            />
            {jobData.location}
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={icons.userLogo}
              alt="User Icon"
              width={20}
              height={20}
              className="w-6 h-6 object-contain"
            />
            Position Available: {jobData.positions}
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={icons.FullTimeWorkLogo}
              alt="Full Time Work Icon"
              width={20}
              height={20}
              className="w-6 h-6 object-contain"
            />
            {jobData.type}
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={icons.ExperienceLogo}
              alt="Experience Icon"
              width={20}
              height={20}
              className="w-6 h-6 object-contain"
            />
            Experience: {jobData.experience}
          </div>
        </div>


        <p
          className="mb-4 text-charcoalGray"
        >
          {jobData.intro}
        </p>

        <div className='mb-4'>
          <h2
            className="text-[1rem] md:text-[1.125rem] lg:text-[1.5rem] font-medium text-cocoa mb-[12px] md:mb-[10px] lg:mb-[20px]"

          >
            Key Responsibilities:
          </h2>
          <ul
            className="text-charcoalGray ml-[10px]"
          >
            {jobData.responsibilities.map((item, index) => (
              <li key={index} className='flex items-start gap-2'><span class="w-1 h-1 bg-cocoa rounded-full mt-2 flex-shrink-0"></span>{item}</li>
            ))}
          </ul>
        </div>

        <div className='mb-4'>
          <h2
            className="text-[1rem] md:text-[1.125rem] lg:text-[1.5rem] font-medium text-cocoa mb-[12px] md:mb-[10px] lg:mb-[20px]"

          >
            Qualifications:
          </h2>
          <ul
            className="text-charcoalGray ml-[10px]"
            style={{ fontFamily: 'Salmond' }}
          >
            {jobData.responsibilities.map((item, index) => (
              <li key={index} className='flex items-start gap-2'><span class="w-1 h-1 bg-cocoa rounded-full mt-2 flex-shrink-0"></span>{item}</li>
            ))}
          </ul>
        </div>

        <p
          className="font-[700] mt-6 text-[16px] md:text-[18px] lg:text-[24px] leading-[32px] text-cocoa"

        >
          Join us at{' '}
          <span className="font-[700] text-[16px] md:text-[18px] lg:text-[24px] leading-[32px] text-[#89A884] underline">
            <Link href="https://www.aisante.in">
              {jobData.company}
            </Link>
          </span>
          , where creativity meets innovation, and your designs can make a
          lasting impact!
        </p>
      </div>
    </div>
  );
};

export default JobOpeningCard;
