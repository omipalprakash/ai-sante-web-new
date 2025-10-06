import { howItWorksSteps } from '@/lib/channel-partner';

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container">
        <h2
          className="text-center mb-10 text-[#000000]"
          style={{
            fontFamily: 'Erstoria',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          }}
        >
          HOW DOES IT WORK?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {howItWorksSteps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F9FBFF] border border-[#0000001A] p-6 rounded-2xl shadow-sm text-start flex flex-col items-start h-full gap-[15px]"
            >
              <div className="mb-4 text-black">{step.icon}</div>
              <h3
                className="font-medium text-[#000000]  mb-2"
                style={{

                  fontSize: 'clamp(1rem, 4vw, 1.5rem)',
                }}
              >
                {step.title}
              </h3>
              <p
                className="leading-[1.5]"
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
