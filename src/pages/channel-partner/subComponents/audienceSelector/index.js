'use client';
import { useState } from 'react';
import Image from 'next/image';
import { audienceData } from '@/lib/channel-partner';

const AudienceSelector = () => {
  const [selected, setSelected] = useState('influencers');
  const active = audienceData.find((item) => item.key === selected);

  return (
    <section className="bg-gray-50 py-12 px-4 ] md:px-8 lg:px-16">
      <div className="bg-[#EEF5F8] p-6 sm:p-10  rounded-2xl container  lg:my-20">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Audience Options */}
          <div className="flex flex-col gap-4 lg:w-1/3">
            <h2
              className="text-[46px] sm:text-4xl font-[400] mb-8"
              style={{ fontFamily: 'Erstoria' }}
            >
              Who’s Good Fit?
            </h2>
            {audienceData.map((item) => (
              <button
                key={item.key}
                onClick={() => setSelected(item.key)}
                className={`text-left px-4 py-3 rounded-lg font-[500] text-[17.44px] cursor-pointer ${selected === item.key ? 'bg-black text-white' : ' text-black'
                  }`}
                style={{ fontFamily: 'Poppins' }}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Right: Detail View */}
          <div className="flex-1 space-y-4 lg:w-2/3">
            <div className="flex flex-col items-start gap-4">
              <div className="w-40 h-40 relative">
                <Image
                  src={active.image}
                  alt={active.title}
                  layout="fill"
                  className=""
                />
              </div>
              <h3
                className="text-[17.44px] font-[600]"
                style={{ fontFamily: 'Poppins' }}
              >
                {active.title}
              </h3>
            </div>
            <p
              className="font-[400] text-[15.63px]"
              style={{ fontFamily: 'Poppins' }}
            >
              {active.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSelector;
