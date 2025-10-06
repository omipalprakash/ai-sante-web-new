import Image from 'next/image';
import styles from './aboutus.module.css';
import { images } from './constants';

const Aboutus = () => {
  return (
    <section className={`${styles.content_wrapper} bg-[#F5F5F5] `} aria-label="About Us">
      <div className="container">
        <div className={styles.content_box}>
          {/* Left Images */}
          <div className={`${styles.image_column}  mb-16 md:mb-0`}>
            <div className={`${styles.image_container} ${styles.image_container_1}`}>
              <Image
                src={images[0]}
                alt="Team collaborating around a laptop in a modern office"
                fill
                sizes="(max-width: 768px) 100vw, 150px"
                className={styles.vintage_image}
                priority
              />
            </div>
            <div className={`${styles.image_container} ${styles.image_container_2}`}>
              <Image
                src={images[1]}
                alt="Business meeting with team members seated around a conference table"
                fill
                sizes="(max-width: 768px) 100vw, 150px"
                className={styles.vintage_image}
              />
            </div>
          </div>

          {/* Center Text */}
          <div className={`${styles.text_column} mb-6 md:mb-0 `}>
            <h2 className="mb-4 font-['Erstoria',_sans-serif] text-[#453030]" data-aos="fade-down">ABOUT US</h2>
            <p className="paragraph" data-aos="fade-up">
              AI SANTE is creating custom AI solutions for today's dynamic businesses. Our innovative suite—RxIntel AI (AI MR Reporting System), AI Service Desk, AI HRMS, and the Doctor ChatBot —are designed to streamline operations, boost productivity, and enable data-driven decision-making.
            </p>
          </div>

          {/* Right Images */}
          <div className={`${styles.image_column} ${styles.image_max}`}>
            <div className={`${styles.image_container} ${styles.image_container_3}`}>
              <Image
                src={images[2]}
                alt="Group discussion with team members reviewing documents in an office"
                fill
                sizes="(max-width: 768px) 100vw, 150px"
                className={styles.vintage_image}
              />
            </div>
            <div className={`${styles.image_container} ${styles.image_container_4}`}>
              <Image
                src={images[3]}
                alt="Manager mentoring two colleagues over a report in a workplace setting"
                fill
                sizes="(max-width: 768px) 100vw, 150px"
                className={styles.vintage_image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
