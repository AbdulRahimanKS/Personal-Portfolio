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
                  <span className={styles.yearsText}>Years of<br/>Experience</span>
                </div>
              </div>
            </div>

            <div className={styles.textColumn}>
              <h2 className={styles.heading}>Passionate about creating impactful digital experiences</h2>
              
              <div className={styles.paragraphs}>
                <p>
                  Hello! I'm Abdul Rahiman, a Full Stack Developer with a passion for building robust and scalable web applications. My journey in software development started with a curiosity for how things work on the internet, which quickly evolved into a full-fledged career.
                </p>
                <p>
                  I specialize in both frontend and backend technologies, allowing me to understand and architect complete solutions. Whether it's crafting a pixel-perfect user interface or designing a complex database schema, I approach every task with the same level of dedication and attention to detail.
                </p>
                <p>
                  My philosophy is simple: write clean, maintainable code, and always keep the end-user in mind. I believe that good software is not just about solving technical problems, but about creating tools that make people's lives easier.
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
