import React from 'react';
import ArrowIcon from "../../../public/images/icons/arrow.svg";
import Image from 'next/image';
import Link from 'next/link';
import { resourceItems } from './constants';

const ResourcesNav = ({ onLinkClick }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <div className="flex flex-col">
        {resourceItems.map((item, index) => (
          <Link
            key={index}
            href={item.url || '#'}
            onClick={onLinkClick}
          >
            <div
              className="py-3 hover:bg-gray-50 transition-all duration-200 rounded-lg p-2 cursor-pointer group"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="mega-menu-title">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    src={ArrowIcon}
                    className="text-gray-400 group-hover:text-sky-500 transform group-hover:translate-x-1 transition-all duration-300 w-3.5"
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourcesNav;
