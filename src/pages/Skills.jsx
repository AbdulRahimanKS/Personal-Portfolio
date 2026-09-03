import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from './Skills.module.css';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeCard, setActiveCard] = useState(null);

  const filters = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'Cloud', 'AI'];

  const technologies = [
    { name: "HTML", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", description: "The standard markup language for documents designed to be displayed in a web browser." },
    { name: "CSS", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", description: "A style sheet language used for describing the presentation of a document written in HTML." },
    { name: "JavaScript", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "The programming language of the Web, enabling interactive web pages." },
    { name: "React", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "A JavaScript library for building interactive user interfaces." },
    { name: "Python", category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "A versatile programming language used for backend development, automation, and AI applications." },
    { name: "Django", category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", description: "A high-level Python web framework that encourages rapid development." },
    { name: "FastAPI", category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", description: "A modern, fast web framework for building APIs with Python." },
    { name: "PostgreSQL", category: "Database", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", description: "A powerful relational database used for reliable application data." },
    { name: "MySQL", category: "Database", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "An open-source relational database management system." },
    { name: "MongoDB", category: "Database", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", description: "A document-oriented NoSQL database program." },
    { name: "Docker", category: "Cloud", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "A platform designed to help developers build, share, and run modern applications." },
    { name: "Git", category: "Tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", description: "A distributed version control system for tracking changes in source code." },
    { name: "GitHub", category: "Tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", description: "A provider of Internet hosting for software development and version control using Git." },
    { name: "Linux", category: "Tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", description: "A family of open-source Unix-like operating systems." },
    { name: "AWS", category: "Cloud", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", description: "Amazon's comprehensive and broadly adopted cloud platform." },
    { name: "REST APIs", category: "Backend", materialIcon: "api", description: "An architectural style for an application program interface (API) that uses HTTP requests." },
    { name: "WebSockets", category: "Backend", materialIcon: "sync_alt", description: "A computer communications protocol, providing full-duplex communication channels." },
    { name: "AI APIs", category: "AI", materialIcon: "memory", description: "APIs that allow integration of artificial intelligence capabilities into applications." }
  ];

  const filteredTechs = activeFilter === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);

  const toggleCard = (idx) => {
    if (activeCard === idx) {
      setActiveCard(null);
    } else {
      setActiveCard(idx);
    }
  };

  return (
    <Layout>
      <section className={styles.skillsSection}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>My <span className="text-gradient">Skills</span></h1>
            <p className={styles.subtitle}>Click or hover over a technology to learn more.</p>
          </div>

          <div className={styles.filterControls}>
            {filters.map((filter) => (
              <button
                key={filter}
                className={`${styles.filterBtn} ${activeFilter === filter ? styles.filterBtnActive : ''}`}
                onClick={() => {
                  setActiveFilter(filter);
                  setActiveCard(null);
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filteredTechs.map((tech, idx) => (
              <div 
                key={idx} 
                className={`${styles.techCard} ${activeCard === idx ? styles.activeCard : ''}`}
                onClick={() => toggleCard(idx)}
              >
                <div className={styles.cardContent}>
                  {tech.iconUrl ? (
                    <img 
                      src={tech.iconUrl} 
                      alt={`${tech.name} icon`} 
                      className={styles.iconImg} 
                    />
                  ) : (
                    <span className={`material-symbols-outlined ${styles.iconMaterial}`}>
                      {tech.materialIcon}
                    </span>
                  )}
                  <h3 className={styles.techName}>{tech.name}</h3>
                </div>
                <div className={styles.descPanel}>
                  {tech.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
