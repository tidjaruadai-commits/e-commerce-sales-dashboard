export const mockSalesData = [
  { name: 'Jan', shopee: 4000, lazada: 2400, facebook: 2400 },
  { name: 'Feb', shopee: 3000, lazada: 1398, facebook: 2210 },
  { name: 'Mar', shopee: 2000, lazada: 9800, facebook: 2290 },
  { name: 'Apr', shopee: 2780, lazada: 3908, facebook: 2000 },
  { name: 'May', shopee: 1890, lazada: 4800, facebook: 2181 },
  { name: 'Jun', shopee: 2390, lazada: 3800, facebook: 2500 },
  { name: 'Jul', shopee: 3490, lazada: 4300, facebook: 2100 },
];

export const summaryStats = {
  totalSales: 124500,
  netProfit: 45200,
  margin: 36.3,
  orders: 1420
};

export const pnlData = {
  revenue: {
    shopee: 45000,
    lazada: 42000,
    facebook: 37500,
    total: 124500
  },
  cogs: 42000,
  expenses: {
    ads: 15000,
    shipping: 8500,
    platformFees: 9200,
    others: 4600,
    total: 37300
  },
  netProfit: 45200,
  margin: 36.3
};

export const recentTransactions = [
  { id: 'TRX-001', channel: 'Shopee', amount: 1250, status: 'Completed', date: '2026-06-21 10:30' },
  { id: 'TRX-002', channel: 'Lazada', amount: 890, status: 'Completed', date: '2026-06-21 09:45' },
  { id: 'TRX-003', channel: 'Facebook', amount: 2100, status: 'Pending', date: '2026-06-21 09:15' },
  { id: 'TRX-004', channel: 'Shopee', amount: 450, status: 'Completed', date: '2026-06-20 18:20' },
  { id: 'TRX-005', channel: 'Lazada', amount: 3200, status: 'Completed', date: '2026-06-20 15:40' }
];
