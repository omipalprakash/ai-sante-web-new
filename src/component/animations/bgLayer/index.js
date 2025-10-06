import React from 'react';
import styles from './BackgroundWrapper.module.css';

const BackgroundWrapper = ({ children }) => {
  return (
    <section id="accueil">
      <div className={styles.triangle_rose}></div>
      <div className={styles.triangle_vert}></div>
      <header>
      </header>
      {children}
    </section>
  );
};

export default BackgroundWrapper;
