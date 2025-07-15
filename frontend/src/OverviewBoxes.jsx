import React, { useState } from 'react';
import { Box, Paper, Typography, IconButton, InputBase, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


export default function OverviewBoxes({ transactions, setTransactions }) {
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const [incomeCategory, setIncomeCategory] = useState('salary');
  const [expenseCategory, setExpenseCategory] = useState('food');

  const incomeCategories = [
    { value: 'salary', label: 'Salary' },
    { value: 'gift', label: 'Gift' },
    { value: 'investment', label: 'Investment' },
    { value: 'other', label: 'Other' },
  ];
  const expenseCategories = [
    { value: 'food', label: 'Food' },
    { value: 'transport', label: 'Transport' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'bills', label: 'Bills' },
    { value: 'other', label: 'Other' },
  ];


  // مجموع درآمد
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + Number(t.amount), 0);
  // مجموع هزینه
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + Number(t.amount), 0);

  // افزودن تراکنش درآمد جدید
  const handleAddIncome = () => {
    if (!income || isNaN(Number(income))) return;
    setTransactions([
      ...transactions,
      {
        id: Date.now(),
        type: 'income',
        amount: Number(income),
        category: incomeCategory,
        date: new Date().toISOString().slice(0, 10),
        description: '',
      },
    ]);
    setIncome('');
  };

  // افزودن تراکنش هزینه جدید
  const handleAddExpense = () => {
    if (!expense || isNaN(Number(expense))) return;
    setTransactions([
      ...transactions,
      {
        id: Date.now(),
        type: 'expense',
        amount: Number(expense),
        category: expenseCategory,
        date: new Date().toISOString().slice(0, 10),
        description: '',
      },
    ]);
    setExpense('');
  };

  return (
    <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
      {/* Income Box */}
      <Paper elevation={3} sx={{ p: 3, minWidth: 220, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ mb: 1 }}>Income</Typography>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Total: {totalIncome}</Typography>
        <FormControl fullWidth sx={{ mb: 1 }} size="small">
          <InputLabel id="income-category-label">Category</InputLabel>
          <Select
            labelId="income-category-label"
            value={incomeCategory}
            label="Category"
            onChange={e => setIncomeCategory(e.target.value)}
          >
            {incomeCategories.map(cat => (
              <MenuItem key={cat.value} value={cat.value}>{cat.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton sx={{ bgcolor: '#4caf50', color: 'white', mb: 1, '&:hover': { bgcolor: '#388e3c' } }} size="large" onClick={handleAddIncome}>
          <AddCircleIcon fontSize="large" />
        </IconButton>
        <InputBase
          placeholder="Enter income"
          value={income}
          onChange={e => setIncome(e.target.value)}
          sx={{ mt: 1, border: '1px solid #e0e0e0', borderRadius: 2, px: 1, width: '100%' }}
          inputProps={{ 'aria-label': 'income input' }}
        />
      </Paper>
      {/* Expense Box */}
      <Paper elevation={3} sx={{ p: 3, minWidth: 220, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ mb: 1 }}>Expenses</Typography>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Total: {totalExpense}</Typography>
        <FormControl fullWidth sx={{ mb: 1 }} size="small">
          <InputLabel id="expense-category-label">Category</InputLabel>
          <Select
            labelId="expense-category-label"
            value={expenseCategory}
            label="Category"
            onChange={e => setExpenseCategory(e.target.value)}
          >
            {expenseCategories.map(cat => (
              <MenuItem key={cat.value} value={cat.value}>{cat.label}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton sx={{ bgcolor: '#f44336', color: 'white', mb: 1, '&:hover': { bgcolor: '#b71c1c' } }} size="large" onClick={handleAddExpense}>
          <RemoveCircleIcon fontSize="large" />
        </IconButton>
        <InputBase
          placeholder="Enter expense"
          value={expense}
          onChange={e => setExpense(e.target.value)}
          sx={{ mt: 1, border: '1px solid #e0e0e0', borderRadius: 2, px: 1, width: '100%' }}
          inputProps={{ 'aria-label': 'expense input' }}
        />
      </Paper>
    </Box>
  );
}
