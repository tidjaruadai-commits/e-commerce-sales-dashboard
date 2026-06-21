import React from 'react';
import { pnlData } from '../data/mockData';
import { FileText, Download, TrendingUp, AlertCircle } from 'lucide-react';

const PnLSummary = () => {
  return (
    <div className="pnl-container animate-fade-in">
      <div className="pnl-header">
        <div>
          <h2>Profit & Loss Statement</h2>
          <p className="text-secondary">Monthly summary for June 2026</p>
        </div>
        <button className="export-btn glass-card">
          <Download size={18} />
          Export Report
        </button>
      </div>

      <div className="pnl-grid">
        {/* Revenue Section */}
        <div className="pnl-card glass-card">
          <div className="section-header revenue">
            <h3>Revenue (Income)</h3>
            <span className="total">฿{pnlData.revenue.total.toLocaleString()}</span>
          </div>
          <div className="section-body">
            <div className="pnl-item">
              <span>Shopee Sales</span>
              <span>฿{pnlData.revenue.shopee.toLocaleString()}</span>
            </div>
            <div className="pnl-item">
              <span>Lazada Sales</span>
              <span>฿{pnlData.revenue.lazada.toLocaleString()}</span>
            </div>
            <div className="pnl-item">
              <span>Facebook Orders</span>
              <span>฿{pnlData.revenue.facebook.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* COGS Section */}
        <div className="pnl-card glass-card">
          <div className="section-header cogs">
            <h3>Cost of Goods Sold (COGS)</h3>
            <span className="total">-฿{pnlData.cogs.toLocaleString()}</span>
          </div>
          <div className="section-body">
            <div className="pnl-item">
              <span>Product Costs</span>
              <span>฿{pnlData.cogs.toLocaleString()}</span>
            </div>
          </div>
          <div className="section-footer gross-profit">
            <h4>Gross Profit</h4>
            <h4>฿{(pnlData.revenue.total - pnlData.cogs).toLocaleString()}</h4>
          </div>
        </div>

        {/* Expenses Section */}
        <div className="pnl-card glass-card">
          <div className="section-header expenses">
            <h3>Operating Expenses</h3>
            <span className="total">-฿{pnlData.expenses.total.toLocaleString()}</span>
          </div>
          <div className="section-body">
            <div className="pnl-item">
              <span>Ads & Marketing</span>
              <span>฿{pnlData.expenses.ads.toLocaleString()}</span>
            </div>
            <div className="pnl-item">
              <span>Shipping Fees</span>
              <span>฿{pnlData.expenses.shipping.toLocaleString()}</span>
            </div>
            <div className="pnl-item">
              <span>Platform Fees (Shopee/Lazada)</span>
              <span>฿{pnlData.expenses.platformFees.toLocaleString()}</span>
            </div>
            <div className="pnl-item">
              <span>Other Expenses</span>
              <span>฿{pnlData.expenses.others.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Net Profit Summary */}
        <div className="pnl-summary-card glass-card">
          <div className="net-profit-header">
            <TrendingUp size={32} className="profit-icon" />
            <div>
              <h3>Net Profit</h3>
              <p>After all expenses and taxes</p>
            </div>
          </div>
          <div className="net-profit-value">
            <h1 className="gradient-text">฿{pnlData.netProfit.toLocaleString()}</h1>
            <div className="margin-badge">
              {pnlData.margin}% Margin
            </div>
          </div>
          <div className="ai-insight">
            <AlertCircle size={18} className="insight-icon" />
            <p><strong>AI Insight:</strong> Your ad spend on Facebook is yielding a lower ROI this month. Consider reallocating budget to Shopee where conversion rates are up 12%.</p>
          </div>
        </div>
      </div>

      <style>{`
        .pnl-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .pnl-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .text-secondary {
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }

        .export-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0.75rem 1.25rem;
          color: var(--text-primary);
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .export-btn:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .pnl-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .pnl-grid { grid-template-columns: 1fr; }
        }

        .pnl-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .section-header h3 {
          font-size: 1.1rem;
        }

        .section-header.revenue .total { color: var(--accent-green); font-weight: 600; font-size: 1.1rem; }
        .section-header.cogs .total { color: var(--accent-orange); font-weight: 600; font-size: 1.1rem; }
        .section-header.expenses .total { color: var(--accent-red); font-weight: 600; font-size: 1.1rem; }

        .section-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .pnl-item {
          display: flex;
          justify-content: space-between;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .section-footer {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px dashed var(--border-color);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .gross-profit h4 {
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .pnl-summary-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: linear-gradient(135deg, rgba(25, 28, 41, 0.8), rgba(15, 23, 42, 0.9));
          border: 1px solid rgba(59, 130, 246, 0.3);
          box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.3);
        }

        .net-profit-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .profit-icon {
          color: var(--accent-green);
          padding: 8px;
          background: rgba(16, 185, 129, 0.15);
          border-radius: 12px;
          width: 48px;
          height: 48px;
        }

        .net-profit-header p {
          color: var(--text-secondary);
          font-size: 0.85rem;
          margin-top: 0.25rem;
        }

        .net-profit-value {
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .net-profit-value h1 {
          font-size: 3rem;
          line-height: 1;
        }

        .margin-badge {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
          padding: 4px 12px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .ai-insight {
          display: flex;
          gap: 12px;
          padding: 1rem;
          background: rgba(139, 92, 246, 0.1);
          border-left: 3px solid var(--accent-purple);
          border-radius: 0 var(--radius-md) var(--radius-md) 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .insight-icon {
          color: var(--accent-purple);
          flex-shrink: 0;
          margin-top: 2px;
        }
      `}</style>
    </div>
  );
};

export default PnLSummary;
