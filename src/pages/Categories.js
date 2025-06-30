import React from 'react';
import { Box, Typography, Stack } from '@mui/material';

const categories = [
  { name: 'Cultivation' },
  { name: 'Planting' },
  { name: 'Spraying' },
  { name: 'Harvesting' },
];

const Categories = () => {
  return (
    <Box sx={{ mb: 2 }}>
      {/* Heading */}
      <Box display="flex" justifyContent="space-between" alignItems="center" px={1.5} mb={1}>
        <Typography variant="subtitle1" fontWeight={600}>Categories</Typography>
        <Typography variant="body2" sx={{ textDecoration: 'underline', color: 'gray', cursor: 'pointer' }}>
          View all
        </Typography>
      </Box>

      {/* Scrollable Category Chips */}
      <Stack direction="row" spacing={1.5} sx={{ px: 1.5, overflowX: 'auto' }}>
        {categories.map((cat, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 1.5,
              py: 0.7,
              bgcolor: '#eaf7f0',
              borderRadius: 5,
              flexShrink: 0,
              minWidth: 100,
            }}
          >
            {/* Placeholder circle */}
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                bgcolor: '#d1d1d1',
              }}
            />
            <Typography variant="body2" fontWeight={500}>{cat.name}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Categories;
