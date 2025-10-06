// pages/implementation-approach.tsx

import React from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const ImplementationApproach = ({ steps=[] }) => {
  return (
    <div className="w-full bg-[#FFFFFF] py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[57px] font-normal text-[#17494D] mb-4 font-[Erstoria]">
            Implementation Approach
          </p>
          <p className="text-[#17494D] mx-auto text-[16px] font-[400] ">
            AI SANTE provides a phased onboarding and integration plan tailored
            to each client’s team size, structure, and regional presence:
          </p>
        </div>

        {/* Steps */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step) => (
            <div>
              <div
                key={step.id}
                className="bg-[#F9F9F9] rounded-3xl p-6  md:text-left font-[Salmond] flex-1/3"
                variants={cardVariants}
              >
                <div className="text-[46px] font-[400] text-[#17494D]">
                  {step.id}.
                </div>
                <h3 className="text-[26px] font-[500] text-[#17494D] mb-2">
                  {step.title}
                </h3>
                <ul className="text-[#17494D] text-[16px] list-disc list-inside space-y-2">
                  {step.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImplementationApproach;
