import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#F4F5F9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1 }}>
        <IconButton onClick={() => navigate(-1)} sx={{ color: 'black' }}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <Typography variant="h6" fontWeight={600} ml={12} >
          Order Success
        </Typography>
      </Box>

      {/* Success Message */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <ShoppingBagOutlinedIcon sx={{ fontSize: 100, color: '#4CAF50' }} />
        <Typography fontWeight={600} mt={3}>
          Your order was successful!
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center" mt={1} px={5}>
          You will get a response within a few minutes.
        </Typography>
      </Box>

      {/* Track Order Button */}
      <Box sx={{ px: 2, pb: 3 }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            background: 'linear-gradient(to right, #A4E057, #00B84C)',
            borderRadius: 2,
            textTransform: 'none',
            py: 1.2,
            fontWeight: 600,
            fontSize: 16,
          }}
        >
          Track order
        </Button>
      </Box>
    </Box>
  );
};

export default OrderSuccess;
