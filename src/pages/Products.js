import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Rating,
  Button,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const products = [
  { name: 'Tractor', price: 1000, rating: 4.5, reviews: 672 },
  { name: 'JCB', price: 3000, rating: 4.9, reviews: 324 },
  { name: 'Harvester', price: 7000, rating: 4.9, reviews: 560 },
  { name: 'Drone', price: 5000, rating: 4.7, reviews: 874 },
];

const Product = () => {
  const handleAddToCart = (name) => {
    toast.success(`${name} added to cart!`, {
      position: 'bottom-center',
      autoClose: 2000,
    });
  };

  return (
    <Box sx={{ px: 2, pb: 5 }}>
      <ToastContainer />

      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="subtitle1" fontWeight={600}>Browse Products</Typography>
        <Typography
          variant="body2"
          sx={{ textDecoration: 'underline', color: 'gray', cursor: 'pointer' }}
        >
          View all
        </Typography>
      </Box>

      {/* Product Grid */}
      <Grid container spacing={2}>
        {products.map((item, idx) => (
          <Grid item xs={6} key={idx}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 1,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 4,
                },
              }}
            >
              {/* Image Placeholder */}
              <Box
                sx={{
                  height: 110,
                  bgcolor: '#f0f0f0',
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                  position: 'relative',
                }}
              >
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: 6,
                    right: 6,
                    bgcolor: 'white',
                    width: 28,
                    height: 28,
                    boxShadow: 1,
                    '&:hover': { bgcolor: '#f5f5f5' },
                  }}
                  size="small"
                >
                  <FavoriteBorderIcon fontSize="small" />
                </IconButton>
              </Box>

              {/* Content */}
              <CardContent sx={{ pt: 1, pb: 1.5 }}>
                <Typography fontWeight={600} fontSize="0.9rem">{item.name}</Typography>
                <Typography fontSize="0.85rem" fontWeight={600}>₹{item.price}</Typography>
                <Box display="flex" alignItems="center" gap={0.5} mt={0.5}>
                  <Rating value={item.rating} precision={0.1} size="small" readOnly />
                  <Typography variant="caption" color="text.secondary">({item.reviews})</Typography>
                </Box>

                {/* Add to Cart Button */}
                <Button
                  fullWidth
                  variant="contained"
                  size="small"
                  onClick={() => handleAddToCart(item.name)}
                  sx={{
                    mt: 1,
                    background: 'linear-gradient(to right, #A4E057, #00B84C)',
                    textTransform: 'none',
                    fontSize: '0.75rem',
                    borderRadius: 2,
                    '&:hover': {
                      background: 'linear-gradient(to right, #00B84C, #A4E057)',
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;
