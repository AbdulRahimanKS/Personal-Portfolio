import React from 'react';
import Layout from '../components/Layout';
import styles from './Home.module.css';

const Home = () => {
  return (
    <Layout>
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.greeting}>HI, I'M ALEX JOHNSON</div>
              <h1 className={styles.title}>
                Full Stack <span className="text-gradient">Developer</span>
              </h1>
              <p className={styles.description}>
                I build reliable, user-friendly web applications from frontend to backend, turning complex problems into simple, scalable solutions.
              </p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="GitHub">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Twitter">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.visualBg}></div>
              <div className={styles.codeCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.dot} style={{ backgroundColor: '#ef4444' }}></div>
                  <div className={styles.dot} style={{ backgroundColor: '#f59e0b' }}></div>
                  <div className={styles.dot} style={{ backgroundColor: '#10b981' }}></div>
                </div>
                <div className={styles.cardBody}>
                  <code>
                    <span className={styles.keyword}>const</span> developer = {'{'}<br />
                    &nbsp;&nbsp;name: <span className={styles.string}>'Alex Johnson'</span>,<br />
                    &nbsp;&nbsp;role: <span className={styles.string}>'Full Stack'</span>,<br />
                    &nbsp;&nbsp;skills: [<span className={styles.string}>'React'</span>, <span className={styles.string}>'Python'</span>, <span className={styles.string}>'PostgreSQL'</span>]<br />
                    {'}'};<br /><br />
                    <span className={styles.keyword}>function</span> build() {'{'}<br />
                    &nbsp;&nbsp;<span className={styles.return}>return</span> <span className={styles.string}>'Awesome Solutions'</span>;<br />
                    {'}'}
                  </code>
                </div>
              </div>
              <div className={styles.glowEffect}></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
