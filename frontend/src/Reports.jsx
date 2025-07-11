import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function Reports() {
  // اینجا می‌توان نمودارها و گزارش‌های آماری را اضافه کرد
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Reports & Charts</Typography>
      <Paper sx={{ p: 4, textAlign: 'center', color: '#888' }}>
        {/* اینجا نمودارها و گزارش‌های آماری نمایش داده می‌شود */}
        Reports and charts coming soon...
      </Paper>
    </Box>
  );
}
