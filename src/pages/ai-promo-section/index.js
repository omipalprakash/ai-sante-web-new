import Meta from '@/component/layout/meta';
import { AI_PROMO_CONTENT } from '@/lib/ai_promo_section_constant';
import { icons } from '@/utility/image';
import Image from 'next/image';
import Link from 'next/link';


const AiPromoSection = () => {
  return (
    <>
      <Meta
        title="AI Promo Section | Ai Sante"
        description="Explore AI-driven promotional solutions tailored for the pharmaceutical industry. Discover how Ai Sante is transforming marketing and outreach using automation and data."
        keywords="Ai Sante promotions, pharma marketing AI, healthcare automation, AI promotional tools"
      />
      <section className="bg-white text-gray-800 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="max-w-[1226px] h-auto  mx-auto my-10 bg-white rounded-2xl shadow-md  flex justify-center items-c flex-col-reverse md:flex-row w-full">
            {/* Left Section */}
            <div className="w-full md:w-1/2 p-8">
              <div className='flex flex-col items-start justify-center max-h-[434px] max-w-[496px]'>
                <div>
                  <h2 classname="text-[#203250]">{AI_PROMO_CONTENT.heading}</h2>
                  <p className="text-gray-600 mb-6">
                    {AI_PROMO_CONTENT.description}
                  </p>

                  <div className="flex flex-col gap-4 mb-20">
                    <div className="flex flex-row">
                      <div className=" mr-2">
                        {AI_PROMO_CONTENT.icon}
                      </div>
                      <p>{AI_PROMO_CONTENT.list_1}</p>
                    </div>
                    <div className="flex flex-row">
                      <div className=" mt-0 mr-2">
                        {AI_PROMO_CONTENT.icon}
                      </div>
                      <p>{AI_PROMO_CONTENT.list_2}</p>
                    </div>
                    <div className="flex flex-row">
                      <div className="mt-0 mr-2">
                        {AI_PROMO_CONTENT.icon}
                      </div>
                      <p className='mt-0'>{AI_PROMO_CONTENT.list_3}</p>
                    </div>
                  </div>

                  <Link href="#" className="inline-block bg-[#203250] text-white font-[Poppins] font-[400] px-8 py-3 rounded-[10px] text-lg ">
                    {AI_PROMO_CONTENT.button}

                  </Link>
                </div>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="w-full md:w-1/2 ">
              <div className="w-full h-full relative p-2 overflow-auto">
                <div className='relative w-full aspect-[605/522]'>
                  <Image
                    src={icons.AiPromoSectionSvg}
                    alt="Futuristic AI City"
                    fill
                    className="w-full h-auto rounded-md object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiPromoSection;