import React from 'react';
import Layout from '../components/Layout';
import styles from './Experience.module.css';

const Experience = () => {
  const experiences = [
    {
      company: "TechNova Solutions",
      role: "Senior Full Stack Developer",
      period: "2023 - Present",
      description: "Leading the development of enterprise-grade web applications. Architected a microservices-based platform using Node.js and React that increased system scalability by 40%.",
      achievements: [
        "Mentored a team of 4 junior developers",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Reduced database query times by 35% through indexing and caching"
      ]
    },
    {
      company: "Creative Digital Agency",
      role: "Web Developer",
      period: "2020 - 2023",
      description: "Developed and maintained client websites and e-commerce platforms. Worked closely with the design team to implement pixel-perfect user interfaces and smooth animations.",
      achievements: [
        "Built custom Shopify themes for high-traffic stores",
        "Integrated third-party APIs for payment and shipping",
        "Improved accessibility scores across all client sites to 95+"
      ]
    },
    {
      company: "Startup Inc.",
      role: "Junior Frontend Developer",
      period: "2018 - 2020",
      description: "Assisted in building the MVP of a SaaS product using React and Redux. Participated in daily stand-ups and agile sprints.",
      achievements: [
        "Converted legacy jQuery code to modern React components",
        "Wrote comprehensive unit tests using Jest",
        "Collaborated on the initial design system"
      ]
    }
  ];

  return (
    <Layout>
      <section className={styles.expSection}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>Work <span className="text-gradient">Experience</span></h1>
            <p className={styles.subtitle}>My professional journey and career milestones.</p>
          </div>

          <div className={styles.timeline}>
            {experiences.map((exp, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineMarker}>
                  <div className={styles.markerDot}></div>
                  {idx !== experiences.length - 1 && <div className={styles.markerLine}></div>}
                </div>
                
                <div className={`card ${styles.timelineCard}`}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h2 className={styles.role}>{exp.role}</h2>
                      <h3 className={styles.company}>{exp.company}</h3>
                    </div>
                    <span className="tag">{exp.period}</span>
                  </div>
                  
                  <p className={styles.description}>{exp.description}</p>
                  
                  <ul className={styles.achievements}>
                    {exp.achievements.map((item, iIdx) => (
                      <li key={iIdx}>
                        <span className="material-symbols-outlined">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
