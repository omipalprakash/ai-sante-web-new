import Meta from '@/component/layout/meta';
import React from 'react';
import ChannelPartnerSection from './subComponents/channelPartnerSection';
import ProgramOverview from './subComponents/programOverview';
import AudienceSelector from './subComponents/audienceSelector';
import HowItWorksSection from './subComponents/affiliateHowItWorks.js/index.js';
import JoinFormSection from './subComponents/join-form-section';
import { PROGRAMOVERVIEW_DATA } from '@/lib/channel-partner';
import Breadcrumbs from '@/component/global/breadcrumbs';

const index = () => {
  return (

    <>
      <Meta
        title="Become a Channel Partner | Ai Sante"
        description="Join Ai Sante's Channel Partner Program and earn up to $100,000 in annual commissions. Ideal for influencers, agencies, and industry experts promoting AI-driven pharma tools."
        keywords="Ai Sante affiliate, pharma affiliate program, earn commission pharma, channel partner Ai Sante, pharma CRM referral, pharma AI marketing"
      />

      <Breadcrumbs />
      <ChannelPartnerSection />
      {/* <ProgramOverview data={PROGRAMOVERVIEW_DATA} /> */}
      <AudienceSelector />
      <HowItWorksSection />
      <JoinFormSection />
    </>
  );
};

export default index;
