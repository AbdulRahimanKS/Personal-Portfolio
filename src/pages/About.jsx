import React from 'react';
import Layout from '../components/Layout';
import styles from './About.module.css';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <Layout>
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>About <span className="text-gradient">Me</span></h1>
            <p className={styles.subtitle}>Building practical digital solutions with technology and AI.</p>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <img src={profileImg} alt="Abdul Rahiman" className={styles.profileImage} />
                <div className={styles.experienceCard}>
                  <span className={styles.years}>2+</span>
                  <span className={styles.yearsText}>Years of<br />Experience</span>
                </div>
              </div>
            </div>

            <div className={styles.textColumn}>
              <h2 className={styles.heading}>Building intelligent solutions for real-world problems</h2>

              <div className={styles.paragraphs}>
                <p>
                  I'm Abdul Rahiman, a Full Stack Developer focused on building reliable, user-friendly digital products. I enjoy turning ideas into practical applications by working across both frontend and backend technologies.
                </p>
                <p>
                  My work involves building responsive interfaces, backend systems, APIs, and databases to create complete end-to-end solutions. I enjoy understanding how different parts of a product come together and finding simple, scalable ways to solve real-world problems.
                </p>
                <p>
                  I'm also actively exploring AI and intelligent systems, with a growing interest in integrating AI capabilities into modern applications. I'm continuously learning and building projects that combine software development with emerging technologies.
                </p>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statTitle}>Frontend</span>
                  <span className={styles.statLabel}>Building responsive user experiences</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statTitle}>Backend</span>
                  <span className={styles.statLabel}>APIs, systems & integrations</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statTitle}>AI Focus</span>
                  <span className={styles.statLabel}>Exploring intelligent applications</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
