'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import ProductNav from './productNav';
import ResourcesNav from './resourcesNav';
import ArrowIcon from '../../../public/images/icons/arrow.svg';
import menu from '../../../public/images/icons/menu.svg';
import { icons } from '@/utility/image';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  const productRef = useRef(null);
  const productNavRef = useRef(null);
  const resourcesRef = useRef(null);
  const resourcesNavRef = useRef(null);
  const mobileProductRef = useRef(null);
  const mobileResourcesRef = useRef(null);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleMobileProduct = () =>
    setIsMobileProductOpen(!isMobileProductOpen);
  const toggleMobileResources = () =>
    setIsMobileResourcesOpen(!isMobileResourcesOpen);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productRef.current &&
        !productRef.current.contains(event.target) &&
        productNavRef.current &&
        !productNavRef.current.contains(event.target)
      ) {
        setIsProductOpen(false);
      }

      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target) &&
        resourcesNavRef.current &&
        !resourcesNavRef.current.contains(event.target)
      ) {
        setIsResourcesOpen(false);
      }

      if (
        mobileProductRef.current &&
        !mobileProductRef.current.contains(event.target)
      ) {
        setIsMobileProductOpen(false);
      }

      if (
        mobileResourcesRef.current &&
        !mobileResourcesRef.current.contains(event.target)
      ) {
        setIsMobileResourcesOpen(false);
      }
    };

    if (
      isProductOpen ||
      isResourcesOpen ||
      isMobileProductOpen ||
      isMobileResourcesOpen
    ) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [
    isProductOpen,
    isResourcesOpen,
    isMobileProductOpen,
    isMobileResourcesOpen,
  ]);

  return (
    <div className="bg-[#F5F5F5]">
      <div className='container'>
        <nav className={styles.navbar}>

          <div className={styles.headerlogo}>
            <Link href="/" className={styles.logo}>
              <Image
                src={icons.aiSanteLogo}
                alt="AI Sante Logo"
                width={193}
                height={48}
                className={styles.logoImg}
              />
            </Link>
          </div>

          <div className={styles.menu}>
            <ul className={styles.navLinks}>
              <li
                className={styles.navItem}
                onMouseEnter={() => setIsProductOpen(true)}
                onMouseLeave={() => setIsProductOpen(false)}
                ref={productRef}
                onClick={() => setIsProductOpen(false)}
              >
                <Link href="#">
                  Product{' '}
                  <Image
                    src={ArrowIcon}
                    alt="ArrowIcon"
                    className={styles.arrowIcon}
                  />
                </Link>
                {isProductOpen && (
                  <div className={styles.productPopup} ref={productNavRef}>
                    <ProductNav />
                  </div>
                )}
              </li>
              <li
                className={styles.navItem}
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
                ref={resourcesRef}
                onClick={() => setIsResourcesOpen(false)}
              >
                <Link href="#">
                  Resources{' '}
                  <Image
                    src={ArrowIcon}
                    alt="ArrowIcon"
                    className={styles.arrowIcon}
                  />
                </Link>
                {isResourcesOpen && (
                  <div className={styles.resourcesPopup} ref={resourcesNavRef}>
                    <ResourcesNav />
                  </div>
                )}
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
            </ul>
          </div>

          <div className={styles.contactButtons}>
            <Link href="/contact" className={styles.contactLink}>
              Contact Sales
            </Link>
            <div className={styles.menuIcon} onClick={toggleDrawer}>
              {isDrawerOpen ? (
                '✕'
              ) : (
                <Image src={menu} alt="MenuIcon" />
              )}
            </div>
          </div>

          {isDrawerOpen && (
            <div className={styles.drawer}>
              <ul>
                <li ref={mobileProductRef}>
                  <div
                    className={styles.mobileProductNav}
                    onClick={toggleMobileProduct}
                  >
                    Product{' '}
                    <Image
                      src={ArrowIcon}
                      alt="ArrowIcon"
                      className={styles.arrowIcon}
                    />
                  </div>
                  {isMobileProductOpen && (
                    <div className={styles.mobileProductPopup}>
                      <ProductNav
                        onLinkClick={() => {
                          setIsMobileProductOpen(false);
                          closeDrawer();
                        }}
                      />
                    </div>
                  )}
                </li>
                <li ref={mobileResourcesRef}>
                  <div
                    className={styles.mobileProductNav}
                    onClick={toggleMobileResources}
                  >
                    Resources{' '}
                    <Image
                      src={ArrowIcon}
                      alt="ArrowIcon"
                      className={styles.arrowIcon}
                    />
                  </div>
                  {isMobileResourcesOpen && (
                    <div className={styles.mobileProductPopup}>
                      <ResourcesNav
                        onLinkClick={() => {
                          setIsMobileResourcesOpen(false);
                          closeDrawer();
                        }}
                      />
                    </div>
                  )}
                </li>
                <li onClick={closeDrawer}>
                  <Link href="/pricing">Pricing </Link>
                </li>
                <li onClick={closeDrawer} className={styles.contactLink}>
                  <Link href="/contact">Contact Sales</Link>
                </li>
              </ul>
            </div>
          )}

        </nav>
      </div>
    </div >
  );
};

export default Navbar;
