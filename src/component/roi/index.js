import { icons } from '@/utility/image';
import { benefits } from './constants';
import styles from './roi.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Header_text from '../header_text';

const Roi = () => {
  return (
    <section className={`${styles.roi_section} bg-[#F5F5F5]`}>
      <div className="container">
        <div className={styles.roi_wrap}>
          <div className={styles.roi_grid}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={styles.roi_content}
            >
              <div className={styles.section_tag}>
                <Header_text
                  text="Return on Invesment"
                  animateOn="view"
                  sequential={true}
                />
              </div>
              <h2 className="font-['Erstoria',_sans-serif] text-[#453030]">Maximize Your ROI</h2>
              <p className={styles.section_description}>
                Empowering businesses with AI-driven efficiency, automation, and growth.
              </p>
              <p className={styles.url_text}>
                <span> Read the full report</span>
                <Link href={'/roi'} className={styles.url}>
                  <Image
                    src={icons.shareImg}
                    width={16} height={16}
                    alt="Arrow"
                    className={styles.image_url}
                  />
                </Link>
              </p>
            </motion.div>
            <div className={styles.benefits_list}>
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={styles.benefit_item}
                >
                  <div className={styles.check_container}>
                    <div className={styles.check_mark}>✓</div>
                  </div>
                  <ul className={styles.benefit_content}>
                    <li className={styles.benefit_title}>{benefit.title}</li>
                    <p className={styles.benefit_description}>
                      {benefit.description}
                    </p>
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.chart_container}
            >
              <div className="chart-card">
                <div className="chart-header">
                  <div className="chart-metric">
                    <div className="metric-label"></div>
                    <div className="metric-value"></div>
                  </div>
                  <div className="chart-metric">
                    <div className="metric-label"></div>
                    <div className="metric-value"></div>
                  </div>
                </div>

                <div className="chart-body">
                  <div className="chart-title"></div>
                  <div className="chart-area"></div>
                </div>

                <div className="chart-stats">
                  <div className="stat-item">
                    <div className="stat-label"></div>
                    <div className="stat-bar stat-bar-primary"></div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label"></div>
                    <div className="stat-bar stat-bar-accent"></div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label"></div>
                    <div className="stat-bar stat-bar-green"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Roi;
