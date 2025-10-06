import React from 'react';
import ArrowIcon from '../../../public/images/icons/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import { cardData, getColorClasses } from './constants';

const ProductNav = ({ onLinkClick }) => {
  return (
    <div className="w-full z-50 ">
      <div className="bg-white rounded-xl p-2 md:p-3 shadow flex flex-col lg:flex-row justify-between gap-3 sm:gap-4 md:gap-5 lg:gap-6 mx-auto">
        {cardData.map((card, i) => {
          const colorClasses = getColorClasses(card.color);
          return (
            <div
              key={i}
              className={`flex-1 ${
                i !== cardData.length - 1
                  ? 'lg:border-r border-b lg:border-b-0 border-gray-100 pb-3 lg:pb-0'
                  : ''
              } pr-2 sm:pr-3 md:pr-4 hover:bg-gray-50 transition-all duration-200 rounded-lg p-2 `}
            >
              <div className="flex items-center gap-1 mb-1 sm:mb-2">
                <span
                  className={`w-2 h-2 sm:w-3 sm:h-3 ${colorClasses.dot} rounded-full`}
                ></span>
                <span
                  className={`${colorClasses.badge} font-semibold rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm`}
                >
                  {card.title}
                </span>
              </div>
              <h2 className="mega-menu-title">{card.subtitle}</h2>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {card.items.map((item, j) => (
                  <div key={j}>
                    <Link
                      href={item.url || '#'}
                      className="block"
                      onClick={onLinkClick}
                    >
                      <div className="flex justify-between items-start p-1.5 sm:p-2 hover:bg-gray-100 rounded-md transition-all duration-200 cursor-pointer group">
                        <div className="max-w-[85%]">
                          <h3 className="menu-link">{item.name}</h3>
                          <p className="hidden md:block text-xs sm:text-sm text-gray-500 line-clamp-2 sm:line-clamp-none">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <Image
                            src={ArrowIcon}
                            alt="arrow"
                            className="text-gray-400 group-hover:text-sky-500 transform rotate-[-90deg] group-hover:rotate-0 transition-all duration-300 w-2 sm:w-2.5"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductNav;
