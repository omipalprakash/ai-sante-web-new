import React from 'react';
import { cardsData } from '@/lib/teamUp_constant';
import Logo_Scroller from '@/component/logo_scroller';
export default function TeamUp() {
  return (
    <section className='team py-[30px] md:py-[60px] bg-gradient-to-b from-white to-[#FFF4E6]'>
      <div className="container">
        <h2 className="text-goldenBrown mb-[20px] md:mb-[26px] lg:mb-[51px] text-center">
          Team Up With <br /> Your Future Crew
        </h2>

        <Logo_Scroller texts={cardsData} isTeamUp={false} numCopies={10}
        />
      </div>
    </section>
  );
}
