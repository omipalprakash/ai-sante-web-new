// components/ConclusionSection.tsx

import { icons } from '@/utility/image';
import Image from 'next/image';

export default function ConclusionSection({
  title = '',
  contant = '',
  points = [],
}) {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <h2 className="text-[57px]/[70px] sm:text-[40px]  md:text-[50px] lg:text-[57px] text-[#17494D] font-[Erstoria] mb-3">
            {title}
          </h2>
          <p className="text-gray-700 text-[14px] sm:text-[16px] leading-[1.7] font-[Salmond]">
            {contant}
          </p>
        </div>

        <div className="flex-1 bg-[#F0FAED] p-8 rounded-2xl">
          <ul className="space-y-6">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <Image
                  src={icons.conclusionpointIcon}
                  alt="Check Icon"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <span className="text-[26px] font-[400] text-[#000000]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
