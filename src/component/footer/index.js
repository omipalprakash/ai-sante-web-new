import Image from 'next/image';
import { icons } from '@/utility/image';
import { getCurrentYear } from '@/utility/commonFunctions';
import Link from 'next/link';


export default function Footer() {
  return (

    <footer className="footer bg-[#F5F5F5]  w-full py-[30px]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-[29px]">
              <Link href="/">
                <Image src={icons.aiSanteLogo} alt="AI Sante Logo" width={193} height={48} />
              </Link>
            </div>
            <p className='leading-[1.5]'>
              Next - Gen Pharma CRM - Optimize sales, automate reporting. Make smarter decision with RxIntel AI.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="text-[#000000]  mb-6">COMPANY</h5>
            <div className="flex gap-6">
              <ul className="flex gap-[14px] flex-col">
                <li><Link href="/" className='hover:text-cocoa'>Home</Link></li>
                <li><Link href="/chemist-bot" className='hover:text-cocoa'>Products</Link></li>
                {/* <li><Link href="/">Testimonial</Link></li> */}
                {/* <li><Link href="/">About Us</Link></li> */}
              </ul>
              <ul className="space-y-2">
                {/* <li><Link href="/" className='hover:text-cocoa'>Awards</Link></li> */}
                <li><Link href="/#stories" className='hover:text-cocoa'>Blog</Link></li>
                {/* <li><Link href="/" className='hover:text-cocoa'>Get Demo</Link></li> */}
              </ul>
            </div>
          </div>

          {/* Help Links */}
          <div>
            <h5 className="text-[#000000] mb-6">HELP</h5>
            <ul className="flex gap-[14px] flex-col">
              {/* <li><Link href="/">Customer Support</Link></li> */}
              {/* <li><Link href="/">Terms & Conditions</Link></li> */}
              <li>
                <Link href={'/privacy-policy'} className='hover:text-cocoa'>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col items-start lg:items-end max-w-[100%]  lg:max-w-[305px]'>
            <h5 className="text-[#000000]  mb-6 text-left min-w-[50%]">CONTACT</h5>
            <ul className="flex gap-[14px] flex-col">
              <li className="flex items-center space-x-2">
                <Image src={icons.phone} alt="phone" width={20} height={20} />
                <Link href="tel:+918849791120"><span>+91 8849791120</span></Link>
              </li>
              <li className="flex items-center space-x-2">
                <Image src={icons.email} alt="email" width={20} height={20} />
                <Link href="mailto:info@aisante.in" className='hover:text-cocoa'><span>info@aisante.in</span></Link>
              </li>
              <li className="flex gap-[14px]">
                <Link href="https://x.com/ai_sante" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={icons.twitter}
                    alt="twitter"
                    width={26}
                    height={26}
                    className="transition-transform duration-300 hover:scale-110 hover:opacity-80"
                  />
                </Link>

                <Link href="https://www.facebook.com/AiSanteOfficial" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={icons.facebook}
                    alt="facebook"
                    width={26}
                    height={26}
                    className="transition-transform duration-300 hover:scale-110 hover:opacity-80"
                  />
                </Link>

                <Link href="https://www.instagram.com/aisante__/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={icons.instagram}
                    alt="instagram"
                    width={26}
                    height={26}
                    className="transition-transform duration-300 hover:scale-110 hover:opacity-80"
                  />
                </Link>

                <Link href="https://www.linkedin.com/company/ai-sante/" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={icons.linkedin}
                    alt="linkedin"
                    width={26}
                    height={26}
                    className="transition-transform duration-300 hover:scale-110 hover:opacity-80"
                  />
                </Link>
              </li>

            </ul>
          </div>
        </div>

        <div className="text-center text-[14px]  border-[#E2E8F0] mt-10 border-t pt-9 bo">
          © Copyright {getCurrentYear()}, All Rights Reserved by Aisante
        </div>
      </div>
    </footer>

  );
}
