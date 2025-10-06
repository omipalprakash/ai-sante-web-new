const { default: CookieIcon } = require('@/component/icons/cookieIcon');
const { default: DollarSignIcon } = require('@/component/icons/dollarSignIcon');
const {
  default: PromoteProductsIcon,
} = require('@/component/icons/promoteProductsIcon');
import { icons } from '@/utility/image';

export const howItWorksSteps = [
  {
    icon: <CookieIcon />,
    title: '90 Days Cookie Life',
    description:
      'Become a XYZ affiliate. Get access to exclusive affiliate portal.',
  },
  {
    icon: <PromoteProductsIcon />,
    title: 'Promote The Products',
    description:
      'Share your unique affiliate links via blogs, social media posts, email newsletters, videos and other digital forums.',
  },
  {
    icon: <DollarSignIcon />,
    title: 'Earn Commissions',
    description:
      'Earn a share of the revenue for every qualified sale via your links for the next 12 months.',
  },
];

export const audienceData = [
  {
    key: 'influencers',
    title: 'Influencers and Publishers',
    description:
      'Have you built a large audience of followers who are interested in business tools? Whether you are a blogger, YouTuber, website owner, or anyone with a relevant subscriber base, we want you as a Zoho affiliate! Recommend our products to your audience and watch the commissions accumulate.',
    image: icons.InfluenceSVG,
  },
  {
    key: 'agency',
    title: 'Digital Marketing Agency',
    description:
      'As a digital marketing agency, you can bundle our tools into your services and offer added value to your clients while earning commissions.',
    image: icons.InfluenceSVG,
  },
  {
    key: 'hosting',
    title: 'Hosting Providers',
    description:
      'If you provide hosting services, offer our tools as a value-added service. Get rewarded every time someone signs up through your link.',
    image: icons.InfluenceSVG,
  },
  {
    key: 'associations',
    title: 'Industry or Trade Associations',
    description:
      'Promote our business tools to your members. Help them grow while earning commissions for your organization.',
    image: icons.InfluenceSVG,
  },
];
export const staticData = {
  step1: {
    title: 'Contact us',
    button: 'Next',
    stepText: 'Step 1/2',
  },
  step2: {
    title: 'Contact us',
    subtitle: 'Promotion Method',
    description:
      'Provide relevant information about your business or marketing capabilities to help us evaluate your application.',
    button: 'Submit',
    stepText: 'Step 2/2',
  },
};

export const variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.4 },
};
// Static data for ProgramOverview module
export const PROGRAMOVERVIEW_DATA = [
  {
    id: '01',
    title: '15%',
    desc: 'Commission on every qualified sale for the first 12 months',
    bg: 'bg-[#FDFDFD]',
  },
  {
    id: '02',
    title: '90 Days Cookie Life',
    desc: 'To earn commissions on your referrals',
    bg: 'bg-[#6893791A]',
  },
  {
    id: '03',
    title: '$100',
    desc: 'Your referrals get wallet credits to tryXYZ',
    bg: 'bg-[#FDFDFD]',
  },
];
