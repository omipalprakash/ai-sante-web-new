import Image from 'next/image';
import styles from './channelPartner.module.css';
import { icons } from '@/utility/image';

export default function ChannelPartnerSection() {
  return (
    <section className="bg-white pt-[14px] pb-[24px] md:pt-0 md:pb-[87px] lg:pt-[10px] lg:pb-[100px]">
      <div className="container">
        <div className="w-full flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Left: Text Content */}
          <div className="flex-1">
            <h1 className="page-title text-[#0B0B0B]  font-[Erstoria] leading-[1.5] my-[14px]  md:mt-[35px] md:mb-[16px] lg:mt-[45px] lg:mb-[30px]">
              Want to earn $100,000 in
              annual commissions just
              like our top affiliates?
            </h1>
            <p className="mb-8">
              We are seeking a talented Graphics Designer to join our dynamic
              team at QuantumBot. As a Graphics Designer, you will play a
              pivotal role in creating visually appealing and effective.
            </p>
            {/* <a
              href="https://quantumbot.com/affiliate-program"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#4B3732] text-white font-[Poppins] font-[400] px-[23px] py-3  text-[13px] sm:text-[14px] md:text-[16px] hover:bg-[#6d4c41] transition rounded-[7.11px]"
            >
              Get Started
            </a> */}
          </div>

          {/* Right: Images and Avatars */}
          <div className="flex-1 flex flex-col items-center relative ">
            {/* Main Illustration */}
            <div className='relative w-full aspect-[539/502]'>
              <Image
                src={icons.channalImage}
                alt="Happy Affiliate"
                fill
                className="w-full h-auto rounded-md object-cover"
              />
            </div>

            {/* Avatars */}
            {/* <div className="absolute left-0 top-[80px]"> */}
            {/* <div
              style={{
                position: 'absolute',
                left: '71px',
                top: '183px',
                zIndex: 2,
              }}
            >
              <Image
                src={icons.chanelimg2}
                alt="Affiliate 1"
                width={70}
                height={70}
                className="rounded-full border-4 border-white shadow-lg"
              /> */}
            {/* </div> */}
            {/* <div className="absolute left-[200px] bottom-0">
             */}
            {/* <div
              style={{
                position: 'absolute',
                left: '238px',
                bottom: '-42px',
                zIndex: 2,
              }}
            >
              <Image
                src={icons.chanelimg3}
                alt="Affiliate 2"
                width={70}
                height={70}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div> */}
            {/* <div
              style={{
                position: 'absolute',
                left: '32px',
                bottom: '-58px',
                zIndex: 1,
              }}
            >
              <Image src={icons.linechannelimg} alt="Affiliate 2" />
            </div>
            <div
              style={{
                position: 'absolute',
                left: '20px',
                bottom: '-70px',
                zIndex: 1,
              }}
            >
              <Image src={icons.arrowchanelimg} alt="Affiliate 2" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
