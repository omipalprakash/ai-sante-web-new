'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { icons } from '@/utility/image';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  if (pathname === '/' || pathname === '/contact') return null;

  const pathSegments = pathname?.split('/')?.filter((seg) => seg);

  const breadcrumbs = pathSegments?.map((segment, index) => {
    let href = '/' + pathSegments.slice(0, index + 1).join('/');
    if (segment.toLowerCase() === 'blog') href = '/#stories';
    const label = decodeURIComponent(segment).replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return { href, label, segment };
  });

  const isBlogPage = pathname?.startsWith('/blog');

  const handleHomeHashClick = (e, href) => {
    if (!href || !href.startsWith('/#')) return;

    // अगर पहले से homepage पर हैं, तो सिर्फ smooth-scroll करें
    if (pathname === '/') {
      e.preventDefault();
      const id = href.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', href);
      } else {
        // fallback navigation
        router.push(href);
      }
      return;
    }

    // अगर किसी और page पर हैं: navigate to the anchor URL directly (no .then())
    e.preventDefault();
    router.push(href); // router.push('/#stories') works; no .then()

    // कुछ environments में anchor पर तुरंत scroll नहीं होता — इसलिए small timeout में try करके smooth scroll कर देते हैं
    // adjust timeout (200-600ms) अगर आपका homepage heavy है
    const id = href.split('#')[1];
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        try {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', href);
        } catch (err) {
          // ignore if fails
        }
      }
    }, 250);
  };

  return (
    <div className="container">
      <nav className={`flex items-center gap-2.5 ${isBlogPage ? 'mt-4 md:mt-5 lg:mt-10' : 'mt-4 md:mt-5 lg:mt-10'}`}>
        <Link href="/" className="inline-flex items-center space-x-1 hover:text-black">
          <Image src={icons.homeicon} alt="home_Icon" width={20} height={20} />
          <span className="hidden sm:inline self-end">Home</span>
        </Link>

        {breadcrumbs?.map((crumb, index) => (
          <React.Fragment key={index}>
            <span>
              <Image src={icons.breadcrumbrightarrow} alt="breadcrumbrightarrow" width={20} height={20} />
            </span>

            <Link
              href={crumb.href}
              onClick={(e) => handleHomeHashClick(e, crumb.href)}
              className="hover:text-black capitalize"
              style={{ fontWeight: pathname === crumb?.href ? 'bold' : 'normal' }}
            >
              {crumb.label}
            </Link>
          </React.Fragment>
        ))}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
