import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container">
      <header className="fixed-header">
        <div className="header-container">
          <Link to="/" className="logo">
            <img src="src/images/icon.png" alt="Camera" className="logo-img" />
            <span className="logo-text">MovieSite</span>
          </Link>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            <span className="theme-icon">{theme === 'light' ? '☀️' : '🌙'}</span>
          </button>
        </div>
      </header>

      <main style={{ paddingTop: '80px' }}>
        {children}
      </main>

      <footer className="footer">
        <p className="footer-text">© 2025 Movie site. Student team.</p>
        <p className="footer-text">Web development training project</p>
      </footer>
    </div>
  );
}