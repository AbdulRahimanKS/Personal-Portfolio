import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Layout>
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>Contact <span className="text-gradient">Me</span></h1>
            <p className={styles.subtitle}>Have a project in mind? Let's discuss how I can help.</p>
          </div>

          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <div className="card">
                <h2 className={styles.infoTitle}>Contact Information</h2>
                <p className={styles.infoDesc}>
                  Fill out the form and I will get back to you within 24 hours. You can also reach me directly via email.
                </p>
                
                <div className={styles.infoItems}>
                  <div className={styles.infoItem}>
                    <span className="material-symbols-outlined">mail</span>
                    <div>
                      <h3 className={styles.itemLabel}>Email</h3>
                      <p className={styles.itemValue}>
                        <a href="mailto:rahimanks.abdul@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                          rahimanks.abdul@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className={styles.infoItem}>
                    <span className="material-symbols-outlined">location_on</span>
                    <div>
                      <h3 className={styles.itemLabel}>Location</h3>
                      <p className={styles.itemValue}>Kochi, Kerala, India</p>
                    </div>
                  </div>
                </div>

                <div className={styles.socialLinks}>
                  <a href="https://github.com/AbdulRahimanKS" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/abdul-rahiman-ks" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/_rxh_mxn_/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <div className="card">
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className={styles.input} 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        placeholder="e.g. David Miller"
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        className={styles.input} 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        placeholder="david@company.com"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className={styles.input} 
                      value={formData.subject}
                      onChange={handleChange}
                      required 
                      placeholder="e.g. Project Inquiry / Job Opportunity"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className={styles.textarea} 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                      placeholder="Tell me about your project, goals, or timeline..."
                      rows="5"
                    ></textarea>
                  </div>

                  <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                    Send Message
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', marginLeft: '8px' }}>send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
