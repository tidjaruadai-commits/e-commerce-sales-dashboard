import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { TrendingUp, DollarSign, ShoppingBag, Activity } from 'lucide-react';
import { mockSalesData, summaryStats, recentTransactions } from '../data/mockData';

const StatCard = ({ title, value, icon: Icon, trend, colorClass }) => (
  <div className="stat-card glass-card animate-fade-in">
    <div className="stat-header">
      <div className="stat-info">
        <h3 className="stat-title">{title}</h3>
        <h2 className="stat-value">{value}</h2>
      </div>
      <div className={`stat-icon-wrapper ${colorClass}`}>
        <Icon size={24} />
      </div>
    </div>
    <div className="stat-footer">
      <span className={`trend ${trend > 0 ? 'positive' : 'negative'}`}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
      <span className="trend-label">vs last month</span>
    </div>
  </div>
);

const DashboardOverview = () => {
  return (
    <div className="dashboard-content">
      {/* Top Stats Row */}
      <div className="stats-grid">
        <StatCard 
          title="Total Revenue" 
          value={`฿${summaryStats.totalSales.toLocaleString()}`}
          icon={DollarSign}
          trend={12.5}
          colorClass="icon-blue"
        />
        <StatCard 
          title="Net Profit" 
          value={`฿${summaryStats.netProfit.toLocaleString()}`}
          icon={Activity}
          trend={8.2}
          colorClass="icon-green"
        />
        <StatCard 
          title="Profit Margin" 
          value={`${summaryStats.margin}%`}
          icon={TrendingUp}
          trend={-1.5}
          colorClass="icon-purple"
        />
        <StatCard 
          title="Total Orders" 
          value={summaryStats.orders.toLocaleString()}
          icon={ShoppingBag}
          trend={5.4}
          colorClass="icon-pink"
        />
      </div>

      <div className="charts-grid">
        {/* Main Chart */}
        <div className="chart-card glass-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="card-header">
            <h3>Revenue by Channel</h3>
          </div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockSalesData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorShopee" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ee4d2d" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ee4d2d" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorLazada" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0f146d" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#0f146d" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorFb" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1877f2" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#1877f2" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#191c29', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#f8fafc' }}
                />
                <Area type="monotone" dataKey="shopee" stroke="#ee4d2d" fillOpacity={1} fill="url(#colorShopee)" name="Shopee" />
                <Area type="monotone" dataKey="lazada" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorLazada)" name="Lazada" />
                <Area type="monotone" dataKey="facebook" stroke="#3b82f6" fillOpacity={1} fill="url(#colorFb)" name="Facebook" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="transactions-card glass-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="card-header">
            <h3>Recent Sales</h3>
            <button className="view-all">View All</button>
          </div>
          <div className="transactions-list">
            {recentTransactions.map((tx, idx) => (
              <div key={idx} className="transaction-item">
                <div className="tx-info">
                  <div className={`platform-badge ${tx.channel.toLowerCase()}`}>
                    {tx.channel[0]}
                  </div>
                  <div>
                    <p className="tx-id">{tx.id}</p>
                    <p className="tx-date">{tx.date}</p>
                  </div>
                </div>
                <div className="tx-amount">
                  <p className="amount">฿{tx.amount.toLocaleString()}</p>
                  <span className={`status ${tx.status.toLowerCase()}`}>{tx.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .dashboard-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }

        .stat-card {
          padding: 1.5rem;
        }

        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .stat-title {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .stat-value {
          font-size: 1.8rem;
          font-weight: 700;
        }

        .stat-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-blue { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }
        .icon-green { background: rgba(16, 185, 129, 0.15); color: #10b981; }
        .icon-purple { background: rgba(139, 92, 246, 0.15); color: #8b5cf6; }
        .icon-pink { background: rgba(236, 72, 153, 0.15); color: #ec4899; }

        .stat-footer {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
        }

        .trend.positive { color: #10b981; }
        .trend.negative { color: #ef4444; }
        .trend-label { color: var(--text-secondary); }

        .charts-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .charts-grid { grid-template-columns: 1fr; }
        }

        .chart-card, .transactions-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .card-header h3 {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .view-all {
          color: var(--accent-blue);
          font-size: 0.85rem;
          font-weight: 500;
        }

        .view-all:hover {
          text-decoration: underline;
        }

        .chart-container {
          height: 300px;
          width: 100%;
        }

        .transactions-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          overflow-y: auto;
          max-height: 300px;
        }

        .transaction-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          transition: background var(--transition-fast);
        }

        .transaction-item:hover {
          background: rgba(255, 255, 255, 0.06);
        }

        .tx-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .platform-badge {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .platform-badge.shopee { background: rgba(238, 77, 45, 0.2); color: #ee4d2d; }
        .platform-badge.lazada { background: rgba(139, 92, 246, 0.2); color: #8b5cf6; }
        .platform-badge.facebook { background: rgba(59, 130, 246, 0.2); color: #3b82f6; }

        .tx-id {
          font-weight: 500;
          margin-bottom: 0.25rem;
        }

        .tx-date {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .tx-amount {
          text-align: right;
        }

        .amount {
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .status {
          font-size: 0.75rem;
          padding: 2px 8px;
          border-radius: 12px;
          font-weight: 500;
        }

        .status.completed { background: rgba(16, 185, 129, 0.2); color: #10b981; }
        .status.pending { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
      `}</style>
    </div>
  );
};

export default DashboardOverview;
