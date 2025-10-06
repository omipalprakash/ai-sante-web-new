// Static data for Navbar module
export const NAVBAR_DATA = [];

export const cardData = [
  {
    color: 'green',
    title: 'AI MR Reporting System',
    subtitle: 'RxINTEL AI',
    items: [
      {
        name: 'AI Powered Chemist Bot',
        url: '/chemist-bot',
        description: 'Automates medicine orders with precision and real-time stock sync.',
      },
      {
        name: 'AI Goal Bot',
        url: '/goal-bot',
        description: 'Drives team targets through adaptive, real-time performance nudges.',
      },
      {
        name: 'Prescription Bot',
        url: '/prescription-bot',
        description: 'Instantly converts doctor visits into prescription growth.',
      },
    ],
  },
  // {
  //   color: 'red',
  //   title: 'AI Service Desk',
  //   subtitle: 'Lorem Ipsum dolor',
  //   items: [
  //     {
  //       name: '24/7 AI customer support',
  //       url: '/fin-ai-agent',
  //       description:'Always-on support that responds, resolves, and remembers—Quickly.',
  //     },
  //     {
  //       name: 'Instant ticket resolution',
  //       url: '/fin-ai-agent',
  //       description:'Slash wait times with AI that closes tickets in seconds.',
  //     },
  //     {
  //       name: 'E-commerce workflow automation',
  //       url: '/fin-ai-agent',
  //       description:'Streamlines orders, inventory, and support with zero manual touch.',
  //     },
  //   ],
  // },
  // {
  //   color: 'teal',
  //   title: 'AI HRMS',
  //   subtitle: 'Lorem Ipsum dolor',
  //   items: [
  //     {
  //       name: 'AI-driven payroll & attendance',
  //       url: '/fin-ai-agent',
  //       description:'Automates payouts and tracks presence with absolute accuracy',
  //     },
  //     {
  //       name: 'AI Smart ATS',
  //       url: '/fin-ai-agent',
  //       description:'Finds top talent faster with intelligent resume screening.',
  //     },
  //     {
  //       name: 'AI-driven performance reviews',
  //       url: '/fin-ai-agent',
  //       description:'Delivers fair, data-backed insights to boost team growth.',
  //     },
  //   ],
  // },
  // {
  //   color: 'orange',
  //   title: 'AI Doctor ChatBot',
  //   subtitle: 'Lorem Ipsum dolor',
  //   items: [
  //     {
  //       name: 'AI-powered patient management',
  //       url: '/fin-ai-agent',
  //       description:'Streamlines records, treatments, and communication with intelligent care.',
  //     },
  //     {
  //       name: 'Automates appointment scheduling',
  //       url: '/fin-ai-agent',
  //       description:'Eliminates booking chaos with smart, self-service scheduling.',
  //     },
  //     {
  //       name: 'Enhances care delivery',
  //       url: '/fin-ai-agent',
  //       description:'Elevates treatment precision through real-time data and AI insights.',
  //     },
  //   ],
  // },
];

export const getColorClasses = (color) => {
  switch (color) {
    case 'green':
      return {
        dot: 'bg-green-600',
        badge: 'bg-green-200 text-green-900',
      };
    case 'red':
      return {
        dot: 'bg-red-600',
        badge: 'bg-red-200 text-red-900',
      };
    case 'teal':
      return {
        dot: 'bg-teal-600',
        badge: 'bg-teal-200 text-teal-900',
      };
    case 'orange':
      return {
        dot: 'bg-orange-600',
        badge: 'bg-orange-200 text-orange-900',
      };
    default:
      return {
        dot: 'bg-blue-600',
        badge: 'bg-blue-200 text-blue-900',
      };
  }
};
export const resourceItems = [
  {
    title: 'Blog',
    description:
      'More than a chatbot. Resolve 60% of support volume instantly.',
    url: '/#stories',
  },
  // {
  //   title: 'Awards',
  //   description:
  //     'Our top solution resolves 60% of support inquiries instantly, enhancing customer satisfaction.',
  //   url: '/awards',
  // },
  {
    title: 'Life at AI Sante',
    // description:
    //   'More than a chatbot. Resolve 60% of support volume instantly.',
    url: '/career',
  },
  {
    title: 'Channel Partner',
    description:
      'More than a chatbot. Resolve 60% of support volume instantly.',
    url: '/channel-partner',
  },
  {
    title: 'Contact',
    description:
      'More than a chatbot. Resolve 60% of support volume instantly.',
    url: '/contact',
  },
];
