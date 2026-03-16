import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Container
} from '@mui/material';
import {
  Add,
  Remove,
  Delete,
  ArrowBack,
} from '@mui/icons-material';
import BottomNav from '../components/common/BottomNav';

const cartItems = [
  { id: 1, name: 'Fresh Broccoli', qty: 5, price: '$2.22 x 4', unit: '1.50 lbs' },
  { id: 2, name: 'Black Grapes', qty: 5, price: '$2.22 x 4', unit: '5.0 lbs', deletable: true },
  { id: 3, name: 'Avacoda', qty: 5, price: '$2.22 x 4', unit: '1.50 lbs' },
  { id: 4, name: 'Pineapple', qty: 5, price: '$2.22 x 4', unit: 'dozen' },
];

const Cart = () => {
  return (
    <Box sx={{ bgcolor: '#F4F5F9', minHeight: '100vh', pb: 10 }}>
      <Container
        maxWidth="lg"
        sx={{
          px: {
            xs: 1,
            sm: 2,
            md: 3
          }
        }}
      >
        <Box
          sx={{
            maxWidth: {
              xs: '100%',
              md: '1000px'
            },
            mx: 'auto'
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: 2,
              py: 2
            }}
          >
            <IconButton>
              <ArrowBack />
            </IconButton>

            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                ml: {
                  xs: 4,
                  md: 2
                }
              }}
            >
              Shopping Cart
            </Typography>
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
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
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

                    <Typography fontWeight={600}>
                      {item.name}
                    </Typography>

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
          <Box
            sx={{
              px: 3,
              pt: 3,
              pb: 2,
              bgcolor: '#fff',
              borderRadius: 3,
              mt: 4,
              mx: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              maxWidth: {
                xs: '100%',
                md: '450px'
              },
              mx: 'auto'
            }}
          >
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
                textTransform: 'none'
              }}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </Container>

      <BottomNav />
    </Box>
  );
};

export default Cart;