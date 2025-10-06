"use client"
import Image from "next/image"
import styles from "./leaders.module.css"

const Slider = ({
    sliderIndex,
    images,
    duplicatedImages,
    isSliderPaused,
    isImageActive,
    handleImageHover,
    handleMouseLeave,
    containerClass,
}) => {
    const getSliderTrackClass = () => {
        const baseClass = styles.sliderTrack
        const directionClass = sliderIndex % 2 === 1 ? styles.moveUp : styles.moveDown
        const pausedClass = isSliderPaused(sliderIndex) ? styles.paused : ""
        return `${baseClass} ${directionClass} ${pausedClass}`.trim()
    }

    return (
        <div className={containerClass} onMouseLeave={handleMouseLeave}>
            <div className={getSliderTrackClass()}>
                {duplicatedImages.map((icon, index) => (
                    <div
                        key={index}
                        className={styles.slideImage}
                        onMouseEnter={() => handleImageHover(sliderIndex, index % images.length)}
                        style={{
                            opacity: isImageActive(sliderIndex, index % images.length) ? 1 : 0.6,
                        }}
                    >
                        <Image
                            src={icon?.src || "/placeholder.svg"}
                            alt={icon?.alt}
                            width={241}
                            height={291}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Slider
