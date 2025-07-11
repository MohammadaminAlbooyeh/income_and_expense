import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialAccounts = [
  { id: 1, name: 'Wallet', balance: 500 },
  { id: 2, name: 'Bank', balance: 3500 },
];

export default function Accounts() {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: '', balance: '' });

  const handleOpen = (account = null) => {
    if (account) {
      setEditId(account.id);
      setForm({ name: account.name, balance: account.balance });
    } else {
      setEditId(null);
      setForm({ name: '', balance: '' });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setForm({ name: '', balance: '' });
    setEditId(null);
  };

  const handleSave = () => {
    if (!form.name || form.balance === '') return;
    if (editId) {
      setAccounts(accounts.map(acc => acc.id === editId ? { ...acc, ...form, balance: Number(form.balance) } : acc));
    } else {
      setAccounts([...accounts, { id: Date.now(), ...form, balance: Number(form.balance) }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setAccounts(accounts.filter(acc => acc.id !== id));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Accounts</Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={() => handleOpen()}>Add Account</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map(acc => (
              <TableRow key={acc.id}>
                <TableCell>{acc.name}</TableCell>
                <TableCell>{acc.balance}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleOpen(acc)}><EditIcon /></IconButton>
                  <IconButton color="error" onClick={() => handleDelete(acc.id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editId ? 'Edit Account' : 'Add Account'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            sx={{ mb: 2 }}
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <TextField
            label="Balance"
            type="number"
            fullWidth
            value={form.balance}
            onChange={e => setForm({ ...form, balance: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
