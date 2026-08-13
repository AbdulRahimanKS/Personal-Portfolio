import React from 'react';
import { Link } from 'react-router-dom';
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
              <div className={styles.actions}>
                <Link to="/projects" className="btn btn-primary">View My Work</Link>
                <Link to="/contact" className="btn btn-outline">Contact Me</Link>
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
                    <span className={styles.keyword}>const</span> developer = {'{'}<br/>
                    &nbsp;&nbsp;name: <span className={styles.string}>'Alex Johnson'</span>,<br/>
                    &nbsp;&nbsp;role: <span className={styles.string}>'Full Stack'</span>,<br/>
                    &nbsp;&nbsp;skills: [<span className={styles.string}>'React'</span>, <span className={styles.string}>'Python'</span>, <span className={styles.string}>'PostgreSQL'</span>]<br/>
                    {'}'};<br/><br/>
                    <span className={styles.keyword}>function</span> build() {'{'}<br/>
                    &nbsp;&nbsp;<span className={styles.return}>return</span> <span className={styles.string}>'Awesome Solutions'</span>;<br/>
                    {'}'}
                  </code>
                </div>
              </div>
              <div className={styles.glowEffect}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">developer_mode</span>
              </div>
              <span className={styles.featureText}>Full Stack Development</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">dns</span>
              </div>
              <span className={styles.featureText}>API & Backend</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">cloud</span>
              </div>
              <span className={styles.featureText}>Database & Cloud</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">devices</span>
              </div>
              <span className={styles.featureText}>Modern Web Apps</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
