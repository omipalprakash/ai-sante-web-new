import { icons } from '@/utility/image';
import Image from 'next/image';

export default function ProgramOverview({ data = [] }) {
  return (
    <section className="bg-[#F5F5F5] py-[20px] md:py-[60px] lg:py-[100px]">
      <div className='max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8'>
        <div className="flex flex-col md:flex-row gap-[30px] md:gap-[50px] lg:gap-[155px]">
          {/* Left: Illustration */}
          <div className="w-full md:w-1/2 max-w-[520px]  mb-6 md:mb-0 relative flex justify-center items-center md:justify-start md:items-start">
            <div className="rounded-2xl w-full relative">
              <div className='relative w-full aspect-[520/520]'>
                <Image
                  src={icons.twoWomenimage}
                  alt="Business handshake illustration"
                  fill
                  className="w-full h-auto rounded-md object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            {/* Heading */}
            <div className="flex flex-col gap-4 max-w-[497px]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src={icons.bigsizearrowchannelimage}
                    width={130}
                    height={130}
                    className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-[110px] lg:h-[110px] xl:w-[130px] xl:h-[130px]"
                    alt="Arrow icon"
                  />
                </div>
                <div>
                  <h2 className="font-[Erstoria]  text-[#04000B] leading-tight">
                    PROGRAM<br /> OVERVIEW
                  </h2>
                </div>
              </div>
              <p className="">
                Give lady of they such they sure it. Me contained explained my
                education. Vulgar as hearts by garret. Perceived determine
                departure explained no.
              </p>
            </div>
            <div className="max-w-[1000px] w-full mt-10 relative md:relative lg:-translate-x-1/4 ml-0 md:ml-[-250px] lg:ml-[-55px]">
              <div className="flex flex-col  md:flex-row gap-[15px]">
                {data.map((card, i) => (
                  <div
                    key={i}
                    className={`${card.bg} rounded-xl shadow-sm p-4 md:p-6 flex flex-col min-w-[200px] w-full md:max-w-[220px] gap-2 border border-[#E7E7E7] flex-1/3`}
                  >
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#2E2D2D]  text-white flex items-center justify-center font-[Salmond] font-[700] text-[17px] ">
                      {card.id}
                    </div>
                    <div className="text-[17px] font-[600] font-[Salmond] text-[#04000B]">
                      {card.title}
                    </div>
                    <div className="text-[#04000B] text-[14px] font-[Salmond] font-[400]">
                      {card.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cards for mobile & tablet - stacked below */}
        {/* <div className="flex flex-col md:hidden gap-4 mt-10">
        {data.map((card, i) => (
          <div
            key={i}
            className={`${card.bg} rounded-xl shadow-sm p-4 flex flex-col gap-2 border border-[#F0F4F8] min-w-[200px]`}
          >
            <div className="w-8 h-8 rounded-full bg-[#2E2D2D] text-white flex items-center justify-center font-[Salmond] font-[700] text-[17px]">
              {card.id}
            </div>
            <div className="text-[17px] font-[600] font-[Salmond] text-[#04000B]">
              {card.title}
            </div>
            <div className="text-[#04000B] text-[14px] font-[Salmond] font-[400]">
              {card.desc}
            </div>
          </div>
        ))}
      </div> */}
      </div>
    </section>
  );
}
