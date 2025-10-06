import { ROIMETRICS_SECTION_DATA } from '@/lib/roi_constant';

export default function RoiMetricsTable() {
  return (
    <div className="overflow-x-auto py-10 px-4 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">
        ROI Metrics: Before vs. After AI SANTE
      </h2>
      <table className="max-w-7xl mx-auto border-collapse text-sm md:text-base rounded-xl overflow-hidden">
        <thead>
          <tr>
            <th className="bg-[#0F3F3C] text-white px-5 py-8 text-center rounded-tl-xl">
              Categories
            </th>
            <th className="bg-[#FFD233] text-[#0F3F3C] font-semibold px-5 py-8 text-center">
              Before AI SANTE
            </th>
            <th className="bg-[#0F3F3C] text-white px-5 py-8 text-center rounded-tr-xl">
              After AI SANTE Implementation
            </th>
          </tr>
        </thead>
        <tbody className="bg-white text-gray-800">
          {ROIMETRICS_SECTION_DATA.map((row, index, arr) => (
            <tr key={index} className="border-t border border-gray-500">
              <td className="px-5 py-8 font-medium border-r">{row.category}</td>
              <td className="px-5 py-8 border-r">{row.before}</td>
              <td className="px-5 py-8">{row.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
