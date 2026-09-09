import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from './Skills.module.css';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeCard, setActiveCard] = useState(null);

  const filters = ['All', 'Backend', 'AI', 'Frontend', 'Database', 'Tools', 'Cloud'];

  const technologies = [
    // Backend
    { name: "Python", category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "A versatile programming language used for backend development, automation, and AI applications." },
    { name: "Django", category: "Backend", iconUrl: "https://cdn.simpleicons.org/django/44B78B", description: "A high-level Python web framework that encourages rapid development." },
    { name: "FastAPI", category: "Backend", iconUrl: "https://cdn.simpleicons.org/fastapi/05998B", description: "A modern, fast web framework for building APIs with Python." },
    { name: "Flask", category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", description: "A lightweight WSGI web application framework in Python." },
    { name: "SQLAlchemy", category: "Backend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg", description: "The Python SQL Toolkit and Object Relational Mapper for database interaction." },
    { name: "Celery", category: "Backend", iconUrl: "https://cdn.simpleicons.org/celery/37814A", description: "An asynchronous task queue/job queue based on distributed message passing." },
    { name: "REST APIs", category: "Backend", materialIcon: "api", description: "An architectural style for an application program interface (API) that uses HTTP requests." },
    { name: "WebSockets", category: "Backend", materialIcon: "sync_alt", description: "A computer communications protocol, providing full-duplex communication channels." },

    // AI
    { name: "OpenCV", category: "AI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", description: "An open-source computer vision and machine learning software library." },
    { name: "YOLO", category: "AI", iconUrl: "https://cdn.simpleicons.org/yolo", description: "Real-time object detection system for computer vision applications." },
    { name: "Pandas", category: "AI", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", description: "A fast, powerful, and flexible open-source data analysis and manipulation tool." },
    { name: "AI APIs", category: "AI", materialIcon: "memory", description: "APIs that allow integration of artificial intelligence capabilities into applications." },
    { name: "Prompt Engineering", category: "AI", materialIcon: "psychology", description: "The practice of designing and optimizing prompts to guide AI models for accurate, consistent outputs." },

    // Frontend
    { name: "HTML", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", description: "The standard markup language for documents designed to be displayed in a web browser." },
    { name: "CSS", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", description: "A style sheet language used for describing the presentation of a document written in HTML." },
    { name: "JavaScript", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "The programming language of the Web, enabling interactive web pages." },
    { name: "TypeScript", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", description: "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale." },
    { name: "React", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "A JavaScript library for building interactive user interfaces." },
    { name: "Tailwind CSS", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", description: "A utility-first CSS framework packed with classes for building rapid, modern designs." },
    { name: "Bootstrap", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", description: "Powerful, extensible, and feature-packed frontend toolkit for responsive styling." },
    { name: "jQuery", category: "Frontend", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg", description: "A fast, small, and feature-rich JavaScript library for DOM manipulation." },

    // Database
    { name: "SQL", category: "Database", materialIcon: "database", description: "Standard language for storing, manipulating, and retrieving data in relational database systems." },
    { name: "PostgreSQL", category: "Database", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", description: "A powerful relational database used for reliable application data." },
    { name: "MySQL", category: "Database", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", description: "An open-source relational database management system." },
    { name: "SQLite", category: "Database", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", description: "A C-language library that implements a small, fast, self-contained, high-reliability SQL database engine." },
    { name: "MongoDB", category: "Database", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", description: "A document-oriented NoSQL database program." },
    { name: "Redis", category: "Database", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", description: "An in-memory data structure store used as a database, cache, and message broker." },
    { name: "Alembic", category: "Database", materialIcon: "schema", description: "A lightweight database migration tool for usage with SQLAlchemy and Python." },

    // Tools & Cloud
    { name: "Git", category: "Tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", description: "A distributed version control system for tracking changes in source code." },
    { name: "GitHub", category: "Tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", description: "A provider of Internet hosting for software development and version control using Git." },
    { name: "GitLab", category: "Tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", description: "A web-based DevOps lifecycle platform providing Git repository management, CI/CD pipelines, and issue tracking." },
    { name: "Vite", category: "Tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg", description: "A next-generation frontend build tool that provides a faster and leaner development experience." },
    { name: "Linux", category: "Tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", description: "A family of open-source Unix-like operating systems." },
    { name: "Postman", category: "Tools", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", description: "An API platform for building, testing, and simplifying API workflows." },
    { name: "Docker", category: "Cloud", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "A platform designed to help developers build, share, and run modern applications." },
    { name: "Azure", category: "Cloud", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", description: "Microsoft's cloud computing platform for building, testing, deploying, and managing applications." }
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
            <p className={styles.subtitle}>Technologies I use to build modern, scalable, and intelligent applications.</p>
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
                  {tech.iconUrl ? (
                    <img 
                      src={tech.iconUrl} 
                      alt="" 
                      className={styles.descIconImg} 
                    />
                  ) : (
                    <span className={`material-symbols-outlined ${styles.descIconMaterial}`}>
                      {tech.materialIcon}
                    </span>
                  )}
                  <h4 className={styles.descTitle}>{tech.name}</h4>
                  <p className={styles.descText}>{tech.description}</p>
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
