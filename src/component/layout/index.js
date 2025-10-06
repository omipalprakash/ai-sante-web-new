import useAos from '@/hooks/useAos';
import React, { useEffect, useState } from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import Breadcrumbs from '../global/breadcrumbs';
import ClickSpark from '../clickEffect';
import { usePathname } from 'next/navigation';
import BackToTop from '../back-to-top';

const Layout = ({ children }) => {
  useAos();
  const pathname = usePathname();
  const [showBreadcrumb, setShowBreadcrumb] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (pathname === '/blogs') {
      setShowBreadcrumb(false);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <ClickSpark
        sparkColor="rgb(211, 105, 171)"
        sparkSize={10}
        sparkRadius={25}
        sparkCount={10}
        duration={500}
        easing="ease-out"
        extraScale={1.1}
      >
        {/* h-14 md:h-[89px] xl:h-[88px] */}
        <header
          className={`sticky top-0 py-4 md:py-6 bg-[#F5F5F5] xl:py-5 z-[1000] transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-none'
            }`}
        >
          <Navbar />
        </header>

        <main className="w-full">
          {/* {
            showBreadcrumb && (
              <Breadcrumbs />
            )
          } */}
          {children}
        </main>

        <Footer />
        <BackToTop />
      </ClickSpark>
    </div>
  );
};

export default Layout;
