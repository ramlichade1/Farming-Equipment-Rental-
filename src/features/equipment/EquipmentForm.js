import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent
} from '@mui/material';

const equipments = [
  {
    name: 'Tractor',
    price: 1500,
    category: 'Heavy Equipment'
  }
];

const Equipment = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        My Equipments
      </Typography>

      {equipments.map((item, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography fontWeight={600}>
              {item.name}
            </Typography>

            <Typography color="text.secondary">
              ₹{item.price}
            </Typography>

            <Typography color="text.secondary">
              {item.category}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Equipment;