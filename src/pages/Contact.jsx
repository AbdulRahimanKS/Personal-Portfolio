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
                      <p className={styles.itemValue}>hello@alexjohnson.dev</p>
                    </div>
                  </div>
                  
                  <div className={styles.infoItem}>
                    <span className="material-symbols-outlined">location_on</span>
                    <div>
                      <h3 className={styles.itemLabel}>Location</h3>
                      <p className={styles.itemValue}>San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div className={styles.socialLinks}>
                  <a href="https://github.com/AbdulRahimanKS" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
                    <span className="material-symbols-outlined">code</span>
                  </a>
                  <a href="https://www.linkedin.com/in/abdul-rahiman-ks" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                    <span className="material-symbols-outlined">work</span>
                  </a>
                  <a href="https://www.instagram.com/_rxh_mxn_/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                    <span className="material-symbols-outlined">photo_camera</span>
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
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
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
                      placeholder="How can I help you?"
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
                      placeholder="Write your message here..."
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
