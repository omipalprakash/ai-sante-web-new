import Link from "next/link"

export default function PharmaAISection() {
    const features = [
        "AI powered real time data from chemist",
        "AI powered financial goal bot",
        "AI powered prescription bot",
        "AI powered science coach",
        "AI powered HRMS",
        "AI powered pharma CRM",
        "AI powered MR reporting system",
        "AI powered DCR automation",
        "AI powered sales reports",
    ]

    const rightFeatures = [
        "Geotagging and Geofencing",
        "Event management module",
        "Dynamic approach to data validation",
        "Auto assignment of master data to new MR",
        "Inventory management system",
        "Custom fare chart and automated expense",
        "Dynamic sample and POB management",
        "Cloud infrastructure",
    ]

    return (
        <>
            <div class="w-full bg-[radial-gradient(circle_at_30%_40%,#6B8FFF_0%,transparent_60%),radial-gradient(circle_at_70%_50%,#A78BFA_0%,transparent_60%),linear-gradient(180deg,#F9FAFB_0%,#FFFFFF_100%)]">
                <section className="standard py-[30px] sm:py-[50px] md:py-[100px] lg:py-[138px] mt-4 md:mt-5 lg:mt-10">
                    <div className="max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8">
                        {/* Main Heading */}
                        <div className="text-center mb-8 md:mb-12">
                            <h1 className="page-title text-black mb-[25px] md:mb-[40px] lg:mb-[65px]">
                                Why settle for basic or standard,
                                <br />
                                When you can have it all?
                            </h1>

                            {/* Pricing Button */}
                            <div className="mb-[8px] md:mb-[10px] lg:mb-[30px]">
                                <Link href="/contact">
                                    <button className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer">
                                        For just ₹ 349/ month*
                                    </button>
                                </Link>
                            </div>

                            <p className="text-gray-700 text-sm md:text-base">
                                Go Monthly, Quarterly, or Yearly – Same Price, All the Power.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="data-driven pb-[15px] md:pb-[61px] lg:pb-[220px]">
                    <div className="max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8">
                        {/* Value Proposition Section */}
                        <div className="bg-gradient-to-b from-[#CFD9F6] to-[#E3EFFF] lg:p-[40px] relative z-20 rounded-[20px]">
                            <div className="mb-6">
                                <p className="text-lg md:text-xl text-gray-800 mb-4">
                                    Making every decision <span className="bg-gradient-to-r from-[#D369AB] to-[#8717DC] bg-clip-text text-transparent">SMARTER</span>,{" "}
                                    <span className="bg-gradient-to-r from-[#D369AB] to-[#8717DC] bg-clip-text text-transparent">FASTER</span>, and{" "}
                                    <span className="bg-gradient-to-r from-[#D369AB] to-[#8717DC] bg-clip-text text-transparent">DATA-DRIVEN</span>.
                                </p>

                                <h2 className="text-[#1F2421]">
                                    Because we want you to tap into the limitless power of AI and unleash its true potential.
                                </h2>
                            </div>

                            {/* Hashtag Buttons */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <button className="border-[2px] border-solid border-transparent rounded-full px-6 py-2 font-bold text-black [border-image:linear-gradient(to_right,#2F82EF,#FF3B3B)_1]">
                                    #RxInteAI
                                </button>
                                <button className="border-[2px] rounded-full px-4 py-2 font-bold text-black [border-image:linear-gradient(to_right,#2F82EF,#FF3B3B)_1] inline-block">
                                    #Popular
                                </button>
                                <button className="border-[2px] rounded-full px-4 py-2 font-bold text-black [border-image:linear-gradient(to_right,#2F82EF,#FF3B3B)_1] inline-block">
                                    #AI
                                </button>
                            </div>

                            {/* Description */}
                            <p className="mb-[40px]">
                                RxIntel AI, developed by AI Santa, revolutionized pharmaceutical operations with intelligent, real-time
                                insights and AI-driven performance optimization, designed to elevate sales and maximize medical
                                representative (MR) potential. RxIntel AI empowers MRs with tailored, scientifically-backed product
                                knowledge, enabling them to connect with doctors more effectively and drive prescription growth.
                            </p>

                            {/* Pricing Tiers */}
                            <div className="border-t border-gray-300 pt-6">
                                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                                    No matter how you pay, you get the same unbeatable value
                                </h3>
                                <p className="text-gray-700 mb-2 font-medium">*one time installation</p>
                                <div className="flex flex-wrap gap-4 text-sm md:text-base text-gray-700">
                                    <span>1-50: ₹2199/user</span>
                                    <span>50-200: ₹1499/user</span>
                                    <span>200 & above: ₹999/user</span>
                                </div>
                            </div>
                        </div>
                        {/* 360° Solution Section */}
                        <div className="bg-black rounded-[20px] p-6 md:p-8 lg:p-12 relative z-30 top-[-18px]">
                            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#D369AB] to-[#8717DC]  font-bold mb-8 md:mb-12 text-center">
                                360° SOLUTION FOR PHARMA INDUSTRY</h2>

                            <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
                                {/* Left Column */}
                                <div className="space-y-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#6D91C7] rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D91C7] to-[#B9D3FB]  font-medium">{feature}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Right Column */}
                                <div className="space-y-4">
                                    {rightFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-2 h-2 bg-[#6D91C7] rounded-full mt-2 flex-shrink-0"></div>
                                            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D91C7] to-[#B9D3FB]  font-medium">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}
