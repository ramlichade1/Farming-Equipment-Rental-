import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const Cart = () => {
  const cartItems = [
    { name: 'Tractor', price: 1200, img: '/tractor.jpg' },
    { name: 'Harvester', price: 2000, img: '/harvester.jpg' },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>Cart</Typography>
      {cartItems.map((item, index) => (
        <Card key={index} sx={{ display: 'flex', mb: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 100 }}
            image={item.img}
            alt={item.name}
          />
          <CardContent>
            <Typography>{item.name}</Typography>
            <Typography variant="body2">₹{item.price} / day</Typography>
          </CardContent>
        </Card>
      ))}
      <Typography variant="h6">Total: ₹{total}</Typography>
      <Button variant="contained" fullWidth sx={{ mt: 2 }}>Proceed to Book</Button>
    </Box>
  );
};

export default Cart;
