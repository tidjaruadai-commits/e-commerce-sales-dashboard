import React from 'react';
import { 
  LayoutDashboard, 
  LineChart, 
  MessageSquare, 
  Settings, 
  Store,
  CreditCard,
  LogOut
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Overview' },
    { id: 'pnl', icon: LineChart, label: 'P&L Analysis' },
    { id: 'ai', icon: MessageSquare, label: 'AI Consultant' },
    { id: 'channels', icon: Store, label: 'Sales Channels' },
    { id: 'expenses', icon: CreditCard, label: 'Expenses' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <aside className="sidebar glass-card">
      <div className="logo-container">
        <div className="logo-icon"></div>
        <h2 className="logo-text gradient-text">SellerPro AI</h2>
      </div>
      
      <nav className="nav-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon size={20} className="nav-icon" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button className="nav-item text-danger">
          <LogOut size={20} className="nav-icon" />
          <span>Logout</span>
        </button>
      </div>

      <style>{`
        .sidebar {
          width: 260px;
          height: calc(100vh - 2rem);
          position: sticky;
          top: 1rem;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          border-radius: var(--radius-xl);
          margin-left: 1rem;
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 2.5rem;
          padding: 0 0.5rem;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--gradient-primary);
          box-shadow: var(--shadow-glow);
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .nav-menu {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0.875rem 1rem;
          border-radius: var(--radius-lg);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
          font-weight: 500;
          font-size: 0.95rem;
        }

        .nav-item:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-item.active {
          color: var(--text-primary);
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .nav-item.active .nav-icon {
          color: var(--accent-blue);
          filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
        }

        .sidebar-footer {
          margin-top: auto;
          padding-top: 1rem;
          border-top: 1px solid var(--border-color);
        }

        .text-danger:hover {
          color: var(--accent-red);
          background: rgba(239, 68, 68, 0.1);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
