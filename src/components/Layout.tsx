import React, { ReactNode } from 'react';
import { Header } from './common/Header/Header';
import { Footer } from './common/Footer/Footer';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <main style={{ paddingTop: '80px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};