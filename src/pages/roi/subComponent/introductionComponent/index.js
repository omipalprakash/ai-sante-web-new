'use client'; // if you're using app directory in Next.js 13+

import Header_text from '@/component/header_text';
import Image from 'next/image';

export default function ROIChallengeSection() {
    return (
        <section className="relative py-16 px-4 md:px-20 lg:px-32 bg-white">
            {/* Background decoration if needed */}
            {/* <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div> */}

            <div className="relative max-w-7xl mx-auto">
                {/* Small icon and subtitle */}
                <Header_text text={'Introduction'} className='font-[Salmond]' />

                {/* Main Title */}
                <h2 className="text-3xl md:text-5xl font-normal  mt-4 text-[#17494D] mb-8 leading-tight font-[Erstoria]">
                    The ROI Challenge in Pharma
                </h2>

                {/* Paragraph */}
                <p className="text-base md:text-xl text-[#17494D] mb-8 leading-relaxed font-[Salmond]">
                    Pharmaceutical businesses invest heavily in sales teams, compliance, field force monitoring,
                    and relationship-building with healthcare professionals. Yet, many struggle with:
                </p>

                {/* <p className="text-base md:text-xl text-[#17494D] mb-8 leading-relaxed font-[Salmond]">
                    Low visibility of MR performance
                </p> */}

                {/* Bullet Points */}
                <ul className="text-left space-y-4 text-base text-[#17494D] mb-8 mx-auto max-w-6xl ">
                    <li className="flex items-start">
                        <span className="mr-2 text-[#17494D] font-[Salmond]">•</span> Low visibility of MR performance
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-[#17494D] font-[Salmond]">•</span> Manual and error-prone reporting systems
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-[#17494D] font-[Salmond]">•</span> Disconnected HR processes
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-[#17494D] font-[Salmond]">•</span> Inconsistent doctor engagement
                    </li>
                    <li className="flex items-start">
                        <span className="mr-2 text-[#17494D] font-[Salmond]">•</span> Lack of actionable insights
                    </li>
                </ul>

                {/* Closing paragraph */}
                <p className="text-base md:text-xl text-[#17494D] leading-relaxed font-[Salmond]">
                    The result? Wasted resources, lost sales opportunities, and poor return on investment.
                </p>
            </div>
        </section>
    );
}
