import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  const leftLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
  ];

  const rightLinks = [
    { name: 'Projects', path: '#projects' },
    { name: 'Experience', path: '#experience' },
    { name: 'Contact', path: '#contact' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide/Show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // Scrolling down, hide
      } else {
        setIsVisible(true);  // Scrolling up, show
      }
      lastScrollY = currentScrollY;

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLink = (link) => (
    <a 
      key={link.name} 
      href={link.path}
      className={`${styles.navLink} ${activeSection === link.path.substring(1) ? styles.active : ''}`}
      onClick={() => setIsOpen(false)}
    >
      {link.name}
    </a>
  );

  return (
    <header className={`${styles.header} ${isVisible ? '' : styles.hidden}`}>
      <div className={styles.navbarContainer}>
        {/* Mobile Logo Placeholder (Left aligned on mobile) */}
        <a href="#home" className={styles.mobileLogo}>
          AR
        </a>

        {/* Desktop Navigation Wrapper */}
        <div className={styles.desktopNavWrapper}>
          <nav className={styles.leftNav}>
            {leftLinks.map(renderNavLink)}
          </nav>
          
          <a href="#home" className={styles.centerLogo}>
            AR
          </a>
          
          <nav className={styles.rightNav}>
            {rightLinks.map(renderNavLink)}
          </nav>
        </div>
        
        {/* Far Right: Actions */}
        <div className={styles.actions}>
          <ThemeToggle />
          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            <span className="material-symbols-outlined">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          {allLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path}
              className={`${styles.mobileNavLink} ${activeSection === link.path.substring(1) ? styles.active : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
