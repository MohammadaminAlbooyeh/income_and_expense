import React, { useState } from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const initialCards = [
  { id: 1, bank: 'Bank A', number: '**** 1234', debt: 1200, due: '2025-07-20' },
  { id: 2, bank: 'Bank B', number: '**** 5678', debt: 800, due: '2025-08-05' },
];

export default function CreditCards() {
  const [cards, setCards] = useState(initialCards);
  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ bank: '', number: '', debt: '', due: '' });

  const handleOpen = (card = null) => {
    if (card) {
      setEditId(card.id);
      setForm({ bank: card.bank, number: card.number, debt: card.debt, due: card.due });
    } else {
      setEditId(null);
      setForm({ bank: '', number: '', debt: '', due: '' });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setForm({ bank: '', number: '', debt: '', due: '' });
    setEditId(null);
  };

  const handleSave = () => {
    if (!form.bank || !form.number || form.debt === '' || !form.due) return;
    if (editId) {
      setCards(cards.map(card => card.id === editId ? { ...card, ...form, debt: Number(form.debt) } : card));
    } else {
      setCards([...cards, { id: Date.now(), ...form, debt: Number(form.debt) }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setCards(cards.filter(card => card.id !== id));
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Credit Cards</Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }} onClick={() => handleOpen()}>Add Card</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Bank</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Debt</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map(card => (
              <TableRow key={card.id}>
                <TableCell>{card.bank}</TableCell>
                <TableCell>{card.number}</TableCell>
                <TableCell>{card.debt}</TableCell>
                <TableCell>{card.due}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleOpen(card)}><EditIcon /></IconButton>
                  <IconButton color="error" onClick={() => handleDelete(card.id)}><DeleteIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editId ? 'Edit Card' : 'Add Card'}</DialogTitle>
        <DialogContent>
          <TextField
            label="Bank"
            fullWidth
            sx={{ mb: 2 }}
            value={form.bank}
            onChange={e => setForm({ ...form, bank: e.target.value })}
          />
          <TextField
            label="Number"
            fullWidth
            sx={{ mb: 2 }}
            value={form.number}
            onChange={e => setForm({ ...form, number: e.target.value })}
          />
          <TextField
            label="Debt"
            type="number"
            fullWidth
            sx={{ mb: 2 }}
            value={form.debt}
            onChange={e => setForm({ ...form, debt: e.target.value })}
          />
          <TextField
            label="Due Date"
            type="date"
            fullWidth
            value={form.due}
            onChange={e => setForm({ ...form, due: e.target.value })}
            InputLabelProps={{ shrink: true }}
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
