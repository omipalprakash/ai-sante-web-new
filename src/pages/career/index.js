import Meta from '@/component/layout/meta';
import CustomerStroresSection from '@/component/global/customerStores';
import AboutOurCompany from './aboutOurCompany';
import { CUSTOMER_STORES_SECTION_DATA } from '@/component/global/customerStores/constant';
import TeamUp from './teamUp';
import OpenRoles from './OpenRoles';
import LocationSection from './locationSection';
import JoinUsHelthcare from './JoinUsHelthcare';
import Breadcrumbs from '@/component/global/breadcrumbs';

export default function Career() {
  return (
    <>
      <Meta
        title="Careers | Join the Team at Ai Sante"
        description="Explore exciting career opportunities at Ai Sante. Join a passionate team that's revolutionizing pharmaceutical operations with cutting-edge AI solutions."
        keywords="AI Sante careers, pharma jobs, tech jobs, join Ai Sante, open roles, AI pharma company jobs, React, Python, UI UX, BDM, QA, Data Analyst, Ahmedabad jobs"
      />
      <Breadcrumbs />

      <JoinUsHelthcare />
      <AboutOurCompany />
      <CustomerStroresSection data={CUSTOMER_STORES_SECTION_DATA} />
      <TeamUp />
      <OpenRoles />
      <LocationSection />

    </>
  );
}
