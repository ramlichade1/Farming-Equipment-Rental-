import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
  Rating
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const products = [
  { name: 'Berries', price: 500, rating: 4.5, reviews: 672 },
  { name: 'Tulsi', price: 100, rating: 4.9, reviews: 324 },
  { name: 'Milk', price: 70, rating: 4.9, reviews: 560 },
  { name: 'Tomatos', price: 50, rating: 4.7, reviews: 874 },
];

const Product = () => {
  return (
    <Box sx={{ px: 1.5, pb: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="subtitle1" fontWeight={600}>Browse Products</Typography>
        <Typography variant="body2" sx={{ textDecoration: 'underline', color: 'gray', cursor: 'pointer' }}>
          View all
        </Typography>
      </Box>

      <Grid container spacing={1}>
        {products.map((item, idx) => (
          <Grid item xs={6} key={idx}> {/* xs=6 = half of 12 grid = 2 per row */}
            <Card sx={{ borderRadius: 3, boxShadow: 1 }}>
              <Box
                sx={{
                  height: 110,
                  bgcolor: '#e0e0e0',
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
                    height: 28
                  }}
                  size="small"
                >
                  <FavoriteBorderIcon fontSize="small" />
                </IconButton>
              </Box>

              <CardContent sx={{ pt: 1, pb: 1 }}>
                <Typography fontWeight={600} fontSize="0.9rem">{item.name}</Typography>
                <Typography fontSize="0.85rem" fontWeight={600}>₹{item.price}</Typography>
                <Box display="flex" alignItems="center" gap={0.5} mt={0.5}>
                  <Rating value={item.rating} precision={0.1} size="small" readOnly />
                  <Typography variant="caption" color="text.secondary">({item.reviews})</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;
