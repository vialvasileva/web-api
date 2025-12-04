import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import styles from './ThemeToggle.module.css';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? '☀️' : '🌙';
  const themeLabel = theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme';

  return (
    <button
      onClick={toggleTheme}
      className={styles['theme-toggle']}
      title={themeLabel}
      aria-label={themeLabel}
    >
      <span className={styles['theme-icon']}>{themeIcon}</span>
    </button>
  );
};