import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  IconButton,
  Divider,
  Paper
} from '@mui/material';
import { Add, Remove, ExpandMore } from '@mui/icons-material';
import BottomNav from '../components/BottomNav';

const Cart = () => {
  return (
    <Box sx={{ p: 2 }}>
      
      {/* 🛒 Cart Item */}
      <Card sx={{ mb: 2, borderRadius: 3 }}>
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography fontWeight={600}>Pomegranate</Typography>
            <Typography fontWeight={600} sx={{ color: '#007E2F' }}>₹100</Typography>
          </Box>

          <Button size="small" sx={{ mt: 1 }} variant="text" sx={{ color: '#007E2F' }}>
            Add more items
          </Button>

          <Box
            sx={{
              mt: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              justifyContent: 'flex-end'
            }}
          >
            <IconButton size="small" sx={{ bgcolor: '#eaf7e7' }}>
              <Remove fontSize="small" sx={{ color: '#007E2F' }} />
            </IconButton>
            <Typography>1</Typography>
            <IconButton size="small" sx={{ bgcolor: '#eaf7e7' }}>
              <Add fontSize="small" sx={{ color: '#007E2F' }} />
            </IconButton>
          </Box>
        </CardContent>
      </Card>

      {/* 🧾 Apply Coupon */}
      <Paper sx={{ p: 2, mb: 2, borderRadius: 3, cursor: 'pointer' }}>
        <Typography sx={{ color: '#007E2F', fontWeight: 500 }}>
          Apply Coupon
        </Typography>
      </Paper>

      {/* 📦 Invoice Section */}
      <Paper sx={{ p: 2, mb: 2, borderRadius: 3 }}>
        <Typography fontWeight={600} mb={1}>Invoice</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography>Original Price</Typography>
          <Typography>₹100</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Delivery</Typography>
          <Typography color="error">+40</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>GST</Typography>
          <Typography color="error">+18</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Discount</Typography>
          <Typography sx={{ color: '#007E2F' }}>-20</Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight={600}>Total</Typography>
          <Typography fontWeight={600} sx={{ color: '#007E2F' }}>₹138</Typography>
        </Box>
      </Paper>

      {/* 🚚 Shipping Details */}
      <Box sx={{ mb: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography fontWeight={600}>Shipping Details</Typography>
          <Typography fontSize={14} fontWeight={500} sx={{ color: '#007E2F', cursor: 'pointer' }}>
            Edit
          </Typography>
        </Box>
        <Paper sx={{ p: 2, borderRadius: 3 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography fontWeight={600}>Michael Miller</Typography>
            <Box display="flex" alignItems="center" gap={0.5}>
              <Typography fontSize={14} sx={{ color: '#007E2F' }}>Home</Typography>
              <ExpandMore fontSize="small" />
            </Box>
          </Box>
          <Typography fontSize={14} sx={{ mt: 0.5 }}>
            70 Washington Square South, New York, NY 10012, United States
          </Typography>
          <Typography fontSize={14} sx={{ mt: 0.5 }}>
            +91 12345 67890
          </Typography>
        </Paper>
      </Box>

      {/* 📝 Delivery Instructions */}
      <Paper sx={{ p: 2, mb: 2, borderRadius: 3, cursor: 'pointer' }}>
        <Typography sx={{ color: '#007E2F', fontWeight: 500 }}>
          Add Delivery Instructions
        </Typography>
      </Paper>

      {/* ✅ Proceed Button */}
      <Button
        fullWidth
        sx={{
          borderRadius: 999,
          py: 1.3,
          backgroundColor: '#007E2F',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#006a29',
          }
        }}
      >
        Proceed to Checkout
      </Button>
      <BottomNav />
    </Box>
  );
};

export default Cart;
