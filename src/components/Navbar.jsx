import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <Link to="/" className={styles.logo}>
        </Link>
        
        <div className={styles.rightSection}>
          <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className={styles.mobileActions}>
              <Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>Let's Talk</Link>
            </div>
          </nav>
          
          <div className={styles.actions}>
            <ThemeToggle />
            <Link to="/contact" className={`btn btn-primary ${styles.desktopBtn}`}>Let's Talk</Link>
            <button className={styles.mobileToggle} onClick={toggleMenu}>
              <span className="material-symbols-outlined">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
