import { icons } from '@/utility/image';
import Image from 'next/image';

export default function HeroComponent() {
    return (
        <section className="w-full bg-white px-4 py-16 md:px-10 lg:px-20 min-h-[70vh]">
            <div className="max-w-[1440px] p-10 mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
                {/* Left Content */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-normal text-[#002924] leading-tight mb-6 font-[Erstoria]">
                        Maximize Your ROI <br /> with AI SANTE
                    </h1>
                    <p className="text-lg text-[#002924] font-medium mb-6 fonr-[Salmond]">
                        Empowering Pharma Businesses with AI-Driven Efficiency,<br />
                        Automation & Growth
                    </p>
                    <button className="bg-[#184E45] text-white px-6 py-3 text-base rounded-md shadow hover:bg-[#123c34] transition">
                        Download now
                    </button>
                </div>

                {/* Right Image */}
                <div className="flex-1 w-full max-w-md mx-auto">
                    <Image
                        src={icons.heroImage} // Replace with your actual image path
                        alt="AI Sante Illustration"
                        width={500}
                        height={500}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
