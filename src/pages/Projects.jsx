import React from 'react';
import Layout from '../components/Layout';
import styles from './Projects.module.css';

const Projects = () => {
  const projectsList = [
    {
      title: "Cloudvice CRM",
      description: "A comprehensive Customer Relationship Management system built for modern sales teams. Features real-time analytics, pipeline management, and automated email workflows.",
      tags: ["React", "Python", "Django", "PostgreSQL"],
      links: [
        { label: "Live Demo", url: "#" },
        { label: "Source Code", url: "#" }
      ]
    },
    {
      title: "E-Commerce OS",
      description: "An open-source, headless e-commerce backend with a customizable storefront. Includes inventory tracking, payment gateway integration, and customer account management.",
      tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      links: [
        { label: "Live Demo", url: "#" },
        { label: "Source Code", url: "#" }
      ]
    },
    {
      title: "TaskFlow Pro",
      description: "A collaborative project management tool designed for agile teams. Features Kanban boards, time tracking, and integrations with popular tools like Slack and GitHub.",
      tags: ["React", "Express", "GraphQL", "Redis"],
      links: [
        { label: "Live Demo", url: "#" },
        { label: "Source Code", url: "#" }
      ]
    },
    {
      title: "DevPortfolio Template",
      description: "A customizable, premium developer portfolio template. Built with performance and accessibility in mind, featuring a fully responsive design and dark mode support.",
      tags: ["React", "Vite", "Vanilla CSS"],
      links: [
        { label: "Live Demo", url: "#" },
        { label: "Source Code", url: "#" }
      ]
    }
  ];

  return (
    <Layout>
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>Featured <span className="text-gradient">Projects</span></h1>
            <p className={styles.subtitle}>A selection of my recent work and personal projects.</p>
          </div>

          <div className={styles.grid}>
            {projectsList.map((project, idx) => (
              <div key={idx} className="card">
                <div className={styles.projectImage}>
                  {/* Placeholder for project image */}
                  <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--outline-variant)' }}>image</span>
                </div>
                <div className={styles.projectContent}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDesc}>{project.description}</p>
                  
                  <div className={styles.tags}>
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className={styles.links}>
                    {project.links.map((link, lIdx) => (
                      <a key={lIdx} href={link.url} className={lIdx === 0 ? "btn btn-primary" : "btn btn-outline"}>
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
