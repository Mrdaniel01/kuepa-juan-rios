import React from 'react';
import { MainPanel } from './components/MainPanel';
import { SideClientsNotification } from './components/SideClientsNotification';
import { SideMenu } from './components/SideMenu';

export function KuepaApp() {
  return (
    <div className="Page__Home">
      <SideMenu />
      <MainPanel />
      <SideClientsNotification />
    </div>
  );
}


