// import Navbar from '@/component/navbar';
// import Aos from 'aos';
// import { useEffect } from 'react';
import HeroComponent from './subComponent/heroComponent';
import ExecutiveSummary from './subComponent/summaryComponent';
// import Footer from '@/component/footer';
import ROIChallengeSection from './subComponent/introductionComponent';
import AISanteSolutions from './subComponent/solutionComponent';
import RoiMetricsTable from './subComponent/roiMetricsComponent';
import RealWorldImpact from './subComponent/realWordImpactComponent';
import KeyAreasROI from './subComponent/keyAreaComponent';
import Falling_Text from '@/component/falling_text';
import { FALLING_TEXT_DATA } from '@/component/falling_text/constants';
import ImplementationApproach from './subComponent/implementationApproach';
import ConclusionSection from './subComponent/conclusionSection';
import MaximizeYourRoi from './subComponent/maximizeYourRoi';
import {
  CONCLUSIONSECTION_DATA,
  IMPLEMENTATIONAPPROACH_DATA,
} from '@/lib/roi_constant';
import Breadcrumbs from '@/component/global/breadcrumbs';

export default function ROI() {
  return (
    <>
      <Breadcrumbs />
      <HeroComponent />
      <ExecutiveSummary />
      <ROIChallengeSection />
      <AISanteSolutions />
      <RoiMetricsTable />
      <RealWorldImpact />
      <KeyAreasROI />
      <Falling_Text
        headerText={FALLING_TEXT_DATA.headerText}
        text={FALLING_TEXT_DATA.text}
        highlightWords={FALLING_TEXT_DATA.highlightWords}
        highlightClass={FALLING_TEXT_DATA.highlightClass}
        trigger={FALLING_TEXT_DATA.trigger}
        backgroundColor={FALLING_TEXT_DATA.backgroundColor}
        wireframes={FALLING_TEXT_DATA.wireframes}
        fontSize={FALLING_TEXT_DATA.fontSize}
      />
      <ImplementationApproach steps={IMPLEMENTATIONAPPROACH_DATA} />
      <ConclusionSection
        contant={CONCLUSIONSECTION_DATA.contant}
        title={CONCLUSIONSECTION_DATA.title}
        points={CONCLUSIONSECTION_DATA.points}
      />
      <MaximizeYourRoi />
    </>
  );
}
