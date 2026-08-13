import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logoInfo}>
            <h2 className={styles.logo}>DevPortfolio</h2>
            <p className={styles.tagline}>Building reliable, scalable web applications.</p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>Social</h3>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
