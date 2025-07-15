import React from 'react';
import BottomNavigation from './BottomNavigation';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground pb-16">
      {children}
      <BottomNavigation />
    </div>
  );
}

export default Layout;

