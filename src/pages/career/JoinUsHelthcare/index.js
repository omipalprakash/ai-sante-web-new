import { icons } from '@/utility/image';
import Link from 'next/link';

export default function JoinUsHelthcare() {
  return (
    <section className="join mt-[20px] md:mt-[40px]">
      <div className='container'>
        <div className="w-full bg-no-repeat bg-cover bg-center flex justify-center items-center h-[205px] md:h-[424px] lg:h-[648px] flex-col" style={{ backgroundImage: `url(${icons.JoinUsHelthcare})` }}>
          <div className="flex-1 flex items-center justify-center mx-auto w-full">
            <div className="text-center mt-0 md:mt-8">
              <h1 className="text-goldenBrown page-title">
                Small Team with a <br />Big Impact! Join us to  Shape <br /> the Future of Pharma Selling and Tracking
              </h1>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-auto mb-0 md:mb-[58px]">
            <Link href="/career-details">
              <button className="bg-[#C37A20] text-white font-[500] py-3 px-5  text-[13px] sm:text-[14px] md:text-[16px] transition duration-200 cursor-pointer  hover:text-blue-600 hover:bg-[#453030] border-2 border-transparent rounded-[40px]">
                See open roles ➜
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
