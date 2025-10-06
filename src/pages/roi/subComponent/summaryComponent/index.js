import Header_text from '@/component/header_text';
import { icons } from '@/utility/image';

export default function ExecutiveSummary() {
    return (
        <section className="w-full bg-[#F9FBFA] relative py-16 px-4 md:px-8 lg:px-20">
            {/* Background Grid (optional for design) */}
            <div className={`absolute inset-0 bg-repeat opacity-50 pointer-events-none`} style={{
                backgroundImage: `url(${icons.summaryBackground?.src}), url(${icons.summaryBackground?.src})`,
                backgroundPosition: 'top left, bottom right',
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundSize: '10%',
            }}></div>

            <div className="relative max-w-4xl mx-auto text-center">
                {/* Header Text */}
                <Header_text text={'Executive Summary'} parentClassName='mb-10' className='font-[Salmond] text-2xl font-medium md:text-xl leading-relaxed' />

                {/* Paragraph */}
                <p className="text-[#002924] text-base md:text-xl leading-relaxed mb-6">
                    In today’s fast-evolving pharmaceutical landscape, companies face increasing pressure to improve efficiency,
                    reduce costs, and deliver better healthcare outcomes. Traditional methods of managing field force operations,
                    MR reporting, HR, and doctor engagement are no longer sustainable for growth.
                </p>

                {/* Bold Part */}
                <p className="text-[#002924] text-lg md:text-xl leading-relaxed font-medium">
                    <span className="font-bold">
                        AI SANTE brings
                    </span> a complete suite of AI-powered solutions —
                    <span className="font-bold">
                        RxIntel AI (Pharma CRM), HRMS, SalesBot, and DoctorBot
                    </span> — that streamline operations, enhance decision-making, and drive measurable returns on investment (ROI).
                    This white paper outlines how pharma companies can maximize their ROI by leveraging AI SANTE’s unified digital ecosystem.
                </p>
            </div>
        </section>
    );
}
