import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import Transactions from './Transactions';
import Accounts from './Accounts';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
