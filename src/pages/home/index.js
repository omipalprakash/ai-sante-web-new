// import React from 'react';
import Meta from '@/component/layout/meta';
import HomeSection from '@/component/homeSection';
import Logo_Scroller from '@/component/logo_scroller';
import Tablist from '@/component/tablist';
import Roi from '@/component/roi';
import Leaders from '@/component/leaders';
import Aboutus from '@/component/aboutus';
import WordsFromCEO from '../wordFromCeoSection';
// import { AwardSection } from '@/component/awardSection';
import Blog from '@/component/blog';
import ContactForm from '@/component/contactForm';
import BackgroundBoxAnimation from '@/component/global/backgroundBoxAnimation/backgroundBoxAnimation';





const HomePage = () => {
  return (
    <>
      <Meta
        title="Home | Ai Sante"
        description="Welcome to Ai Sante – Revolutionizing Pharma through intelligent automation and AI."
        keywords="Ai Sante, pharma automation, AI in pharma, healthtech"
      />
      <HomeSection />
      <Logo_Scroller />
      <Tablist />
      <Roi />
      <Leaders />
      <Aboutus />
      <WordsFromCEO />
      {/* <AwardSection /> */}
      <BackgroundBoxAnimation>
        <Blog />
      </BackgroundBoxAnimation>
      <ContactForm />
    </>
  );
};

export default HomePage;
