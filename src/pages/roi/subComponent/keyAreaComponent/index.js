export default function KeyAreasROI() {
    return (
        <section className="bg-[#F5F5F5] py-16 px-6 md:px-20 max-w-[1440px] m-auto flex flex-col items-center">
            {/* Heading */}
            <div className="text-center mb-16">
                <h2 className="text-2xl md:text-4xl font-semibold text-[#1B2E2C] leading-snug">
                    5 Key Areas Where ROI <br className="hidden md:block" />
                    Multiplies with <span className="text-[#A259FF]">AI SANTE</span>
                </h2>
            </div>

            {/* Floating Cards */}
            <div className="flex flex-wrap justify-center gap-8">
                {/* Top Right Card */}
                <div className="bg-white rounded-2xl p-6 shadow-md w-full md:w-[40%] md:translate-y-[-40px]">
                    <h4 className="text-lg font-semibold text-[#1B2E2C] mb-2">Field Force Optimization</h4>
                    <p className="text-[#1B2E2C] text-sm">
                        MRs are more productive with auto-tracking, routing, and goal setting. Less time on paperwork = more time with doctors.
                    </p>
                </div>

                {/* Top Left Card */}
                <div className="bg-white rounded-2xl p-6 shadow-md w-full md:w-[40%]">
                    <h4 className="text-lg font-semibold text-[#1B2E2C] mb-2">Sales Intelligence</h4>
                    <p className="text-[#1B2E2C] text-sm">
                        Prescription Bot and SalesBot uncover trends and opportunities in real-time—driving smarter territory planning and promotions.
                    </p>
                </div>

                {/* Middle Card */}
                <div className="bg-white rounded-2xl p-6 shadow-md w-full md:w-[40%] md:translate-y-[-20px]">
                    <h4 className="text-lg font-semibold text-[#1B2E2C] mb-2">Doctor Relationship Strengthening</h4>
                    <p className="text-[#1B2E2C] text-sm">
                        DoctorBot keeps engagement consistent, personal, and efficient—even when reps aren’t physically present.
                    </p>
                </div>

                {/* Bottom Left Card */}
                <div className="bg-white rounded-2xl p-6 shadow-md w-full md:w-[40%] md:translate-y-[30px]">
                    <h4 className="text-lg font-semibold text-[#1B2E2C] mb-2">Operational Efficiency</h4>
                    <p className="text-[#1B2E2C] text-sm">
                        HRMS cuts down manual admin work by up to 80%, streamlining payroll, leave, and onboarding.
                    </p>
                </div>

                {/* Bottom Right Card */}
                <div className="bg-white rounded-2xl p-6 shadow-md w-full md:w-[40%] md:translate-y-[30px]">
                    <h4 className="text-lg font-semibold text-[#1B2E2C] mb-2">Training & Compliance</h4>
                    <p className="text-[#1B2E2C] text-sm">
                        Sci-Coach AI ensures MRs stay updated with therapeutic knowledge and compliance standards through on-demand micro-learning.
                    </p>
                </div>
            </div>
        </section>
    );
}
