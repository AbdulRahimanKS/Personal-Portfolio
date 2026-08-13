import React from 'react';
import { useTheme } from '../context/ThemeContext';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={styles.toggleBtn} 
      onClick={toggleTheme}
      aria-label="Toggle Dark Mode"
      title="Toggle Dark Mode"
    >
      <span className="material-symbols-outlined">
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
