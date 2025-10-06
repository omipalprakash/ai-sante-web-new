'use client';

import { icons } from '@/utility/image';
import Image from 'next/image';
import styles from './wordFromCeoSection.module.css';
// import Signature from '@/component/icons/signature';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function WordsFromCEO() {
  const sentence = `At AI SANTE, we don’t just deliver solutions—we co-create success. Our mission is to empower your business through intelligent automation, thoughtful innovation, and human-centric design. Together, we’ll redefine what’s possible, turning challenges into opportunities and ideas into impact. With AI by your side, your future isn’t just imagined—it’s engineered.`;

  const textContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (

    <section className={styles.description}>
      <div className='container'>
        <motion.div
          className={styles.description__content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Text Section */}
          <motion.div
            className={styles.description__left}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="hidden md:block font-['Erstoria',_sans-serif] text-[#453030]">A Few Words From Our CEO</h2>

            <motion.div
              className="paragraph"
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {sentence.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  className="whitespace-pre-wrap"
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                className="inline-block w-[1px] bg-black ml-[1px] h-[1.2em] align-bottom"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </motion.div>
            <div className={`mt-[10px] lg:mt-[40px] xl:mt-[53px] border-b-2 border-black-200 max-w-sm ${styles.description__signature}`}>
              {/* <Signature /> */}
            </div>

            <div className="m-0 mt-2" style={{ fontFamily: 'Poppins' }}>
              <div className="m-0">Vidisha Joshi</div>
              <div className="m-0">Group CEO</div>
              <div className="m-0">AI Sante</div>
            </div>
          </motion.div>

          {/* Image Section */}

          <motion.div
            className={styles.description__image}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="block md:hidden text-left font-['Erstoria',_sans-serif] text-[#453030]">A Few Words From Our CEO</h2>

            {/* Foreground Image */}
            <Image
              src={icons.admin}
              alt="CEO Portrait - Violaine Joshi"
              width={533}
              height={533}
              className={styles["ceo-section__portrait"]}
              priority
            />

          </motion.div>
        </motion.div>
      </div>
    </section>

  );
}
