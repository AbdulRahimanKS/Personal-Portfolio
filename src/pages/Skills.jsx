import React from 'react';
import Layout from '../components/Layout';
import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "laptop_mac",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: "dns",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "Express", level: 85 },
        { name: "GraphQL", level: 75 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "cloud",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 75 },
        { name: "Redis", level: 65 }
      ]
    },
    {
      title: "Tools & Methods",
      icon: "build",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Agile/Scrum", level: 85 },
        { name: "CI/CD", level: 75 },
        { name: "Jest/Testing", level: 80 },
        { name: "Figma", level: 70 }
      ]
    }
  ];

  return (
    <Layout>
      <section className={styles.skillsSection}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>My <span className="text-gradient">Skills</span></h1>
            <p className={styles.subtitle}>The technical tools and technologies I use to build solutions.</p>
          </div>

          <div className={styles.grid}>
            {skillCategories.map((category, idx) => (
              <div key={idx} className="card">
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>
                    <span className="material-symbols-outlined">{category.icon}</span>
                  </div>
                  <h2 className={styles.categoryTitle}>{category.title}</h2>
                </div>
                
                <div className={styles.skillsList}>
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className={styles.skillItem}>
                      <div className={styles.skillInfo}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillLevel}>{skill.level}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progressFill} 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.bottomSection}>
            <div className={styles.ctaBox}>
              <h3 className={styles.ctaTitle}>Looking for a specific skill?</h3>
              <p className={styles.ctaText}>I'm always learning new technologies. If you need something not listed here, let's talk.</p>
              <a href="/contact" className="btn btn-primary">Contact Me</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
