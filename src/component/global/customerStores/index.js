import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { icons } from '@/utility/image';
import Header_text from '@/component/header_text';
import Aos from 'aos';
import gsap from 'gsap';

export default function CustomerStroresSection({ data = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const imageRef = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const imageEl = imageRef.current;
    const xFrom = direction === 'next' ? 50 : -50;

    if (imageEl) {
      gsap.fromTo(
        imageEl,
        { x: xFrom, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [currentIndex]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection('prev');
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setDirection('next');
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const slide = data[currentIndex];

  return (
    <section className="w-full overflow-hidden py-[30px] md:py-[20px]  lg:py-[59px]">
      <div className='container'>
        <div className="mb-[10px] md:mb-[32px] lg:mb-[60px] border-b border-black pb-2">
          <Header_text text={'Customer Stories'} />
        </div>

        <div className="flex flex-col-reverse gap-5 md:grid md:grid-cols-2  xl:grid-cols-[773px_547px] md:gap-2.5 lg:gap-5 place-items-start">
          {/* Static Text Block */}
          <div className='flex flex-col justify-between h-full gap-[60px] w-full'>
            <p className='text-[16px] md:text-[18px] lg:text-[24px] leading-[2] max-w-[715px] text-black'>
              {slide.quote}
            </p>
            <div className="flex flex-wrap justify-between pt-4 pb-[22px] border-b-2 border-black">
              <div className='flex flex-col gap-3.5'>
                <p className="common-title font-custom text-black">{slide.stat1}</p>
                <p>{slide.label1}</p>
              </div>
              <div className='flex flex-col gap-3.5'>
                <p className="common-title  font-custom text-black">{slide.stat2}</p>
                <p>{slide.label2}</p>
              </div>
            </div>
          </div>

          {/* Only Animate This Image */}
          <div className="bg-[#F5F5F5] px-[9px] pt-[8px] pb-[12.11px] md:px-[19.31px] md:pt-[16.55px] md:pb-[12px]  lg:px-[28px] lg:pt-[24px] lg:pb-[18px] rounded-lg overflow-hidden place-self-end w-full">
            <div className="w-full h-auto">
              <Image
                ref={imageRef}
                src={slide.image}
                alt={slide.name}
                width={400}
                height={400}
                className="rounded-md w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col gap-[15px] mt-[18px]">
              <p className="font-medium">
                {slide.name}
              </p>
              <p className='leading-[1.5]'>
                {slide.title}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid md:grid-cols-2 xl:grid-cols-[773px_547px] md:gap-2.5 lg:gap-5">
          <div className="pt-3 md:pt-6 flex justify-end gap-4 slide-btn">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`transition-opacity  ${currentIndex === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:opacity-80'
                } cursor-pointer`}
            >
              <Image src={icons.leftArrow} alt="leftArrow" width={25} height={25} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === data.length - 1}
              className={`transition-opacity ${currentIndex === data.length - 1
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:opacity-80'
                } cursor-pointer`}
            >
              <Image src={icons.rightArrow} alt="rightArrow" width={25} height={25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
