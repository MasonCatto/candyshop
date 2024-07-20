import React from 'react';
import './LayoutManager.css';
import TopNavigation from './Components/TopNavigation/NavigationLayout.jsx';
import Footer from './Components/Footer/Footer.jsx';

const Layout = ({ children }) => {
  return (
    <div className="Layout-container">
      <TopNavigation />
        <div className="Body-components">
            {children}
        </div>
      <Footer />
    </div>
  );
}

export default Layout;