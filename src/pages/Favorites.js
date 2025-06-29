import React from 'react';
import {
  Box,
  Typography,
  IconButton,
  Paper
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import BottomNav from '../components/BottomNav';
import { useNavigate } from 'react-router-dom';

const favoriteItems = [
  { id: 1, name: 'Fresh Broccoli', qty: 5, price: '$2.22 x 4', unit: '1.50 lbs' },
  { id: 2, name: 'Black Grapes', qty: 5, price: '$2.22 x 4', unit: '5.0 lbs' },
  { id: 3, name: 'Avacoda', qty: 5, price: '$2.22 x 4', unit: '1.50 lbs' },
  { id: 4, name: 'Pineapple', qty: 5, price: '$2.22 x 4', unit: 'dozen' }
];

const Favorites = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ bgcolor: '#fff', minHeight: '100vh' }}>
      {/* Top Bar with Back and Title */}
      <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1 }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h6" fontWeight={600} sx={{ ml: 13 }}>
          Favorites
        </Typography>
      </Box>

      {/* Favorite Items List */}
      <Box sx={{ px: 2, py: 1 }}>
        {favoriteItems.map((item) => (
          <Paper
            key={item.id}
            elevation={0}
            sx={{
              bgcolor: '#F4F5F9',
              borderRadius: 2,
              p: 2,
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {/* Image + Info */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: '#ddd',
                  borderRadius: 2
                }}
              />
              <Box>
                <Typography variant="caption" sx={{ color: '#007E2F', fontWeight: 500 }}>
                  {item.price}
                </Typography>
                <Typography fontWeight={600}>{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.unit}
                </Typography>
              </Box>
            </Box>

            {/* Quantity and Delete */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton size="small" sx={{ color: '#007E2F' }}>
                <AddIcon />
              </IconButton>
              <Typography>{item.qty}</Typography>
              <IconButton size="small" sx={{ color: '#007E2F' }}>
                <RemoveIcon />
              </IconButton>
              <IconButton sx={{ bgcolor: '#f44336', color: '#fff' }}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Paper>
        ))}
      </Box>
      <BottomNav />
    </Box>
  );
};

export default Favorites;
