import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardOverview from './components/DashboardOverview';
import PnLSummary from './components/PnLSummary';
import AIConsultant from './components/AIConsultant';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'pnl':
        return <PnLSummary />;
      case 'ai':
        return <AIConsultant />;
      default:
        return (
          <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
            <h2 className="gradient-text">Coming Soon</h2>
            <p className="text-secondary" style={{ marginTop: '1rem' }}>This module is currently under development.</p>
          </div>
        );
    }
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard Overview';
      case 'pnl': return 'P&L Analysis';
      case 'ai': return 'AI Business Consultant';
      case 'channels': return 'Sales Channels';
      case 'expenses': return 'Expense Management';
      case 'settings': return 'System Settings';
      default: return 'Dashboard';
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        <Header title={getPageTitle()} />
        <div className="content-area">
          {renderContent()}
        </div>
      </main>

      <style>{`
        .app-container {
          display: flex;
          min-height: 100vh;
        }

        .main-content {
          flex: 1;
          padding: 1rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .content-area {
          flex: 1;
        }

        /* Utility classes for shared styling */
        .text-secondary {
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}

export default App;
