import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Divider,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import {
  ArrowBack,
  Refresh,
  LocalOffer,
  LocalShipping,
  AccessTime,
  CheckCircle,
} from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';

const ApplyFilters = () => {
  const [checked, setChecked] = useState([1, 2]); // Initially checked options
  const [rating, setRating] = useState(4);

  const toggleCheckbox = (value) => {
    setChecked((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        sx={{ color: i < count ? '#FFC107' : '#E0E0E0' }}
      />
    ));
  };

  return (
    <Box sx={{ bgcolor: '#F4F5F9', minHeight: '100vh', px: 2, pt: 2, pb: 10 }}>
      {/* Top Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <IconButton><ArrowBack /></IconButton>
        <Typography variant="h6" fontWeight={600}>Apply Filters</Typography>
        <IconButton><Refresh /></IconButton>
      </Box>

      {/* Price Range */}
      <Box sx={{ bgcolor: 'white', borderRadius: 2, p: 2, mb: 2 }}>
        <Typography fontWeight={600} gutterBottom>Price Range</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField fullWidth placeholder="Min." size="small" />
          <TextField fullWidth placeholder="Max." size="small" />
        </Box>
      </Box>

      {/* Star Rating */}
      <Box sx={{ bgcolor: 'white', borderRadius: 2, p: 2, mb: 2 }}>
        <Typography fontWeight={600} gutterBottom>Star Rating</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>{renderStars(rating)}</Box>
          <Typography color="text.secondary">{rating} stars</Typography>
        </Box>
      </Box>

      {/* Other Filters */}
      <Box sx={{ bgcolor: 'white', borderRadius: 2 }}>
        <List>
          {[
            { icon: <LocalOffer />, text: 'Discount' },
            { icon: <LocalShipping />, text: 'Free shipping' },
            { icon: <AccessTime />, text: 'Same day delivery' },
          ].map((item, idx) => (
            <ListItem
              key={idx}
              button
              onClick={() => toggleCheckbox(idx)}
              secondaryAction={
                checked.includes(idx) && (
                  <CheckCircle sx={{ color: '#007E2F' }} />
                )
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Apply Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          position: 'fixed',
          bottom: 16,
          left: 16,
          right: 16,
          background: 'linear-gradient(to right, #A0E850, #4CAF50)',
          color: 'white',
          textTransform: 'none',
          borderRadius: 2,
        }}
      >
        Apply filter
      </Button>
    </Box>
  );
};

export default ApplyFilters;
