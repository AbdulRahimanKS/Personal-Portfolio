import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import styles from './Home.module.css';

const Home = () => {
  const featuredProjects = [
    {
      title: "AI Chatbot Platform",
      description: "An AI-powered conversational platform designed for enterprise customer support, featuring advanced natural language processing.",
      tags: ["Python", "FastAPI", "PostgreSQL"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxH5l9mSUQnphexH4L4VSWD-hXT0XJnDSgInZ3wV8LN2TSN5la_CpVLYYe8Q6a8os1Kphk48c_0a9nfiWhOY7y-nYYizj6g60o-s5lxqreMZ4aDA9hKr2ohHhFkgBl0rk2CoJSwoca2NQ7MbLmwDUWd7AXkXrwErKMXZzKJh3MlmYlheCP_oB6d-R67EW4V0GYj8eUb1vI3dKlSj0UChcKTxUvVcxX2Vn5t0QfjW-5ojQB8Rqm_LBzLQ"
    },
    {
      title: "Task Management System",
      description: "A web-based task management application focusing on team collaboration, real-time updates, and workflow optimization.",
      tags: ["Django", "PostgreSQL", "Bootstrap"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiEQUcDWMOOHd-io5TOU9eamPRlIOGoWny0OUepRWe_x1B13Jojak_fEp_dJoYzLJcMNVt0JL06OTQ-f7c-1wh36F6Jy3tfHTW8b1Q3WAI0xtFD2Zw7t3djfvsxcAOGKmw0hdM-ag6s2wHzyj-SgMGpRGLuhnBqLSxt7g6eU6Nw06h-njvB2Xk--hBpdcWzu6lH-iXE0Qf7LxW-ON8GTxkVHm4VP8d8BnsiVpFro0CZTCC2DGvJFSt8A"
    },
    {
      title: "Enterprise Integration Platform",
      description: "Backend services integrating various legacy business systems into a unified, scalable REST API architecture.",
      tags: ["Python", "REST APIs", "Oracle"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm84GsosakwB4Wwg8XkSVYBdyACWevi2J2vkfXLOUbwgq0Z45fEWWezRn1Ey9M0j5vR7KaFVIiDzF8Z8mmZNY7EUwUly0fmO8KBEj1b_RhaX9uaePUcz1IXKlEwTrVbOnW1z3PjJz7OEbx5dfajnxLKApo9pNPvwQzQ_VYZ_3FG-5syrUoZDIM5ElI83GEe6whJ-X-fHdGGcqD4DZIajl36GteN2IthH8uFD1iVPQQ_17m7wxFqiYZqA"
    }
  ];

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

      <section className={styles.featuresSection}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div className={`card ${styles.featureCard}`}>
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">developer_mode</span>
              </div>
              <span className={styles.featureText}>Full Stack Development</span>
            </div>
            <div className={`card ${styles.featureCard}`}>
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">dns</span>
              </div>
              <span className={styles.featureText}>API & Backend</span>
            </div>
            <div className={`card ${styles.featureCard}`}>
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">cloud</span>
              </div>
              <span className={styles.featureText}>Database & Cloud</span>
            </div>
            <div className={`card ${styles.featureCard}`}>
              <div className={styles.featureIcon}>
                <span className="material-symbols-outlined">devices</span>
              </div>
              <span className={styles.featureText}>Modern Web Apps</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featuredProjectsSection}>
        <div className="container">
          <div className={styles.projectsHeader}>
            <h2 className={styles.projectsTitle}>Featured Projects</h2>
            <Link to="/projects" className={styles.viewAllLink}>
              View All Projects
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className={styles.projectsGrid}>
            {featuredProjects.map((project, idx) => (
              <article key={idx} className={`card ${styles.projectCard}`}>
                <div className={styles.projectImageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                </div>
                <div className={styles.projectInfo}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  <Link to="/projects" className={styles.projectLink}>
                    View Project <span className="material-symbols-outlined">open_in_new</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.mobileViewAll}>
            <Link to="/projects" className="btn btn-outline" style={{ width: '100%' }}>
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
