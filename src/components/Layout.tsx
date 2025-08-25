import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { ThemeProvider } from '../contexts/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="layout">
        <Header />
        <main className="main-content">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default Layout;