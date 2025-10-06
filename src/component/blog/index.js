"use client"
import Slider from "react-slick"
import Image from "next/image"
import { icons } from "@/utility/image"
import { BLOG_DATA } from "./constants"
import Link from "next/link"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useRef } from "react"

const Blog = () => {
  const desktopSliderRef = useRef()
  const mobileSliderRef = useRef()

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="flex flex-col gap-4 md:gap-[30px] lg:gap-[50px]" id="stories">
      <h2 className="text-left sm:text-center font-['Erstoria',_sans-serif] text-[#453030]" data-aos="fade-down">
        Inside Design: Blog and Interviews
      </h2>

      {/* 🖥️ Desktop Layout */}
      <div className="hidden lg:block relative pb-4">
        <Slider
          {...{
            dots: false,
            arrows: false,
            infinite: BLOG_DATA.length > 4,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
          }}
          ref={desktopSliderRef}
        >
          {BLOG_DATA.map((item, index) => (
            <div key={index} className="px-3 h-full">
              <div className="flex flex-col bg-[#F8F6F9] rounded-2xl shadow-sm p-4 h-full min-h-[480px]">
                {/* Image */}
                <div className="relative w-full aspect-[320/260] mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>

                {/* Author & Date */}
                <div className="flex items-center gap-2 text-sm text-black mb-2">
                  <span>{item.name}</span>
                  <Image src={icons.blackSmallDot || "/placeholder.svg"} alt="dot" width={6} height={6} />
                  <span>{item.date}</span>
                </div>

                {/* Title */}
                <h3 className="uppercase text-black text-[20px] leading-6 font-salmond font-normal">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mt-2">{item.content.split(" ").slice(0, 13).join(" ") + "..."}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 my-3">
                  {item.tags.map((tag, idx) => (
                    <div key={idx} className={`flex items-center gap-2 text-sm text-black`}>
                      {tag}
                      {idx !== item.tags.length - 1 && (
                        <Image src={icons.blackSmallDot || "/placeholder.svg"} alt="dot" width={5} height={5} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Read More Button */}
                <Link
                  href={`/blog/${item.slug}`}
                  className="mt-auto w-full py-2 rounded-xl bg-[#453030] text-white font-medium hover:bg-[#5a4242] transition inline-block text-center"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* 📱 Mobile Layout */}
      <div className="relative block lg:hidden">
        <Slider {...sliderSettings} ref={mobileSliderRef}>
          {BLOG_DATA.map((item, index) => (
            <div key={index} className="px-2 h-full">
              <div className="flex flex-col bg-white rounded-2xl shadow-sm p-4 h-full min-h-[480px]">
                <div className="relative w-full aspect-[547/410] mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="rounded-md object-cover"
                    priority
                  />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-black">{item.name}</span>
                  <Image src={icons.blackSmallDot || "/placeholder.svg"} alt="dot" width={6} height={6} />
                  <span className="text-black">{item.date}</span>
                </div>

                <h4 className="uppercase text-black">{item.title}</h4>

                <p className="text-sm text-gray-600 mt-2">{item.content.split(" ").slice(0, 13).join(" ") + "..."}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag, idx) => (
                    <div key={idx} className={`flex items-center gap-2 text-black`}>
                      {tag}
                      {idx !== item.tags.length - 1 && (
                        <Image src={icons.blackSmallDot || "/placeholder.svg"} alt="dot" width={6} height={6} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Read More Button */}
                <Link
                  href={`/blog/${item.slug}`}
                  className="mt-auto w-full py-2 rounded-xl bg-[#453030] text-white font-medium hover:bg-[#5a4242] transition text-center"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Blog
