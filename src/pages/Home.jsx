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
              <div className={styles.greeting}>HI, I'M ABDUL RAHIMAN</div>
              <h1 className={styles.title}>
                Full Stack <span className="text-gradient">Developer</span>
              </h1>
              <p className={styles.description}>
                I turn ideas into reliable digital products by building clean, scalable applications from frontend to backend — while exploring AI-powered solutions and intelligent automation.
              </p>
              
              <div className={styles.ctaGroup}>
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-outline">Contact Me</a>
              </div>

              <div className={styles.socialLinks}>
                <a href="https://www.linkedin.com/in/abdul-rahiman-ks" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://github.com/AbdulRahimanKS" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://www.instagram.com/_rxh_mxn_/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.visualBg}></div>
              
              <div className={styles.codeEditor}>
                <div className={styles.editorHeader}>
                  <div className={styles.windowControls}>
                    <div className={styles.dot} style={{ backgroundColor: '#ef4444' }}></div>
                    <div className={styles.dot} style={{ backgroundColor: '#f59e0b' }}></div>
                    <div className={styles.dot} style={{ backgroundColor: '#10b981' }}></div>
                  </div>
                  <div className={styles.fileTabs}>
                    <div className={styles.activeTab}>portfolio.js</div>
                  </div>
                </div>
                
                <div className={styles.editorBody}>
                  <div className={styles.lineNumbers}>
                    <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span>
                  </div>
                  <div className={styles.codeContent}>
                    <div className={styles.codeLine}><span className={styles.keyword}>const</span> <span className={styles.variable}>developer</span> = {'{'}</div>
                    <div className={styles.codeLine}>&nbsp;&nbsp;<span className={styles.property}>name</span>: <span className={styles.string}>"Abdul Rahiman"</span>,</div>
                    <div className={styles.codeLine}>&nbsp;&nbsp;<span className={styles.property}>role</span>: <span className={styles.string}>"Full Stack Developer"</span>,</div>
                    <div className={styles.codeLine}>&nbsp;&nbsp;<span className={styles.property}>focus</span>: [</div>
                    <div className={styles.codeLine}>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Web Applications"</span>,</div>
                    <div className={styles.codeLine}>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Backend Systems"</span>,</div>
                    <div className={styles.codeLine}>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"APIs & Databases"</span>,</div>
                    <div className={styles.codeLine}>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"AI & Automation"</span></div>
                    <div className={styles.codeLine}>&nbsp;&nbsp;]</div>
                    <div className={styles.codeLine}>{'}'};</div>
                    <div className={styles.codeLine}></div>
                    <div className={styles.codeLine}><span className={styles.keyword}>function</span> <span className={styles.function}>build</span>() {'{'}</div>
                    <div className={styles.codeLine}>&nbsp;&nbsp;<span className={styles.keyword}>return</span> <span className={styles.string}>"Simple ideas, powerful solutions"</span>;</div>
                    <div className={styles.codeLine}>{'}'}<span className={styles.blinkingCursor}></span></div>
                  </div>
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
