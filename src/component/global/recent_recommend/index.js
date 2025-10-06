import Image from 'next/image';
import { icons } from '@/utility/image';
import Aos from 'aos';
import { useEffect } from 'react';

export default function Recent_Recommend({ data = [], title = '' }) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (

    <section className="bg-[#F5F5F5] py-[20px] md:py-[40px] lg:pt-[40px] lg:pb-[60px]">
      <div className='max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8'>
        <h2
          className="page-title font-['Erstoria',_sans-serif] text-[#2A5286] uppercase text-center mb-[30px] md:mb-[20px] lg:mb-[40px]"

        >
          {title}
        </h2>
        {data.map((award, idx) => {
          const isLast = idx === data.length - 1;
          const marginBottomClass = isLast
            ? ''
            : 'mb-[18px] lg:mb-[40px]';
          return (
            <div
              key={idx}

              className={` place-items-center grid grid-cols-1 md:grid-cols-[233px_1fr] lg:grid-cols-[320px_1fr] gap-0 md:gap-[14px] lg:gap-[20px] ${marginBottomClass}`}

            >
              {/* Larger Image */}
              <div className="relative w-full max-w-[361px] h-[220px] md:w-[233px] md:h-[142px] lg:w-[320px] lg:h-[195px] rounded-lg overflow-hidden flex-shrink-0">
                <Image src={icons.awardOne || "/placeholder.svg"} alt={award.title} fill className="object-cover" />

              </div>

              {/* Content */}
              <div className="flex flex-col relative gap-[10px] md:gap-[6px] lg:gap-[13px] mt-5 md:mt-0">
                {/* Arrow Icon */}
                <div className="absolute top-0 right-0">
                  {/* <ArrowUpRight className="w-5 h-5 text-black" /> */}
                  <Image
                    src={icons.shareImgBlack}
                    alt="Black_share_image"
                    width={16} height={16}
                    className="w-4 h-4"
                  />
                </div>

                {/* Metadata */}
                <p className=" text-black">
                  {award.name} <span className="mx-2">•</span> {award.date}
                </p>

                <h3 className="text-[#453030]  mt-2 text-black uppercase">
                  {award.title}
                </h3>

                <p className='leading-[1.5] md:leading-[1.4] lg:leading-[1.5]'>
                  {award.description}
                </p>

                {/* Tags */}
                <div className="flex gap-1  text-black mt-4">
                  {award.tags.map((tag, tIdx) => (
                    <div key={tIdx}>
                      <span>
                        {tag}{' '}
                        {tIdx !== award.tags.length - 1 && (
                          <span className="mx-2">•</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )

        })}
      </div>
    </section>

  );
}
