import { icons } from '@/utility/image';
import Image from 'next/image';

export default function RealWorldImpact() {
    return (
        <div className='bg-white'>
            <section className="max-w-7xl mx-auto px-4 md:px-12 py-10 ">


                <div className="flex flex-col md:flex-row gap-8 items-stretch">
                    {/* Left Side - Before & After */}
                    <div className="flex flex-col gap-6 md:w-1/2">
                        {/* Before AI SANTE */}
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden">
                            {/* Background Image */}
                            <Image
                                src={icons.before} // ⬅️ Your image filename (place in public/)
                                alt="Before AI SANTE Background"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-center text-[#3E4C1F]">
                                <h3 className="text-xl md:text-2xl font-bold mb-4">Before AI SANTE:</h3>
                                <ul className="list-disc list-inside text-sm md:text-base space-y-2">
                                    <li>Manual daily call reporting</li>
                                    <li>Limited MR accountability</li>
                                    <li>Ineffective training & weak HCP engagement</li>
                                </ul>
                            </div>
                        </div>
                        {/* After AI SANTE */}
                        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden">
                            {/* Background Image */}
                            <Image
                                src={icons.after} // ⬅️ Your image filename (place in public/)
                                alt="Before AI SANTE Background"
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-center text-[#3E4C1F]">
                                <h3 className="text-xl md:text-2xl font-bold mb-4">After AI SANTE:</h3>
                                <ul className="list-disc list-inside text-sm md:text-base space-y-2">
                                    <li>40% increase in call coverage</li>
                                    <li>50% faster reporting turnaround</li>
                                    <li>2x engagement via DoctorBot</li>
                                    <li>Real-time learning via Sci-Coach AI</li>
                                    <li>Net ROI Increase: 62% within 6 months</li>
                                </ul>
                            </div> 
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="md:w-1/2 rounded-2xl overflow-hidden">
                        <h2 className="text-5xl font-normal text-center md:text-left text-[#0F3F3C] mb-6 font-[Erstoria]">
                            Real-World Impact
                        </h2>
                        <p className="font-semibold text-lg mb-6 text-center md:text-left font-[Salmond]">
                            <span className="text-[#0F3F3C]">Client:</span> Mid-size Pharma Company with 80 MRs
                        </p>
                        <div className="relative w-full h-72 md:h-full rounded-2xl">
                            <Image
                                src={icons.realWorld} // Replace with your actual image path
                                alt="Real World Impact Presentation"
                                fill
                                style={{ objectFit: 'cover' }}
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
