import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.css';

const BASE_URL = import.meta.env.BASE_URL;

export const Header: React.FC = () => {
  return (
    <header className={styles['fixed-header']}>
      <div className={styles['header-container']}>
        <Link to="/" className={styles.logo}>
          <img 
            src={`${BASE_URL}images/icon.png`} 
            alt="Camera" 
            className={styles['logo-img']}
          />
          <span className={styles['logo-text']}>MovieSite</span>
        </Link>
        
        <ThemeToggle />
      </div>
    </header>
  );
};