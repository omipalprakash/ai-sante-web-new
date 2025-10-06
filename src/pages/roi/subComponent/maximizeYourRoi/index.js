// components/ReadyToMaximize.tsx

import { icons } from '@/utility/image';
import Image from 'next/image';
import Link from 'next/link';

export default function MaximizeYourRoi() {
  return (
    <div className="bg-[#ffffff]">
      <section className="relative max-w-[1440px] m-auto h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src={icons.maximizeYourRoi}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
          className='opacity-80'
        />

        {/* Overlay content */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-[#FFFFFF] text-[32px] sm:text-[40px] md:text-[48px] font-[Arial] font-[700] ">
            Ready to Maximize Your ROI?
          </h2>
          <p className="text-[#FFFFFF] text-[16px] sm:text-[18px] md:text-[20px] font-[Arial] font-[400] mb-8">
            Talk to an AI SANTE specialist today.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <Link href="/roi">
            <button className="bg-[#17494D] text-white py-3 px-6 text-[16px] font-semibold hover:bg-[#123c3f] transition cursor-pointer">
              Book a Demo
            </button>
            </Link>
            <Link href="/">
            <button className="bg-[#17494D] text-white py-3 px-6 text-[16px] font-semibold hover:bg-[#123c3f] transition cursor-pointer">
             Download ROI Calculator
            </button>
            </Link>
            <Link href="/contact">
            <button className="bg-[#17494D] text-white py-3 px-6 text-[16px] font-semibold hover:bg-[#123c3f] transition cursor-pointer">
              Contact Sales
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
