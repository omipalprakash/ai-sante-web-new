import React from 'react';
import styles from './backgroundBoxAnimation.module.css';

const BackgroundBoxAnimation = ({ children, boxColor = '#f5f5f5' }) => {
  let data = new Array(10).fill('');

  return (
    <section className={styles.storySection}>
      <div className='container'>
        <ul className={styles.circles}>
          {data.map((_, index) => (
            <li key={index} style={{ backgroundColor: boxColor }}></li>
          ))}
        </ul>
        {children}
      </div>
    </section>
  );
};

export default BackgroundBoxAnimation;
