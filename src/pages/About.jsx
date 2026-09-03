import React from 'react';
import Layout from '../components/Layout';
import styles from './About.module.css';

const About = () => {
  return (
    <Layout>
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>About <span className="text-gradient">Me</span></h1>
            <p className={styles.subtitle}>My journey and philosophy as a developer.</p>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  <span className="material-symbols-outlined" style={{ fontSize: '64px', color: 'var(--primary)' }}>
                    person
                  </span>
                </div>
                <div className={styles.experienceCard}>
                  <span className={styles.years}>5+</span>
                  <span className={styles.yearsText}>Years of<br />Experience</span>
                </div>
              </div>
            </div>

            <div className={styles.textColumn}>
              <h2 className={styles.heading}>Building practical solutions with technology</h2>

              <div className={styles.paragraphs}>
                <p>
                  I'm Abdul Rahiman, a Full Stack Developer focused on building reliable and user-friendly digital products.
                </p>
                <p>
                  I enjoy working across the full development process — from creating intuitive frontend experiences to building backend systems, APIs, and databases.
                </p>
                <p>
                  I like solving real-world problems with technology and turning ideas into practical, scalable solutions. I'm also interested in exploring emerging technologies, including AI and intelligent systems.
                </p>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>20+</span>
                  <span className={styles.statLabel}>Projects Completed</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>15+</span>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Open Source Contributions</span>
                </div>
              </div>

              <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/abdul-rahiman-ks" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  LinkedIn
                </a>
                <a href="https://github.com/AbdulRahimanKS" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  GitHub
                </a>
                <a href="https://www.instagram.com/_rxh_mxn_/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
