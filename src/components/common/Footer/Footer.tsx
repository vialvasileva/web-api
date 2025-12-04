import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles['footer-text']}>© 2025 Movie site. Student team.</p>
      <p className={styles['footer-text']}>Web development training project</p>
    </footer>
  );
};