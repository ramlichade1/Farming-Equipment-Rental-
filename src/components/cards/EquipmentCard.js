// components/EquipmentCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const EquipmentCard = ({ name, price, image }) => {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3, mb: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
        sx={{ objectFit: 'contain', p: 2 }}
      />
      <CardContent>
        <Typography variant="h6" fontWeight={600}>
          {name}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
          <Typography color="text.secondary">₹{price}</Typography>
          <Box>
            <IconButton><FavoriteBorderIcon /></IconButton>
            <IconButton><AddShoppingCartIcon /></IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EquipmentCard;
