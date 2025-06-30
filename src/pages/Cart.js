import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
} from '@mui/material';
import {
  Add,
  Remove,
  Delete,
  ArrowBack,
} from '@mui/icons-material';
import BottomNav from '../components/BottomNav';

const cartItems = [
  { id: 1, name: 'Fresh Broccoli', qty: 5, price: '$2.22 x 4', unit: '1.50 lbs' },
  { id: 2, name: 'Black Grapes', qty: 5, price: '$2.22 x 4', unit: '5.0 lbs', deletable: true },
  { id: 3, name: 'Avacoda', qty: 5, price: '$2.22 x 4', unit: '1.50 lbs' },
  { id: 4, name: 'Pineapple', qty: 5, price: '$2.22 x 4', unit: 'dozen' },
];

const Cart = () => {
  return (
    <Box sx={{ bgcolor: '#F4F5F9', minHeight: '100vh', pb: 10 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1 }}>
        <IconButton><ArrowBack /></IconButton>
        <Typography variant="h6" fontWeight={600} ml={11}>Shopping Cart</Typography>
      </Box>

      {/* Cart Items */}
      <Box sx={{ px: 2 }}>
        {cartItems.map((item) => (
          <Box
            key={item.id}
            sx={{
              bgcolor: '#fff',
              borderRadius: 2,
              p: 2,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: '#ddd',
                  borderRadius: 2,
                }}
              />
              <Box>
                <Typography variant="caption" color="#007E2F">
                  {item.price}
                </Typography>
                <Typography fontWeight={600}>{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.unit}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {item.deletable ? (
                <IconButton sx={{ bgcolor: '#f44336', color: 'white' }}>
                  <Delete />
                </IconButton>
              ) : (
                <>
                  <IconButton size="small" sx={{ color: '#007E2F' }}>
                    <Add />
                  </IconButton>
                  <Typography>{item.qty}</Typography>
                  <IconButton size="small" sx={{ color: '#007E2F' }}>
                    <Remove />
                  </IconButton>
                </>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Totals */}
      <Box sx={{ px: 2, pt: 2, bgcolor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, mt: 18 }}>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography color="text.secondary">Subtotal</Typography>
          <Typography>$56.7</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography color="text.secondary">Shipping charges</Typography>
          <Typography>$1.5</Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography fontWeight={600}>Total</Typography>
          <Typography fontWeight={600}>$58.2</Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #A4E057, #00B84C)',
            color: '#fff',
            borderRadius: 2,
            textTransform: 'none',
            mb: 2,
          }}
        >
          Checkout
        </Button>
      </Box>

      <BottomNav />
    </Box>
  );
};

export default Cart;