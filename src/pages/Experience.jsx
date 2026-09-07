import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from './Experience.module.css';

const Experience = () => {
  const [expandedRoles, setExpandedRoles] = useState({});

  const toggleExpand = (idx) => {
    setExpandedRoles(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };
  const experiences = [
    {
      company: "Senscript Technologies Pvt Ltd",
      role: "Python Developer",
      period: "Jan 2025 – Present",
      location: "Infopark, Kakkanad",
      initialVisibleCount: 4,
      achievements: [
        "Engineered backend modules using Django and FastAPI for B2B, CRM, and enterprise applications, developing APIs, business logic, and database-driven workflows.",
        "Developed backend services for AI-driven applications, including conversational AI and semantic-search solutions, integrating AI capabilities into production-oriented application workflows.",
        "Worked on the Unitree G1 EDU+ humanoid robotics project, applying computer-vision techniques for object detection and depth/distance estimation, along with voice-based interaction.",
        "Built core backend functionality for an AI-powered chatbot, including authentication, file processing, metadata management, semantic search, vector database integration, and real-time communication.",
        "Integrated AI services, vector databases, and third-party APIs with backend applications to enable intelligent search, contextual responses, and automated workflows.",
        "Developed backend functionality for a time-lapse camera application, including camera integration and automated image-capture workflows.",
        "Delivered real-time features using WebSockets and Django Channels, enabling live communication and interactive application functionality.",
        "Designed and integrated REST APIs with third-party services, extending system capabilities and supporting frontend–backend integration.",
        "Optimized application performance, resolved critical backend issues, and improved overall system reliability and maintainability.",
        "Authored API documentation, mentored interns, and facilitated smooth frontend–backend integration through technical guidance and collaboration."
      ]
    },
    {
      company: "Senscript Technologies Pvt Ltd",
      role: "Python Developer Intern",
      period: "Jun 2024 – Dec 2024",
      location: "Infopark, Kakkanad",
      initialVisibleCount: 3,
      achievements: [
        "Developed and maintained backend systems using Django, Django REST Framework, and PostgreSQL across multiple production-oriented applications.",
        "Built core features for CozaStore, including backend workflows, database models, APIs, and application logic.",
        "Contributed to a Doctor–Patient platform, developing APIs and database-driven functionality for managing application data and user workflows.",
        "Designed relational database structures and implemented CRUD operations, relationships, validation, authentication, and business logic using Django and PostgreSQL.",
        "Developed and tested REST APIs and integrated backend services with frontend applications.",
        "Worked with FastAPI and WebSockets to explore and implement modern backend and real-time application functionality.",
        "Debugged issues, optimized backend code and database queries, and collaborated with the development team to deliver features."
      ]
    },
    {
      company: "Saranga GeoSoftware and Engineering Services",
      role: "Telecom Engineer Level 2",
      period: "Aug 2021 – May 2024",
      location: "CSEZ, Kakkanad, Kerala",
      achievements: [
        "Delivered 2.5 years of expertise in HFC Design and Drafting projects for Charter, USA.",
        "Promoted to Acting SME within 6 months for leadership and technical contributions.",
        "Conducted quality assurance, trained new team members, and prepared process documentation."
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
            {experiences.map((exp, idx) => {
              const initialCount = exp.initialVisibleCount || 3;
              const isExpanded = !!expandedRoles[idx];
              const visibleAchievements = isExpanded
                ? exp.achievements
                : exp.achievements.slice(0, initialCount);
              const hiddenCount = exp.achievements.length - initialCount;

              return (
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
                      <div className={styles.metaRight}>
                        <span className="tag">{exp.period}</span>
                        {exp.location && (
                          <span className={styles.location}>
                            <span className="material-symbols-outlined" style={{ fontSize: '14px', marginRight: '3px', verticalAlign: '-2px' }}>location_on</span>
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {exp.description && <p className={styles.description}>{exp.description}</p>}

                    <ul className={styles.achievements}>
                      {visibleAchievements.map((item, iIdx) => (
                        <li key={iIdx}>
                          <span className="material-symbols-outlined">check_circle</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {hiddenCount > 0 && (
                      <div className={styles.showMoreContainer}>
                        <button
                          type="button"
                          className={`${styles.showMoreBtn} ${isExpanded ? styles.expanded : ''}`}
                          onClick={() => toggleExpand(idx)}
                          aria-expanded={isExpanded}
                        >
                          <span>{isExpanded ? 'Show less highlights' : 'Show more highlights'}</span>
                          {!isExpanded && (
                            <span className={styles.countBadge}>+{hiddenCount}</span>
                          )}
                          <span className={`material-symbols-outlined ${styles.arrowIcon}`}>
                            keyboard_arrow_down
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
