import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import { ThemeProvider } from '../contexts/ThemeContext';
import { DataProvider } from '../contexts/DataContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <DataProvider>
      <ThemeProvider>
        <div className="layout">
          <Header />
          <main className="main-content">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="page-content"
            >
              {children}
            </motion.div>
          </main>
          <Footer />
          <BackToTop />
        </div>
      </ThemeProvider>
    </DataProvider>
  );
};

export default Layout;