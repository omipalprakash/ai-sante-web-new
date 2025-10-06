// components/GridWrapper.jsx
import React from "react";
import styles from "./GridWrapper.module.css"; // Import the CSS Module

const GridWrapper = ({ children }) => {
  return (
    <div className={styles.gridWrapper}>
      <div className={styles.grid}>
        <div className={styles.gridFade}></div>
        <div className={styles.gridLines}></div>
      </div>
      <div className={styles.gridContent}>{children}</div>
    </div>
  );
};

export default GridWrapper;
