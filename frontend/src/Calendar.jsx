import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function Calendar() {
  // اینجا می‌توان یک کامپوننت تقویم واقعی مثل react-calendar یا fullcalendar-react اضافه کرد
  // فعلاً ساختار اولیه و جایگاه تقویم
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Calendar</Typography>
      <Paper sx={{ p: 4, textAlign: 'center', color: '#888' }}>
        {/* اینجا تقویم و تراکنش‌های هر روز نمایش داده می‌شود */}
        Calendar component coming soon...
      </Paper>
    </Box>
  );
}
