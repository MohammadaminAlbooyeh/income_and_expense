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
  return (
    <Routes>
      <Route element={<Layout title="Overview" />}>
        <Route path="/" element={<App />} />
      </Route>
      <Route element={<Layout title="Transactions" />}>
        <Route path="/transactions" element={<Transactions />} />
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
