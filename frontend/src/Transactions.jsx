import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, Select, MenuItem, TextField, FormControl, InputLabel } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialTransactions = [
  { id: 1, type: 'income', amount: 5000, category: 'salary', date: '2025-07-01', description: 'July Salary' },
  { id: 2, type: 'expense', amount: 120, category: 'food', date: '2025-07-02', description: 'Lunch' },
];

const categories = [
  { value: 'salary', label: 'Salary' },
  { value: 'gift', label: 'Gift' },
  { value: 'investment', label: 'Investment' },
  { value: 'food', label: 'Food' },
  { value: 'transport', label: 'Transport' },
  { value: 'shopping', label: 'Shopping' },
  { value: 'bills', label: 'Bills' },
  { value: 'other', label: 'Other' },
];


export default function Transactions({ transactions, setTransactions }) {
  const [filterType, setFilterType] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [newTransaction, setNewTransaction] = useState({ type: 'income', amount: '', category: '', date: '', description: '' });

  const handleAdd = () => {
    if (!newTransaction.amount || !newTransaction.category || !newTransaction.date) return;
    setTransactions([
      ...transactions,
      { ...newTransaction, id: Date.now() },
    ]);
    setNewTransaction({ type: 'income', amount: '', category: '', date: '', description: '' });
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const filtered = transactions.filter(t =>
    (filterType === 'all' || t.type === filterType) &&
    (filterCategory === 'all' || t.category === filterCategory)
  );

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Transactions</Typography>
      {/* Add Transaction Form */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <FormControl sx={{ minWidth: 100 }} size="small">
            <InputLabel>Type</InputLabel>
            <Select
              value={newTransaction.type}
              label="Type"
              onChange={e => setNewTransaction({ ...newTransaction, type: e.target.value })}
            >
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Amount"
            type="number"
            size="small"
            value={newTransaction.amount}
            onChange={e => setNewTransaction({ ...newTransaction, amount: e.target.value })}
          />
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel>Category</InputLabel>
            <Select
              value={newTransaction.category}
              label="Category"
              onChange={e => setNewTransaction({ ...newTransaction, category: e.target.value })}
            >
              {categories.map(cat => (
                <MenuItem key={cat.value} value={cat.value}>{cat.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Date"
            type="date"
            size="small"
            value={newTransaction.date}
            onChange={e => setNewTransaction({ ...newTransaction, date: e.target.value })}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Description"
            size="small"
            value={newTransaction.description}
            onChange={e => setNewTransaction({ ...newTransaction, description: e.target.value })}
          />
          <Button variant="contained" color="primary" onClick={handleAdd}>Add</Button>
        </Box>
      </Paper>
      {/* Filter */}
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <FormControl sx={{ minWidth: 100 }} size="small">
          <InputLabel>Type</InputLabel>
          <Select
            value={filterType}
            label="Type"
            onChange={e => setFilterType(e.target.value)}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="income">Income</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel>Category</InputLabel>
          <Select
            value={filterCategory}
            label="Category"
            onChange={e => setFilterCategory(e.target.value)}
          >
            <MenuItem value="all">All</MenuItem>
            {categories.map(cat => (
              <MenuItem key={cat.value} value={cat.value}>{cat.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {/* Transactions Summary Box */}
      <Paper sx={{ p: 2, mb: 2, bgcolor: '#f1f8e9', border: '1px solid #c5e1a5' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>Transactions Summary</Typography>
        {filtered.length === 0 ? (
          <Typography variant="body2" color="text.secondary">No transactions found.</Typography>
        ) : (
          <Box component="ul" sx={{ pl: 2, mb: 0 }}>
            {filtered.map(t => (
              <li key={t.id}>
                <span style={{ fontWeight: 500 }}>{t.type === 'income' ? 'Income' : 'Expense'}</span>
                {` | ${categories.find(c => c.value === t.category)?.label || t.category}`}
                {` | ${t.amount} | ${t.date}`}
                {t.description ? ` | ${t.description}` : ''}
              </li>
            ))}
          </Box>
        )}
      </Paper>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map(t => (
              <TableRow key={t.id}>
                <TableCell>{t.type === 'income' ? 'Income' : 'Expense'}</TableCell>
                <TableCell>{t.amount}</TableCell>
                <TableCell>{categories.find(c => c.value === t.category)?.label || t.category}</TableCell>
                <TableCell>{t.date}</TableCell>
                <TableCell>{t.description}</TableCell>
                <TableCell>
                  <IconButton color="error" onClick={() => handleDelete(t.id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
