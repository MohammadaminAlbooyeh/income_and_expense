import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import App from './App';
import Transactions from './Transactions';
import Accounts from './Accounts';
import CreditCards from './CreditCards';
import Calendar from './Calendar';
import Reports from './Reports';

export default function AppRoutes() {
  const [transactions, setTransactions] = React.useState([
    { id: 1, type: 'income', amount: 5000, category: 'salary', date: '2025-07-01', description: 'July Salary' },
    { id: 2, type: 'expense', amount: 120, category: 'food', date: '2025-07-02', description: 'Lunch' },
  ]);
  return (
    <Routes>
      <Route element={<Layout title="Overview" />}>
        <Route path="/" element={<App transactions={transactions} setTransactions={setTransactions} />} />
      </Route>
      <Route element={<Layout title="Transactions" />}>
        <Route path="/transactions" element={<Transactions transactions={transactions} setTransactions={setTransactions} />} />
      </Route>
      <Route element={<Layout title="Accounts" />}>
        <Route path="/accounts" element={<Accounts />} />
      </Route>
      <Route element={<Layout title="Credit Cards" />}>
        <Route path="/credit-cards" element={<CreditCards />} />
      </Route>
      <Route element={<Layout title="Calendar" />}>
        <Route path="/calendar" element={<Calendar />} />
      </Route>
      <Route element={<Layout title="Reports" />}>
        <Route path="/reports" element={<Reports />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
