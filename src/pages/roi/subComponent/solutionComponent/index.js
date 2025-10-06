import { icons } from '@/utility/image';
import Image from 'next/image';

export default function AISanteSolutions() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold text-gray-900">
            The AI SANTE Solution Framework
          </h3>
          <p className="text-gray-500 mt-2 text-base">
            AI SANTE addresses these challenges with four key solutions:
          </p>
        </div>

        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-6 mb-6">
          {/* Flex 3 */}
          <div className="flex-[3] bg-[#F8F9FA] border border-gray-200 p-4 rounded-3xl shadow-md relative group overflow-hidden">
            <h4 className="text-xl font-semibold text-[#0F3F3C] mb-3">
              RxIntel AI (Pharma CRM)
            </h4>
            <div className="relative w-full h-48 md:h-60 rounded-2xl overflow-hidden group">
              <Image
                src={icons.solution1}
                alt="RxIntel"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 z-10 bg-white bg-opacity-90 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-left rounded-2xl shadow-md">
                <ul className="list-disc space-y-2 text-sm">
                  <li><span className="font-medium">AI-powered MR reporting</span>, doctor call tracking & performance analytics</li>
                  <li>Real-time goal tracking (<span className="font-medium">Goal Bot</span>) and prescription mapping (<span className="font-medium">Prescription Bot</span>)</li>
                  <li>Automated DCR, CME, and compliance workflows</li>
                </ul>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-20">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow">
                <span className="text-xl">↗</span>
              </div>
            </div>
          </div>

          {/* Flex 1 */}
          <div className="flex-[1] bg-[#F8F9FA] border border-gray-200 p-4 rounded-3xl shadow-md relative group overflow-hidden">
            <h4 className="text-xl font-semibold text-[#0F3F3C] mb-3">HRMS</h4>
            <div className="relative w-full h-48 md:h-60 rounded-2xl overflow-hidden group">
              <Image
                src={icons.solution2}
                alt="HRMS"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 z-10 bg-white bg-opacity-90 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-left rounded-2xl shadow-md">
                <ul className="list-disc space-y-2 text-sm">
                  <li>Smart payroll, leave & performance management</li>
                  <li>Employee self-service portal and attendance tracking</li>
                  <li>Automated onboarding and HR policy access</li>
                </ul>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-20">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow">
                <span className="text-xl">↗</span>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Flex 1 */}
          <div className="flex-[1] bg-[#F8F9FA] border border-gray-200 p-4 rounded-3xl shadow-md relative group overflow-hidden">
            <h4 className="text-xl font-semibold text-[#0F3F3C] mb-3">SalesBot</h4>
            <div className="relative w-full h-48 md:h-60 rounded-2xl overflow-hidden group">
              <Image
                src={icons.solution3}
                alt="SalesBot"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 z-10 bg-white bg-opacity-90 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-left rounded-2xl shadow-md">
                <ul className="list-disc space-y-2 text-sm">
                  <li>Sales pipeline visibility and revenue forecasting</li>
                  <li>Territory-wise performance tracking and target setting</li>
                  <li>Instant insights for actionable follow-ups</li>
                </ul>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-20">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow">
                <span className="text-xl">↗</span>
              </div>
            </div>
          </div>

          {/* Flex 3 */}
          <div className="flex-[3] bg-[#F8F9FA] border border-gray-200 p-4 rounded-3xl shadow-md relative group overflow-hidden">
            <h4 className="text-xl font-semibold text-[#0F3F3C] mb-3">DoctorBot</h4>
            <div className="relative w-full h-48 md:h-60 rounded-2xl overflow-hidden group">
              <Image
                src={icons.solution4}
                alt="DoctorBot"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 z-10 bg-white bg-opacity-90 text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-left rounded-2xl shadow-md">
                <ul className="list-disc space-y-2 text-sm">
                  <li>24/7 doctor engagement with AI chat interface</li>
                  <li>Personalized content delivery & follow-up reminders</li>
                  <li>Real-time product feedback & interaction logging</li>
                </ul>
              </div>
            </div>
            <div className="absolute top-4 right-4 z-20">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center shadow">
                <span className="text-xl">↗</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
