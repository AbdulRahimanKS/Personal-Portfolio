import React from 'react';
import Layout from '../components/Layout';
import styles from './Projects.module.css';

const Projects = () => {
  const projectsList = [
    {
      title: "Cloudvice CRM",
      category: "Full Stack",
      description: "A comprehensive customer relationship management platform with analytics, pipeline management, and workflow automation.",
      tags: ["React", "Python", "Django", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "insights",
      links: [
        { label: "Live Demo ↗", url: "#", primary: true },
        { label: "Source Code", url: "#", icon: "github", primary: false }
      ]
    },
    {
      title: "E-Commerce OS",
      category: "Backend",
      description: "A flexible e-commerce platform with inventory, payments, and customer management.",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "shopping_cart",
      links: [
        { label: "Live Demo ↗", url: "#", primary: true },
        { label: "Source Code", url: "#", icon: "github", primary: false }
      ]
    },
    {
      title: "TaskFlow",
      category: "Full Stack",
      description: "A collaborative project management tool designed for agile teams with real-time updates and Kanban boards.",
      tags: ["React", "Express", "WebSockets", "Redis"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "task_alt",
      links: [
        { label: "Live Demo ↗", url: "#", primary: true },
        { label: "Source Code", url: "#", icon: "github", primary: false }
      ]
    },
    {
      title: "AI Chat Assistant",
      category: "AI / Python",
      description: "An intelligent conversational agent built with custom language models for answering technical queries and code generation.",
      tags: ["Python", "FastAPI", "OpenAI", "React"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "smart_toy",
      links: [
        { label: "Live Demo ↗", url: "#", primary: true },
        { label: "Source Code", url: "#", icon: "github", primary: false }
      ]
    }
  ];

  return (
    <Layout>
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <h1 className={styles.title}>My <span className="text-gradient">Projects</span></h1>
              <p className={styles.subtitle}>A selection of my recent work and personal projects.</p>
            </div>
          </div>

          <div className={styles.grid}>
            {projectsList.map((project, idx) => (
              <div key={idx} className={styles.projectCard}>
                <div className={styles.imageContainer}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                  <div className={styles.imageOverlay}></div>
                  <span className={styles.categoryBadge}>{project.category}</span>
                </div>
                
                <div className={styles.projectContent}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDesc}>{project.description}</p>
                  
                  <div className={styles.tags}>
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                  
                  <div className={styles.links}>
                    {project.links.map((link, lIdx) => (
                      <a key={lIdx} href={link.url} className={link.primary ? "btn btn-primary" : "btn btn-outline"}>
                        {link.icon === "github" && (
                          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
