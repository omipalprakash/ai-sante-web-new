"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Slider from "./slider"
import LeadersSlider from "../silk/LeadersSlider"
import styles from "./leaders.module.css"
import { icons } from "@/utility/image"

const profiles = [
    // {
    //     name: "Bharat Solanki",
    //     position: "Director",
    //     company: "BiosLab",
    //     testimonial:
    //         "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    //     image: "/placeholder.svg?height=80&width=80",
    // },
    {
        name: "Sarah Chen",
        position: "CEO",
        company: "TechFlow",
        testimonial:
            "Working with this team has been transformative for our business. Their innovative approach and dedication to excellence is unmatched.",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        name: "Michael Rodriguez",
        position: "CTO",
        company: "DataSync",
        testimonial:
            "The level of expertise and professionalism demonstrated throughout our project exceeded all expectations.",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        name: "Emily Johnson",
        position: "Founder",
        company: "GreenTech",
        testimonial:
            "Their strategic insights and technical capabilities have been instrumental in scaling our operations globally.",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        name: "David Park",
        position: "VP Engineering",
        company: "CloudBase",
        testimonial:
            "Outstanding service delivery and innovative solutions that have revolutionized our workflow processes.",
        image: "/placeholder.svg?height=80&width=80",
    },
    {
        name: "Lisa Wang",
        position: "Product Manager",
        company: "InnovateLab",
        testimonial:
            "The collaboration was seamless and the results speak for themselves. Highly recommend their services.",
        image: "/placeholder.svg?height=80&width=80",
    },
]

const Leaders = () => {
    const [activeProfile, setActiveProfile] = useState(0)
    const [hoveredImage, setHoveredImage] = useState({ slider: null, index: null })
    const [hoveredSlider, setHoveredSlider] = useState(null)

    const sliderData = [
        [
            { src: icons.ghibliOne, alt: 'Smiling man in tropical shirt' },
            { src: icons.ghibliTwo, alt: 'Focused businessman with document' },
            { src: icons.ghibliThree, alt: 'Happy man in office' },
            { src: icons.ghibliFour, alt: 'Woman in lab with beaker' }
        ],
        [
            { src: icons.ghibliFive, alt: 'Young man in field' },
            { src: icons.ghibliSix, alt: 'Elderly man giving thumbs up' },
            { src: icons.ghibliSeven, alt: 'Placeholder image' },
            { src: icons.ghibliThree, alt: 'Happy man in office' }
        ],
        [
            { src: icons.ghibliOne, alt: 'Smiling man in tropical shirt' },
            { src: icons.ghibliTwo, alt: 'Focused businessman with document' },
            { src: icons.ghibliThree, alt: 'Happy man in office' },
            { src: icons.ghibliFour, alt: 'Woman in lab with beaker' }
        ],
        [
            { src: icons.ghibliFive, alt: 'Young man in field' },
            { src: icons.ghibliSix, alt: 'Elderly man giving thumbs up' },
            { src: icons.ghibliSeven, alt: 'Young boy in doorway' },
            { src: icons.ghibliThree, alt: 'Happy man in office' }
        ],
        [
            { src: icons.ghibliOne, alt: 'Smiling man in tropical shirt' },
            { src: icons.ghibliTwo, alt: 'Focused businessman with document' },
            { src: icons.ghibliThree, alt: 'Happy man in office' },
            { src: icons.ghibliFour, alt: 'Woman in lab with beaker' }
        ]
    ];


    const duplicatedData = sliderData.map((images) => [...images, ...images, ...images])

    const handleImageHover = (sliderIndex, imageIndex) => {
        setHoveredSlider(sliderIndex)
        setHoveredImage({ slider: sliderIndex, index: imageIndex })
        setActiveProfile((sliderIndex + imageIndex) % profiles.length)
    }

    const handleMouseLeave = () => {
        setHoveredSlider(null)
        setHoveredImage({ slider: null, index: null })
    }

    const isImageActive = (sliderIndex, imageIndex) => {
        return hoveredImage.slider === sliderIndex && hoveredImage.index === imageIndex
    }

    const isSliderPaused = (sliderIndex) => {
        return hoveredSlider === sliderIndex
    }

    const getContainerClass = (index) => {
        if (index === 0 || index === 4) return `${styles.sliderContainer} ${styles.first}`
        if (index === 2) return `${styles.sliderContainer} ${styles.middle}`
        return `${styles.sliderContainer} ${styles.other}`
    }

    return (
        <section className={styles.leadersSection}>
            <div className="container">

                {/* Desktop and Tablet Slider Grid */}
                <div className={styles.desktopOnly}>
                    <div className={styles.sliderGrid}>
                        {sliderData.map((images, index) => (
                            <Slider
                                key={index}
                                sliderIndex={index}
                                images={images}
                                duplicatedImages={duplicatedData[index]}
                                isSliderPaused={isSliderPaused}
                                isImageActive={isImageActive}
                                handleImageHover={handleImageHover}
                                handleMouseLeave={handleMouseLeave}
                                containerClass={getContainerClass(index)}
                            />
                        ))}
                    </div>

                    {/* Testimonial Content for Desktop/Tablet */}
                    <div className={styles.testimonialContent}>
                        <div className={styles.testimonialCard}>
                            <div className="section-topTitle mb-[22px] lg:mb-[31px]">testimonial</div>
                            <h2 className="font-['Erstoria',_sans-serif] text-[#453030]">
                                Trusted By Leaders <br />
                                From various Industries
                            </h2>
                            <p className="paragraph">{profiles[activeProfile].testimonial}</p>
                            <div className={styles.profileSection}>
                                <h3 className={`styles.profileName font-['Erstoria',_sans-serif mb-2 font-bold text-[#000000]`}>{profiles[activeProfile].name}</h3>
                                <p className={`${styles.profilePosition}`}>{profiles[activeProfile].position}</p>
                            </div>
                            {/* <div className={styles.companyLogo}>
                                <Image
                                    src={icons.BiosLab || "/placeholder.svg"}
                                    alt="BiosLab"
                                    width={148}
                                    height={46}
                                />
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Mobile Slider */}
                <div className={styles.mobileOnly}>
                    <LeadersSlider />
                </div>
            </div>
        </section>
    )
}

export default Leaders
