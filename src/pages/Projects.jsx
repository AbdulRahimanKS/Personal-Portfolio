import React from 'react';
import Layout from '../components/Layout';
import styles from './Projects.module.css';

const Projects = () => {
  const projectsList = [
    {
      title: "Learning Platform",
      category: "Full Stack",
      description: "A modern learning platform designed to provide an organized and engaging learning experience, bringing together courses, educational content, and interactive features in one place. Engineered with asynchronous task processing and scalable cloud storage.",
      tags: ["Python", "Django", "React", "PostgreSQL", "Redis", "Celery", "Cloudflare R2", "REST APIs"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "school",
      links: [
        { label: "Source Code", url: "https://github.com/AbdulRahimanKS/learn-hub", icon: "github", primary: true }
      ]
    },
    {
      title: "Unitree G1 – Object Detection & Interaction",
      category: "AI / Robotics",
      description: "A computer vision project focused on detecting objects, estimating their distance, and enabling the Unitree G1 humanoid robot to understand and interact with its surroundings.",
      tags: ["Python", "YOLO", "OpenCV", "RealSense", "Unitree SDK"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "smart_toy",
      links: []
    },
    {
      title: "AI Resume Analyzer",
      category: "AI / Web",
      status: "In Progress",
      description: "An AI-powered application that analyzes resumes and provides insights to help users understand and improve their professional profiles.",
      tags: ["Python", "FastAPI", "OpenAI / LLMs", "NLP", "React"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "document_scanner",
      links: []
    },
    {
      title: "AI SaaS Cost Optimization Platform",
      category: "AI / Cloud",
      status: "In Progress",
      description: "A platform exploring how AI and software services can be discovered, compared, and optimized based on features, pricing, and usage requirements.",
      tags: ["Python", "FastAPI", "React", "PostgreSQL", "Analytics", "AI APIs"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "trending_up",
      links: []
    },
    {
      title: "AI-Powered Chatbot",
      category: "AI / Full Stack",
      status: "Completed",
      description: "An AI-powered conversational application that understands user queries and provides intelligent, context-aware responses through a simple chat interface.",
      tags: ["Python", "AI", "REST APIs", "React", "FastAPI"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "chat",
      links: []
    },
    {
      title: "CRM System",
      category: "Full Stack / Business",
      status: "Completed",
      description: "A full-stack customer relationship management system designed to help teams manage client records, track sales pipelines, and organize business workflows through a centralized dashboard.",
      tags: ["Python", "Django", "React", "PostgreSQL", "REST APIs"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "insights",
      links: []
    },
    {
      title: "CozaStore",
      category: "E-Commerce / Full Stack",
      status: "Completed",
      description: "A full-stack e-commerce application with a modern shopping experience, product management, customer accounts, and an end-to-end purchasing workflow.",
      tags: ["Python", "Django", "React", "PostgreSQL", "REST APIs"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "shopping_bag",
      links: []
    },
    {
      title: "Doctor–Patient Platform",
      category: "Healthcare / Full Stack",
      status: "Completed",
      description: "A healthcare platform designed to connect doctors and patients through a centralized portal for managing appointments, medical records, and digital consultations.",
      tags: ["Python", "Django", "React", "PostgreSQL", "REST APIs"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "medical_services",
      links: []
    },
    {
      title: "Time-Lapse Camera System",
      category: "Computer Vision",
      status: "Completed",
      description: "An automated application for capturing, processing, and compiling time-lapse footage, designed to orchestrate camera capture and render high-resolution visual sequences over extended periods.",
      tags: ["Python", "OpenCV", "Camera APIs", "Image Processing", "Automation"],
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "videocam",
      links: []
    }
  ];

  return (
    <Layout>
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <h1 className={styles.title}>Projects & <span className="text-gradient">Experiments</span></h1>
              <p className={styles.subtitle}>A collection of applications, AI projects, and technical solutions I've built.</p>
            </div>
          </div>

          <div className={styles.grid}>
            {projectsList.map((project, idx) => (
              <div key={idx} className={styles.projectCard}>
                <div className={styles.imageContainer}>
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                  <div className={styles.imageOverlay}></div>
                  <span className={styles.categoryBadge}>{project.category}</span>
                  {project.status && (
                    <span className={`${styles.statusBadge} ${project.status === 'Completed' ? styles.statusCompleted : ''}`}>
                      <span className={`${styles.statusDot} ${project.status === 'Completed' ? styles.dotCompleted : ''}`}></span>
                      {project.status}
                    </span>
                  )}
                </div>

                <div className={styles.projectContent}>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDesc}>{project.description}</p>

                  <div className={styles.tags}>
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.tag}>{tag}</span>
                    ))}
                  </div>

                  {project.links && project.links.length > 0 ? (
                    <div className={styles.links}>
                      {project.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target={link.url.startsWith('http') ? "_blank" : undefined}
                          rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                          className={link.primary ? "btn btn-primary" : "btn btn-outline"}
                        >
                          {link.icon === "github" && (
                            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                          )}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className={styles.links}>
                      {project.status === "In Progress" ? (
                        <span className={styles.privateNotice}>
                          <span className="material-symbols-outlined" style={{ fontSize: '18px', marginRight: '6px', verticalAlign: 'middle', color: '#f59e0b' }}>pending</span>
                          In Active Development
                        </span>
                      ) : project.status === "Completed" ? (
                        <span className={styles.privateNotice}>
                          <span className="material-symbols-outlined" style={{ fontSize: '18px', marginRight: '6px', verticalAlign: 'middle', color: '#22c55e' }}>check_circle</span>
                          Completed Project
                        </span>
                      ) : (
                        <span className={styles.privateNotice}>
                          <span className="material-symbols-outlined" style={{ fontSize: '18px', marginRight: '6px', verticalAlign: 'middle' }}>lock</span>
                          Proprietary / Internal R&D
                        </span>
                      )}
                    </div>
                  )}
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
