import Breadcrumbs from '@/component/global/breadcrumbs';
import Image from 'next/image';
import { icons } from '@/utility/image';

const InfoCard = ({ HeaderText = '', content1 = '', content2 = '' }) => {
  return (
    <>
      <Breadcrumbs />
      <section className='mt-6'>
        <div className="container">
          <div className="flex flex-col-reverse p-[20px_32px] border-[2px] border-[#8DC385] rounded-[50px] gap-[10px] md:grid md:grid-cols-2 md:p-[40px] lg:p-[60px_66px]">
            <div className='content'>
              <h1 className="page-title font-['Erstoria',_sans-serif]  text-[#07531f] mb-2.5 md:mb-[26px] lg:mb-[39px]">{HeaderText}</h1>
              <div className='leading-[1.8]'>{content1}</div>
              <div className='leading-[1.8]'>{content2}</div>
            </div>
            <div className=''>
              <div className='relative'>
                <Image
                  src={icons.infoCardImage}
                  alt="infoCardImage"
                  layout="responsive"
                  width={800}
                  height={600}
                />
                <Image
                  src={icons.macbookpro}
                  alt="macbookpro"
                  width={500}
                  height={500}
                  className="absolute w-[70%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoCard;
