'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { icons } from '@/utility/image';
import { testimonials } from './constants';
import BackgroundWrapper from '../animations/bgLayer';

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const detailRef = useRef(null);

  useEffect(() => {
    if (detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
      );
    }
  }, [activeIndex]);

  return (
    <div className=" bg-[#fffefc] relative overflow-hidden">
      <BackgroundWrapper>
        <section className="py-20 px-4 relative max-w-[1440px] m-auto">
          {/* Background cards */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl z-0">
            <div className="grid grid-cols-3 gap-4 p-8">
              <div className="w-28 h-28 bg-gray-100 rounded-2xl opacity-70" />
              <div className="col-span-1"></div>
              <div className="w-28 h-28 bg-gray-100 rounded-2xl opacity-70" />

              <div className="col-span-1"></div>
              <div className="w-28 h-28 bg-gray-100 rounded-2xl opacity-70" />
              <div className="col-span-1"></div>

              <div className="w-28 h-28 bg-gray-100 rounded-2xl opacity-70" />
              <div className="col-span-1"></div>
              <div className="w-28 h-28 bg-gray-100 rounded-2xl opacity-70" />
            </div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Images layout - using grid to handle all testimonials */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
              {testimonials.map((person, idx) => {
                // Calculate position styles based on index to create the staggered effect
                const isOdd = idx % 2 !== 0;
                const itemStyles = {
                  marginTop: isOdd ? '2rem' : '0',
                };

                // Every 5th item gets extra spacing
                const wrapperClass = idx % 5 === 0 ? 'mt-4' : '';

                return (
                  <div
                    key={person.id}
                    className={`${wrapperClass}`}
                    style={itemStyles}
                  >
                    <div
                      onMouseEnter={() => setActiveIndex(idx)}
                      className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform ${
                        idx === activeIndex
                          ? 'scale-105 opacity-100'
                          : 'opacity-90 grayscale hover:opacity-80 hover:grayscale-0'
                      }`}
                    >
                      <Image
                        src={icons.testimonial}
                        alt={person.name}
                        width={140}
                        height={140}
                        className="h-auto object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mb-8">
              <div className="inline-block bg-[#382b29] text-white text-xs px-3 py-1 rounded-full mb-3 tracking-wide">
                Testimonial
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
                Trusted By Leaders <br />
                From various Industries
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto mt-4 text-sm sm:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>

            <div ref={detailRef} className="max-w-xl mx-auto text-center">
              <p className="text-sm text-gray-600 italic mb-4">
                "{testimonials[activeIndex].message}"
              </p>
              <h4 className="text-lg font-semibold text-gray-800">
                {testimonials[activeIndex].name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonials[activeIndex].role}
              </p>
              <div className="mt-4">
                <Image
                  src={icons.Header_Text_Icon}
                  alt={testimonials[activeIndex].company}
                  width={70}
                  height={70}
                  className=" mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </BackgroundWrapper>
    </div>
  );
}
