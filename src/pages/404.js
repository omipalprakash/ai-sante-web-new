import Image from "next/image";
import Link from "next/link";

const Custom404 = () => {
    return (
        <section className="custom py-10 sm:py-14 lg:py-20">
            <div className="max-w-[1404px] mx-auto px-4 sm:px-6 md:px-8">
                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
                    <div className="flex-1 relative w-full min-h-[250px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[533px]">
                        <Image
                            src="/images/404-page.png"
                            alt="404 Error Illustration"
                            fill
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            style={{ objectFit: "contain", objectPosition: "center" }}
                            priority
                        />
                    </div>
                    {/* Text Section */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 font-['Erstoria',_sans-serif] text-[#453030]">
                            Oops, 1213<br />
                            <span className="text-[#203250]">nothing here...</span>
                        </h1>
                        <p className="text-gray-500 text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
                            Uh oh, we can&apos;t seem to find the page you&apos;re looking for.
                            Try going back to the previous page or contact us for more
                            information.
                        </p>
                        <Link
                            href="/"
                            className="inline-block w-full sm:w-auto cursor-pointer bg-black text-white text-sm sm:text-base lg:text-lg py-4 px-6 rounded font-semibold hover:bg-gray-800 transition active:bg-gray-600"
                        >
                            Go Back
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Custom404;
