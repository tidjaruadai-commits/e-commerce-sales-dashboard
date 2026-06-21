import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Header = ({ title }) => {
  return (
    <header className="header glass-card">
      <div className="header-left">
        <h1 className="page-title">{title}</h1>
      </div>
      
      <div className="header-right">
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        
        <button className="icon-btn">
          <Bell size={20} />
          <span className="notification-badge"></span>
        </button>
        
        <div className="user-profile">
          <div className="avatar">
            <User size={20} />
          </div>
          <div className="user-info">
            <span className="user-name">Admin</span>
            <span className="user-role">Owner</span>
          </div>
        </div>
      </div>

      <style>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          margin-bottom: 2rem;
          border-radius: var(--radius-xl);
        }

        .page-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .search-bar {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          color: var(--text-secondary);
        }

        .search-input {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          padding: 0.5rem 1rem 0.5rem 2.5rem;
          color: var(--text-primary);
          outline: none;
          width: 250px;
          transition: all var(--transition-fast);
        }

        .search-input:focus {
          border-color: var(--accent-blue);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        .icon-btn {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.05);
          transition: all var(--transition-fast);
        }

        .icon-btn:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.1);
        }

        .notification-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          background-color: var(--accent-pink);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--accent-pink);
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          padding-left: 1.5rem;
          border-left: 1px solid var(--border-color);
        }

        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-weight: 600;
          font-size: 0.95rem;
        }

        .user-role {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
      `}</style>
    </header>
  );
};

export default Header;
